"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import DashboardLayout from "@/app/Sections/DashboardSections/dashboard";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";

export default function ResourceMobilization() {
  const candidatesData = [
    { code: "44345", position: "Software Engineer", discipline: "Development" },
    { code: "52353", position: "Data Analyst", discipline: "Analytics" },
    { code: "44534", position: "Project Manager", discipline: "Management" },
    { code: "67566", position: "UI/UX Designer", discipline: "Design" },
    { code: "42486", position: "DevOps Engineer", discipline: "Operations" },
  ];

  const [selectedCodes, setSelectedCodes] = useState([]);
  const [mobilizationDetails, setMobilizationDetails] = useState({});
  const [isWorkstationRequired, setIsWorkstationRequired] = useState(false);
  const [isSoftwareRequired, setIsSoftwareRequired] = useState(false);

  const handleCodeSelect = (e) => {
    const selectedCode = e.target.value;
    if (selectedCode && !selectedCodes.includes(selectedCode)) {
      setSelectedCodes([...selectedCodes, selectedCode]);
    }
    e.target.value = ""; // Reset select input
  };

  const handleRemoveCode = (code) => {
    setSelectedCodes(selectedCodes.filter((c) => c !== code));
  };

  const handleMobilizationDetailsChange = (field, value) => {
    setMobilizationDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Submitted!", "Mobilization request has been sent!", "success");
  };

  return (
    <DashboardLayout>
      <div className="flex justify-center items-center lg:items-center w-full flex-col mt-3">
        <div className="w-full lg:w-[100%] flex justify-center items-center">
          <h1 className="text-[#0085DB] text-3xl font-bold">Resource</h1>
          <h1 className="text-3xl font-bold">Mobilization</h1>
        </div>
        <div className="w-full lg:w-[80%] flex justify-center items-center">
          <hr className="bg-black h-1 w-[100px] mt-3" />
        </div>
        <br />
      </div>
      <div className="flex justify-center p-4 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-3xl overflow-hidden w-[60%] max-w-[100%] p-4 space-y-8"
        >
        
          {/* Enhanced Candidate Code Selection */}
          <div className="space-y-4">
            <label className="text-lg font-semibold text-gray-700 block">
              Select Shortlisted Candidate Code
            </label>
            <div className="relative">
              <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-2">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full shadow-md mr-3">
                  <FaUserCircle className="text-blue-500 text-xl" />
                </div>
                <select
                  onChange={handleCodeSelect}
                  defaultValue=""
                  className="w-full p-3 border border-gray-200 rounded-lg text-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                >
                  <option value="" disabled>
                    SELECT SHORTLISTED CANDIDATE CODE
                  </option>
                  {candidatesData.map((candidate) => (
                    <option key={candidate.code} value={candidate.code}>
                      {candidate.code} - {candidate.position}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Candidate Details Row */}
          <div className="overflow-scroll scrollbar-hidden">
            {selectedCodes.map((code) => {
              const candidate = candidatesData.find((c) => c.code === code);
              return (
                <div
                  key={code}
                  className="flex items-center p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-scroll w-[1500px] scrollbar-hidden"
                >
                  <div className="flex items-center w-1/3">
                    <FaUserCircle className="text-blue-500 text-4xl mr-3" />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        Candidate: {code}
                      </h2>
                      <p className="text-gray-600 text-[15px]">
                        {candidate?.position} - {candidate?.discipline}
                      </p>
                    </div>
                  </div>

                  {/* Mobilization Type Dropdown */}
                  <div className="flex-1 mx-3">
                    <label className="text-gray-700 font-medium block mb-1">
                      Mobilization Type
                    </label>
                    <select
                      onChange={(e) =>
                        handleMobilizationDetailsChange(
                          "mobilizationType",
                          e.target.value
                        )
                      }
                      className="w-[130px] p-3 border border-gray-300 rounded-md shadow-inner text-gray-700 focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="" disabled>
                        Select Type
                      </option>
                      <option value="Online">Online</option>
                      <option value="Onsite">Onsite</option>
                    </select>
                  </div>

                  {/* Mobilization Date */}
                  <div className="flex-1 mx-3">
                    <label className="text-gray-700 font-medium block mb-1">
                      Mobilization Date
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md shadow-inner p-3">
                      <FaCalendarAlt className="text-blue-400 mr-2" />
                      <input
                        type="date"
                        onChange={(e) =>
                          handleMobilizationDetailsChange(
                            "mobilizationDate",
                            e.target.value
                          )
                        }
                        className="w-full outline-none text-gray-700"
                      />
                    </div>
                  </div>

                  {/* Expected Duration */}
                  <div className="flex-1 mx-3">
                    <label className="text-gray-700 font-medium block mb-1">
                      Expected Duration
                    </label>
                    <select
                      onChange={(e) =>
                        handleMobilizationDetailsChange(
                          "mobilizationDuration",
                          e.target.value
                        )
                      }
                      className="w-[140px] p-3 border border-gray-300 rounded-md shadow-inner text-gray-700 focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="" disabled>
                        Duration
                      </option>
                      {[
                        "1-3 Weeks",
                        "1 Month",
                        "2 Month",
                        "3 Month",
                        "5 Month",
                        "6 Month",
                        "7 Month",
                        "8 Month",
                        "9 Month",
                        "10 Month",
                        "11 Month",
                        "12 Month",
                        "1 Year +",
                      ].map((duration) => (
                        <option key={duration} value={duration}>
                          {duration}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Workstation and Software Required */}
                  <div className="flex-1 mx-3">
                    <label className="text-gray-700 font-medium block mb-1 w-[155px]  ">
                      Workstation Required
                    </label>
                    <select
                      onChange={(e) => {
                        const value = e.target.value;
                        setIsWorkstationRequired(value === "Yes");
                        handleMobilizationDetailsChange(
                          "workstationRequired",
                          value
                        );
                      }}
                      className="w-[140px] p-3 border border-gray-300 rounded-md shadow-inner text-gray-700 focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="" disabled>
                        Workstation Required
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {isWorkstationRequired && (
                    <div className="flex-1 mx-3">
                      <label className="text-gray-700 font-medium block mb-1 ">
                        Software Required
                      </label>
                      <select
                        onChange={(e) => {
                          const value = e.target.value;
                          setIsSoftwareRequired(value === "Yes");
                          handleMobilizationDetailsChange(
                            "softwareRequired",
                            value
                          );
                        }}
                        className="w-[140px] p-3 border border-gray-300 rounded-md shadow-inner text-gray-700 focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="" disabled>
                          Software Required
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  )}

                  {isSoftwareRequired && (
                    <div className="flex-1 mx-3">
                      <label className="text-gray-700 font-medium block mb-1">
                        Software Version
                      </label>
                      <select
                        onChange={(e) =>
                          handleMobilizationDetailsChange(
                            "softwareVersion",
                            e.target.value
                          )
                        }
                        className="w-[140px] p-3 border border-gray-300 rounded-md shadow-inner text-gray-700 focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="" disabled>
                          Select Version
                        </option>
                        {[
                          "2018",
                          "2019",
                          "2020",
                          "2021",
                          "2022",
                          "2023",
                          "2024",
                        ].map((version) => (
                          <option key={version} value={version}>
                            {version}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="flex justify-end w-1/5">
                    <button
                      type="button"
                      onClick={() => handleRemoveCode(code)}
                      className="text-red-500 font-semibold underline hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-all"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
