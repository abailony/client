// lib/facebookApi.js
import fetch from 'node-fetch';

const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

async function fetchCampaigns(adAccountId) {
  const response = await fetch(`https://graph.facebook.com/v20.0/${adAccountId}/campaigns?fields=id,name,adsets{id,name,ads{id,name}}&access_token=${ACCESS_TOKEN}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.data || [];
}

async function fetchLeads(adId) {
  let allLeads = [];
  let url = `https://graph.facebook.com/v20.0/${adId}/leads?fields=id,created_time,field_data&limit=1000&access_token=${ACCESS_TOKEN}`;

  while (url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    allLeads = allLeads.concat(data.data || []);
    
    // Check if there's a next page
    url = data.paging?.next || null;
  }

  return allLeads;
}

export async function fetchCampaignsAndLeads(adAccountId) {
  const campaigns = await fetchCampaigns(adAccountId);
  
  const campaignsWithLeads = await Promise.all(campaigns.map(async (campaign) => {
    const adsetsWithLeads = await Promise.all((campaign.adsets?.data || []).map(async (adset) => {
      const adsWithLeads = await Promise.all((adset.ads?.data || []).map(async (ad) => {
        const leads = await fetchLeads(ad.id);
        return { ...ad, leads };
      }));
      return { ...adset, ads: adsWithLeads };
    }));
    return { ...campaign, adsets: adsetsWithLeads };
  }));

  return { campaigns: campaignsWithLeads };
}

export async function updateUserAdAccountData(user) {
  const updatedAdAccounts = await Promise.all(user.adAccounts.map(async (adAccount) => {
    const campaignsAndLeads = await fetchCampaignsAndLeads(adAccount.id);
    return {
      ...adAccount.toObject(),
      ...campaignsAndLeads
    };
  }));

  user.adAccounts = updatedAdAccounts;
  await user.save();

  return user;
}