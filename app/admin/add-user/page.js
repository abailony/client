//app/admin/add-user/page.js
'use client';
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AdminAddUserForm from './AdminAddUserForm'; // Import the form component

export default function AdminPage() {
  const [adAccounts, setAdAccounts] = useState([]);
  const [selectedAdAccount, setSelectedAdAccount] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check if the adAccount param exists in the URL
  const adAccountParam = searchParams.get("adAccount");

  useEffect(() => {
    const fetchAdAccounts = async () => {
      try {
        const res = await fetch("/api/facebook/adaccounts"); // API route for Facebook data
        const data = await res.json();
        setAdAccounts(data.adaccounts.data); // Assuming data structure is similar to your screenshot
      } catch (error) {
        console.error("Error fetching ad accounts:", error);
      }
    };
    
    // Only fetch ad accounts if no adAccount param exists (i.e. we are in the select step)
    if (!adAccountParam) {
      fetchAdAccounts();
    }
  }, [adAccountParam]);

  // Handle account selection and redirection
  const handleSelect = () => {
    if (selectedAdAccount) {
      // Redirect to the add user form with the selected ad account as a query parameter
      router.push(`/admin/add-user?adAccount=${selectedAdAccount}`);
    } else {
      console.error("No ad account selected.");
    }
  };

  // If adAccountParam exists, show the Add User Form
  if (adAccountParam) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded shadow-md w-full max-w-md">
          <h1 className="mb-6 text-2xl font-bold text-center">Add New User</h1>
          <AdminAddUserForm /> {/* Display the form when an ad account is selected */}
        </div>
      </div>
    );
  }

  // Otherwise, show the ad account selection step
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Select Ad Account</h1>
        {adAccounts.length > 0 ? (
          <>
            <select
              value={selectedAdAccount}
              onChange={(e) => setSelectedAdAccount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="" disabled>Select an Ad Account</option>
              {adAccounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name} - {account.age}
                </option>
              ))}
            </select>
            <button
              onClick={handleSelect}
              className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Select Ad Account
            </button>
          </>
        ) : (
          <p>Loading ad accounts...</p>
        )}
      </div>
    </div>
  );
}
