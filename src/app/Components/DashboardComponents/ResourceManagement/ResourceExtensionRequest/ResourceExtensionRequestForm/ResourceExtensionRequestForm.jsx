"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function ResourceExtensionRequestForm() {
  const router = useRouter();
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      {/* <h1 className="text-3xl font-bold mb-4">Enquiry Form</h1> */}

      {/* Enquiry related to */}

      {/* Dynamic Positions Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold">
            select resource extension
          </label>
          <select className="w-[200px] p-2 mt-1 border rounded">
            <option disabled selected>
              select
            </option>
            <option>BIM Modeler</option>
            <option>BIM Engineer</option>
            <option>BIM Architect</option>
            <option>BIM Coordinator</option>
            <option>BIM Manager</option>
            <option>Architect</option>
            <option>Engineer</option>
            <option>CAD Draftsman</option>
            <option>Civil 3D Draftsman</option>
            <option>Tekla Modeler</option>
            <option>Interior Designer</option>
            <option>3D Visualizer</option>
            <option>Quality Engineer</option>
            <option>Others</option>
          </select>
        </div>

        {/* <div>
          <label className="block text-sm font-semibold">Discipline -</label>
          <select className="w-[200px] p-2 mt-1 border rounded">
            <option disabled selected>
              No of days for extension
            </option>
            <option>Architecture</option>
            <option>Structure</option>
            <option>Mechanical</option>
            <option>Electrical</option>
            <option>Plumbing & Fire Fighting</option>
            <option>Landscape</option>
            <option>Interior</option>
            <option>P&ID</option>
            <option>Infrastructure</option>
            <option>Others</option>
          </select>
        </div> */}

        <div>
          <label className="block text-sm font-semibold">
            No of days for extension
          </label>
          <select className="w-full p-2 mt-1 border rounded">
            <option disabled selected>
              select
            </option>
            <option>1 Month</option>
            <option>2 Month</option>
            <option>3 Month</option>
            <option>4 Month</option>
            <option>5 Month</option>
            <option>6 Month</option>
            <option>7 Month</option>
            <option>8 Month</option>
            <option>9 Month</option>
            <option>10 Month</option>
            <option>11 Month</option>
            <option>12 Month</option>
            <option>More Then 1 Year</option>
          </select>
        </div>
      </div>

      {/* Add more positions */}

      {/* Workstation & BIM Software License Required */}

      {/* Required Software Expertise */}

      {/* Expected Mobilization Date */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">
          Extension Start Date
        </label>
        <input type="date" className="w-full p-2 mt-1 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">
          Extension End Date
        </label>
        <input type="date" className="w-full p-2 mt-1 border rounded" />
      </div>

      {/* Mobilization Emirates */}
      {/* <div className="mb-4">
        <label className="block text-sm font-semibold">
          Mobilization Emirates
        </label>
        <select className="w-full p-2 mt-1 border rounded">
          <option>Select</option>
          <option value="abu_dhabi">Abu Dhabi</option>
          <option value="dubai">Dubai</option>
          <option value="sharjah">Sharjah</option>
          <option value="ajman">Ajman</option>
          <option value="umm_al_quwain">Umm Al Quwain</option>
          <option value="ras_al_khaimah">Ras Al Khaimah</option>
          <option value="fujairah">Fujairah</option>
        </select>
      </div> */}

      {/* Additional Requirements */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Extension Remarks</label>
        <textarea
          placeholder="Enter any additional requirements"
          className="w-full p-2 mt-1 border rounded"
          rows="3"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-between items-center">
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Add Extension Request
        </button>
        <button
          onClick={() => {
            router.push(
              "/Dashboard/ResourceManagement/ResourceExtensionRequest/ResourceExtensionRequestHistory"
            );
          }}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          View Request Histroy
        </button>
      </div>
    </div>
  );
}
