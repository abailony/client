//app/admin/add-user/AdminAddUserForm.js
"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminAddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");
  const [adAccount, setAdAccount] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const adAccountParam = searchParams.get("adAccount");
    if (adAccountParam) {
      setAdAccount(adAccountParam);
      fetchCampaigns(adAccountParam);
    }
  }, [searchParams]);

  const fetchCampaigns = async (adAccountId) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/facebook/campaigns?adAccountId=${adAccountId}`);
      const data = await res.json();
      setCampaigns(data.data || []);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
    setIsLoading(false);
  };

  const fetchLeads = async (adId) => {
    try {
      const res = await fetch(`/api/facebook/leads?adId=${adId}`);
      const data = await res.json();
      return data.leads.data || [];
    } catch (error) {
      console.error("Error fetching leads:", error);
      return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    try {
      // Fetch leads for each ad in each campaign
      const campaignsWithLeads = await Promise.all(
        campaigns.map(async (campaign) => {
          const adsWithLeads = await Promise.all(
            campaign.ads.data.map(async (ad) => {
              const leads = await fetchLeads(ad.id);
              return { ...ad, leads };
            })
          );
          return { ...campaign, ads: adsWithLeads };
        })
      );

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
          adAccounts: [
            {
              id: adAccount,
              campaigns: campaignsWithLeads,
            },
          ],
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to add user");
      }

      setMessage("User added successfully!");
      setName("");
      setEmail("");
      setPassword("");
      setRole("user");
    } catch (error) {
      console.error("Error adding user:", error);
      setMessage(error.message || "Server error. Please try again later.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {adAccount && (
        <p>Selected Ad Account: <strong>{adAccount}</strong></p>
      )}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user's name"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter user's email"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter user's password"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="moderator">Moderator</option>
      </select>
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add User
      </button>
      {message && (
        <p className={`mt-4 text-center ${message.includes("error") ? "text-red-500" : "text-green-500"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
