import React, { useEffect, useState } from "react";
import api from "../api/axios";
import type { Restaurant } from "../types/restaurant";
import type { PaginatedResponse } from "../types/PaginatedResponse";

const Dashboard: React.FC = () => {
  const [response, setResponse] =
    useState<PaginatedResponse<Restaurant> | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageSize] = useState(10);

  useEffect(() => {
    const getRestaurants = async () => {
      setLoading(true); // ✅ START loading

      try {
        const res = await api.get(
          `/restaurants?pageNumber=${page}&pageSize=${pageSize}`,
        );

        setResponse(res.data);
      } catch (error) {
        console.error("Failed to fetch restaurants", error);
      } finally {
        setLoading(false); // ✅ ALWAYS stop loading
      }
    };

    getRestaurants();
  }, [page]);
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
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">City</th>
                <th className="px-6 py-4">Street</th>
                <th className="px-6 py-4">PostalCode</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center p-6">
                    Loading...
                  </td>
                </tr>
              ) : response?.items.length ? (
                response.items.map((restaurant) => (
                  <tr key={restaurant.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 max-w-sm truncate">
                      {restaurant.id}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate">
                      {restaurant.name}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate">
                      {restaurant.description}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate">
                      {restaurant.category}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate">
                      {restaurant.city}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate">
                      {restaurant.street}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate">
                      {restaurant.postalCode}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center p-6 text-gray-500">
                    No restaurants found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-t">
          {/* Left side info */}
          {/* Left side info */}
          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-semibold">{response?.itemsFrom ?? 0}</span> to{" "}
            <span className="font-semibold">{response?.itemsTo ?? 0}</span> of{" "}
            <span className="font-semibold">
              {response?.totalItemsCount ?? 0}
            </span>{" "}
            entries
          </p>

          {/* Right side pages */}
          <div className="flex gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 rounded-lg border hover:bg-gray-200 disabled:opacity-50"
            >
              Prev
            </button>

            <button className="px-3 py-1 rounded-lg bg-gray-800 text-white">
              {page}
            </button>

            <button
              disabled={!response || page >= response.totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-3 py-1 rounded-lg border hover:bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
