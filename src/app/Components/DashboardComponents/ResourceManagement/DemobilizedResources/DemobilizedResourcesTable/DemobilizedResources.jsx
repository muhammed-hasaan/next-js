import React, { useState } from "react";
import { useRouter } from "next/navigation";
const DemobilizedResourcesTable = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for deployed resources
  const resources = [
    {
      id: 1,
      name: "BIM Engineer",
      status: "Demobilized",
      location: "Dubai",
      deployedDate: "2023-01-10",
    },
    {
      id: 2,
      name: "Quality Engineer",
      status: "Demobilized",
      location: "Abu Dhabi",
      deployedDate: "2023-02-15",
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
            <th className="border border-gray-300 px-4 py-2">Resource Name</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Deployed Date</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
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
                  {resource.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {resource.location}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {resource.deployedDate}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => {
                      router.push(
                        "/Dashboard/ResourceManagement/DemobilizedResources/DemobilizedResourcesDetail"
                      );
                    }}
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DemobilizedResourcesTable;
