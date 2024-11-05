import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreaditNoteDataTable = () => {
  const router = useRouter();
  const data = [
    {
      noteId: "1",
      jobTitle: "Software Engineer",
      companyName: "Tech Corp",
      dateCreated: "2024-09-01",
      noteContent: "Follow up on application.",
      tags: "application, follow-up",
      status: "Pending",
    },
    {
      noteId: "2",
      jobTitle: "Graphic Designer",
      companyName: "Tech Designers",
      dateCreated: "2024-09-10",
      noteContent: "Follow up on application.",
      tags: "application, follow-up",
      status: "Approved",
    },
    {
      noteId: "3",
      jobTitle: "Video Editor",
      companyName: "Creative Edit",
      dateCreated: "2024-09-25",
      noteContent: "Follow up on application.",
      tags: "application, follow-up",
      status: "Reconciled",
    },

    // Add more notes as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilter = (status) => {
    setFilterStatus(status);
  };

  // Filter the data based on search term and status filter
  const filteredData = data.filter((item) => {
    const matchesSearch = Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesStatus =
      filterStatus === "All" ||
      item.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="mt-4 w-[100%] mx-auto">
      {/* Tabs for Status Filter */}
      <div className="flex justify-between items-center">
        <div className="mb-4 flex justify-center space-x-4 bg-red-100 p-1 rounded-md">
          {["All", "Pending", "Approved", "Reconciled"].map((status) => (
            <button
              key={status}
              className={`w-[100px] py-2 rounded-md ${
                filterStatus === status
                  ? "bg-[#ff0000] text-white"
                  : "text-gray-700"
              } hover:bg-[#ff0000] hover:text-white transition duration-300`}
              onClick={() => handleStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Search Filter */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search Notes..."
            className="border border-gray-300 p-2 rounded-lg w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[350px]"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Note Table */}
      <table className="w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-2 border-b">#</th>
            <th className="py-2 px-2 border-b whitespace-nowrap">Job Title</th>
            <th className="py-2 px-2 border-b whitespace-nowrap">
              Company Name
            </th>
            <th className="py-2 px-2 border-b">Date Created</th>
            <th className="py-2 px-2 border-b">Note Content</th>
            <th className="py-2 px-2 border-b">Tags</th>
            <th className="py-2 px-2 border-b">Status</th>
            <th className="py-2 px-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={item.noteId} className="text-center">
                <td className="py-2 px-2 border-b">{index + 1}</td>
                <td className="py-2 px-2 border-b">{item.jobTitle}</td>
                <td className="py-2 px-2 border-b">{item.companyName}</td>
                <td className="py-2 px-2 border-b">{item.dateCreated}</td>
                <td className="py-2 px-2 border-b">{item.noteContent}</td>
                <td className="py-2 px-2 border-b">{item.tags}</td>
                <td className="py-2 px-2 border-b">
                  <span
                    className={`px-2 py-1 rounded ${
                      item.status === "Pending"
                        ? "bg-yellow-300 text-black"
                        : item.status === "Reconciled"
                        ? "bg-green-300 text-black"
                        : "bg-blue-300 text-black"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-2 px-2 border-b">
                  <button
                    onClick={() =>
                      router.push(`/Dashboard/CreaditNote/CreaditNoteDetail`)
                    }
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Action
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="py-4 text-center text-gray-500">
                No matching results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CreaditNoteDataTable;
