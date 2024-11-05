"use client";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
const ResourceExtensionRequestHistoryTable = () => {
//   const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for deployed resources
  const resources = [
    {
      id: 1,
      name: "BIM Engineer",
      Duration: "2 Months",
      StartDate: "2024-11-1",
      EndDate: "2025-1-1",
    },
    {
      id: 2,
      name: "Quality Engineer",
      Duration: "5 Months",
      StartDate: "2024-10-5",
      EndDate: "2024-05-5",
    },
    // Add more resources as needed
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search resources..."
        className="p-2 border rounded mb-4 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="w-[1000px] border-collapse border border-gray-200 text-center">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              Resource Extension
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Extension Duration
            </th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
            {/* <th className="border border-gray-300 px-4 py-2">
              Extension Remarks
            </th> */}
          </tr>
        </thead>
        <tbody>
          {resources
            .filter((resource) =>
              resource.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((resource) => (
              <tr key={resource.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {resource.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {resource.Duration}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {resource.StartDate}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {resource.EndDate}
                </td>
                {/* <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => {
                      router.push(
                        "/Dashboard/ResourceManagement/CurrentlyDeployedResources/CurrentlyDeployedResourcesDetail"
                      );
                    }}
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </button>
                </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResourceExtensionRequestHistoryTable;
