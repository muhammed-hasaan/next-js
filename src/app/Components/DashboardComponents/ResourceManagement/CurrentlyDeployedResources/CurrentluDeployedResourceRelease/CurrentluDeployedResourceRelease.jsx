import React from "react";
import { useRouter } from "next/navigation";
const CurrentluDeployedResourceRelease = () => {
  const router = useRouter();
  const resource = {
    id: 1,
    name: "BIM Engineer",
    location: "Dubai",
    deployedDate: "2023-01-10",
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg w-[600px] mx-auto ">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Release {resource.name}
      </h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Deployed Resource Information
        </h2>
        <p className="text-gray-800 mt-2">
          <span className="font-bold">Name:</span> {resource.name}
        </p>
        <p className="text-gray-800 mt-2">
          <span className="font-bold">Location:</span> {resource.location}
        </p>
        <p className="text-gray-800 mt-2">
          <span className="font-bold">Deployed Date:</span>{" "}
          {resource.deployedDate}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Reason for Release
        </h2>
        <textarea
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Please describe the reason for release..."
        ></textarea>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => {
            router.push(
              "/Dashboard/ResourceManagement/CurrentlyDeployedResources"
            );
          }}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md shadow hover:bg-gray-400 focus:outline-none"
        >
          Cancel
        </button>
        <button className="px-6 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 focus:outline-none">
          Confirm Release
        </button>
      </div>
    </div>
  );
};

export default CurrentluDeployedResourceRelease;
