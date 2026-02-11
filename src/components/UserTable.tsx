import React from "react";

const Dashboard: React.FC = () => {
  const data = [
    { id: 1, name: "Ahmad", email: "ahmad@email.com", role: "Admin" },
    { id: 2, name: "Siti", email: "siti@email.com", role: "User" },
    { id: 3, name: "John", email: "john@email.com", role: "Manager" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            {/* Table Header */}
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Role</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {data.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-4 font-medium">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-t">
          {/* Left side info */}
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold">1</span> to{" "}
            <span className="font-semibold">10</span> of{" "}
            <span className="font-semibold">5009</span> entries
          </p>

          {/* Right side pages */}
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-lg border hover:bg-gray-200">
              Prev
            </button>

            <button className="px-3 py-1 rounded-lg bg-gray-800 text-white">
              1
            </button>

            <button className="px-3 py-1 rounded-lg border hover:bg-gray-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
