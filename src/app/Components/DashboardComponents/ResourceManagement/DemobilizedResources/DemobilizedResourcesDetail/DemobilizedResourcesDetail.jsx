import React from "react";
import { useRouter } from "next/navigation";
const DemobilizedResourcesDetail = () => {
  const router = useRouter();
  const resource = {
    id: 1,
    name: "BIM Engineer",
    status: "Demobilized",
    location: "Abu Dhabi",
    DemobilizedDate: "2023-01-10",
    description:
      "The BIM Engineer is responsible for developing and managing building information models...",
    skills: [
      "AutoCAD",
      "Revit",
      "Project Management",
      "Construction Coordination",
    ],
    contactEmail: "bimengineer@company.com",
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto ">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{resource.name}</h1>
      <p className="text-gray-600 mb-6">
        Status: <span className="text-green-500">{resource.status}</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Location:</h2>
          <p className="text-gray-800">{resource.location}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700">
            Deployed Date:
          </h2>
          <p className="text-gray-800">{resource.DemobilizedDate}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700">Description:</h2>
        <p className="text-gray-800 leading-relaxed">{resource.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700">Skills:</h2>
        <ul className="list-disc pl-5 text-gray-800">
          {resource.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700">Contact:</h2>
        <p className="text-gray-800">{resource.contactEmail}</p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => {
            router.push("/Dashboard/ResourceManagement/DemobilizedResources/");
          }}
          className="px-6 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 focus:outline-none"
        >
          Back to Resources
        </button>
        {/* <button className="px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 focus:outline-none">
          Edit Resource
        </button> */}
      </div>
    </div>
  );
};

export default DemobilizedResourcesDetail;
