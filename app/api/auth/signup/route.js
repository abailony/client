// app/api/auth/signup/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectMongo from '@/lib/mongodb';
import User from '@/models/User';
import { fetchCampaignsAndLeads } from '@/lib/facebookApi';

export async function POST(req) {
  try {
    const { name, email, password, role, adAccounts } = await req.json();
    console.log('Received signup request:', { name, email, role, adAccounts });

    if (!adAccounts || adAccounts.length === 0 || !adAccounts[0].id) {
      return NextResponse.json({ success: false, message: 'Invalid ad account data' }, { status: 400 });
    }

    await connectMongo();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Fetch campaigns and leads for each ad account
    const adAccountsWithData = await Promise.all(adAccounts.map(async (adAccount) => {
      console.log('Fetching data for ad account:', adAccount.id);
      const campaignsAndLeads = await fetchCampaignsAndLeads(adAccount.id);
      console.log('Campaigns and leads data:', JSON.stringify(campaignsAndLeads, null, 2));
      return {
        id: adAccount.id,
        name: adAccount.name,
        campaigns: campaignsAndLeads.campaigns
      };
    }));

    console.log('Ad accounts with data:', JSON.stringify(adAccountsWithData, null, 2));

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'user',
      adAccounts: adAccountsWithData,
    });

    await newUser.save();
    console.log('New user saved:', JSON.stringify(newUser.toObject(), null, 2));

    return NextResponse.json({ success: true, message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ success: false, message: 'Server error occurred', error: error.message }, { status: 500 });
  }
}