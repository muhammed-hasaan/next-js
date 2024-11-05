"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // For sweet alert
import {
  FaUser,
  FaLaptopCode,
  FaLocationArrow,
  FaCalendarAlt,
} from "react-icons/fa"; // Icons for visual aid
import Image from "next/image";

export default function RequirementForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [positions, SetPositions] = useState([]);
  const [DisciplineList, setDisciplineList] = useState([]);

  const [formData, setFormData] = useState({
    enquiryRelatedTo: "",
    position: "",
    discipline: "",
    expectedDuration: "",
    numOfResources: "",
    workstationRequired: "",
    softwareExpertise: "",
    expectedMobilizationDate: "",
    mobilizationEmirates: "",
    mobilizationLocation: "",
    additionalRequirements: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    // Log all formData values to console
    console.log("Form Data:", formData);
    console.log("Selected Positions:", formData.position);
    console.log("Selected Discipline:", formData.discipline);

    setStep(4);

    // Simulate form submission and show a success message
    setTimeout(() => {
      Swal.fire({
        title: "Success!",
        text: "Form submitted successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        setStep(1);
      });
    }, 1000);
  };

  let completionPercentage =
    step === 2 ? 40 : step === 3 ? 70 : step === 4 ? 100 : 0;
  function category(category) {
    if (category === "BIM") {
      SetPositions([
        "BIM Modeler / BIM Technician",
        "BIM Designer",
        "BIM Architect",
        "BIM Coordinator",
        "BIM Manager",
        "BIM Lead",
        "BIM Project Manager",
        "BIM Implementation Specialist",
        "BIM Quality Control Specialist",
        "BIM Analyst",
        "BIM Facility Manager",
        "BIM Software Developer",
        "BIM Data Specialist",
        "BIM Consultant",
        "BIM Engineer",
        "BIM Support Specialist",
        "BIM Trainer",
        "BIM Coordinator (MEP)",
        "BIM Structural Engineer",
        "BIM Integration Manager",
        "BIM Documentation Specialist",
        "BIM Content Developer",
        "BIM Systems Specialist",
        "BIM Estimator",
        "BIM Asset Manager",
      ]);
    } else if (category === "CAD") {
      SetPositions([
        "CAD Drafter / CAD Technician",
        "CAD Designer",
        "AutoCAD Operator",
        "CAD Coordinator",
        "CAD Manager",
        "CAD Quality Control Specialist",
        "CAD Engineer",
        "CAD Mechanical Designer",
        "CAD Electrical Designer",
        "CAD Structural Designer",
        "CAD Architectural Designer",
        "CAD Survey Technician",
        "CAD Modeler",
        "CAD Detailer",
        "CAD Civil Designer",
        "CAD Specialist",
        "CAD Support Engineer",
        "CAD Lead",
        "CAD Documentation Specialist",
        "CAD Technician (MEP)",
      ]);
    } else {
      SetPositions([]);
    }
  }

  const handlePositionChange = (position) => {
    if (position) {
      setDisciplineList([
        "Architecture",
        "Structure",
        "Mechanical",
        "Plumbing & Drainage",
        "Electrical",
        "Landscape",
        "Interior",
        "Infrastructure (Dry Utilities)",
        "Infrastructure (Wet Utilities)",
        "Infrastructure (Transportation)",
        "Infrastructure (Environmental and Sustainable)",
      ]);
    } else {
      setDisciplineList([]);
    }
  };
  return (
    <div className="flex justify-center items-start w-full md:px-0 bg-gray-100 min-h-screen">
      <div className="max-w-4xl w-full px-4 md:px-0">
        <div className="bg-white w-[1000px] max-w-[800px] p-8 rounded-lg shadow-lg border border-gray-200 relative">
          {/* Progress Bar */}
          <div className="mb-8 relative">
            <div className="flex justify-between items-center text-gray-600 text-sm font-semibold">
              <span>Step {step}/3</span>
              <span>{completionPercentage}% Completed</span>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
              <div
                className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            {/* Step Indicator Circles */}
            <div className="absolute top-6 left-0 w-full flex justify-between px-4">
              <span
                className={`h-5 w-5 rounded-full border ${
                  step >= 1 ? "bg-purple-500" : "bg-gray-300"
                }`}
              ></span>
              <span
                className={`h-5 w-5 rounded-full border ${
                  step >= 2 ? "bg-teal-500" : "bg-gray-300"
                }`}
              ></span>
              <span
                className={`h-5 w-5 rounded-full border ${
                  step >= 3 ? "bg-orange-500" : "bg-gray-300"
                }`}
              ></span>
            </div>
          </div>

          {/* Multi-Step Form */}
          <div className="w-full flex flex-col gap-8">
            {step === 1 && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaUser className="mr-2 text-purple-500" /> Step 1: Basic
                  Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Enquiry Related To
                    </label>
                    <select
                      onChange={(e) => {
                        category(e.target.value);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 transition-all"
                    >
                      <option value="" disabled selected>
                        Choose a category
                      </option>

                      <option value="BIM">BIM</option>
                      <option value="CAD">CAD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Position</label>
                    <select
                      onChange={(e) => {
                        handlePositionChange(e.target.value);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 transition-all"
                      id="position"
                    >
                      <option value="" disabled selected>
                        Choose a positions
                      </option>
                      {positions.map((position, index) => (
                        <option key={index} value={position}>
                          {position}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Discipline
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 transition-all"
                      id="position"
                    >
                      <option value="" disabled selected>
                        Choose a Discipline
                      </option>
                      {DisciplineList.map((position, index) => (
                        <option key={index} value={position}>
                          {position}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Expected Duration
                    </label>
                    <input
                      type="text"
                      name="expectedDuration"
                      value={formData.expectedDuration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      No. of Resources
                    </label>
                    <input
                      type="number"
                      name="numOfResources"
                      value={formData.numOfResources}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 transition-all"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    className="bg-gradient-to-tr from-indigo-500 to-purple-500  text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all"
                    onClick={() => setStep(2)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaLaptopCode className="mr-2 text-purple-500" /> Step 2:
                  Software and Workstation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Workstation Required
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 transition-all">
                      <option disabled selected>
                        Select
                      </option>
                      <option value="yes">yes</option>
                      <option value="no">no</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Software Expertise
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 transition-all">
                      <option value="autodesk_revit">Autodesk Revit</option>
                      <option value="autodesk_navisworks">
                        Autodesk Navisworks
                      </option>
                      <option value="autodesk_auto_cad">
                        Autodesk AutoCAD
                      </option>
                      <option value="autodesk_3ds_max">Autodesk 3Ds Max</option>
                      <option value="autodesk_civil_3d">
                        Autodesk Civil 3D
                      </option>
                      <option value="archicad">ArchiCAD</option>
                      <option value="bim_360">BIM 360</option>
                      <option value="dynamo">Dynamo</option>
                      <option value="synchro">Synchro</option>
                      <option value="grasshopper">Grasshopper</option>
                      <option value="rhino">Rhino</option>
                      <option value="tekla">Tekla</option>
                      <option value="microstation">MicroStation</option>
                      <option value="sketchup">SketchUp</option>
                      <option value="lumion">Lumion</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Expected Mobilization Date
                    </label>
                    <input
                      type="date"
                      name="expectedMobilizationDate"
                      value={formData.expectedMobilizationDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 transition-all"
                    />
                  </div>
                </div>
                <div className="mt-10 flex justify-between">
                  <button
                    className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition-all"
                    onClick={() => setStep(1)}
                  >
                    back
                  </button>
                  <button
                    className=" bg-gradient-to-tr from-indigo-500 to-purple-500  text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all"
                    onClick={() => setStep(3)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaLocationArrow className="mr-2 text-purple-500" /> Step 3:
                  Mobilization and Other Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Mobilization Emirates
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 transition-all"
                      id="position"
                    >
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Dubai">Dubai</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Select">Select</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Umm Al Quwain">Umm Al Quwain</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      <option value="Fujairah">Fujairah</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Mobilization Location
                    </label>
                    <input
                      type="text"
                      name="mobilizationLocation"
                      value={formData.mobilizationLocation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Additional Requirements
                    </label>
                    <textarea
                      name="additionalRequirements"
                      value={formData.additionalRequirements}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-red-300 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-10 flex justify-between">
                  <button
                    className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition-all"
                    onClick={() => setStep(2)}
                  >
                    back
                  </button>
                  <button
                    className="bg-gradient-to-tr from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all"
                    onClick={handleFormSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
