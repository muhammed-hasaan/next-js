"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function AvailableResources() {
  const router = useRouter();
  // Sample data for available resources
  const resources = [
    {
      position: "BIM Engineer",
      discipline: "Mechanical",
      availability: "3 Months",
      location: "Dubai",
      resourceCount: 5,
    },
    {
      position: "Architect",
      discipline: "Architecture",
      availability: "6 Months",
      location: "Abu Dhabi",
      resourceCount: 3,
    },
    {
      position: "3D Visualizer",
      discipline: "Interior",
      availability: "1 Month",
      location: "Sharjah",
      resourceCount: 2,
    },
    // Add more resources as needed
  ];

  return (
    <div className=" bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <p className="text-lg text-gray-700 mb-10 text-center leading-relaxed">
          Discover the current available resources at{" "}
          <span className="font-semibold text-red-500">
            ENGISOFT ENGINEERING
          </span>
          . Explore our skilled professionals across various disciplines ready
          to contribute to your projects.
        </p>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl hover:border-red-500 hover:border-2 transition duration-300 ease-in-out"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2 text-red-500">
                  {resource.position}
                </h3>
                <p className="text-gray-500">
                  <span className="font-semibold">Discipline: </span>
                  {resource.discipline}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-500">
                  <span className="font-semibold">Availability: </span>
                  {resource.availability}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-500">
                  <span className="font-semibold">Location: </span>
                  {resource.location}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-500">
                  <span className="font-semibold">Resources Available: </span>
                  {resource.resourceCount}
                </p>
              </div>
              <div
                onClick={() => {
                  router.push(
                    "/Dashboard/ResourceManagement/AvailableResources/AvailableResourceDetail"
                  );
                }}
                className="text-center mt-4"
              >
                <button className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
