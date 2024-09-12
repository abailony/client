//app/admin/dashboard/page.js
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Admin Dashboard</h1>
        <div className="flex flex-col space-y-4">
          <Link href="/admin/add-user">
            <p className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600 text-center">
              Add New Client
            </p>
          </Link>
          <Link href="/admin/manage-users">
            <p className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600 text-center">
              Manage Clients
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
