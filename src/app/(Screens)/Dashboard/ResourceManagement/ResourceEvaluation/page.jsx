"use client";
import { useState } from "react";
import { FaUserCircle, FaCalendarAlt, FaClock } from "react-icons/fa";
import Swal from "sweetalert2";
import DashboardLayout from "@/app/Sections/DashboardSections/dashboard";

export default function RequestForEvaluation() {
  const candidatesData = [
    { code: "44345", position: "Software Engineer", discipline: "Development" },
    { code: "52353", position: "Data Analyst", discipline: "Analytics" },
    { code: "44534", position: "Project Manager", discipline: "Management" },
  ];

  const [selectedCodes, setSelectedCodes] = useState([]);
  const [evaluationType, setEvaluationType] = useState("");
  const [evaluationDate, setEvaluationDate] = useState("");
  const [evaluationTime, setEvaluationTime] = useState("");
  const [evaluationHours, setEvaluationHours] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Submitted!", "Evaluation request has been sent!", "success");
  };

  const getCandidateDetails = (code) =>
    candidatesData.find((candidate) => candidate.code === code) || {};

  return (
    <DashboardLayout>
      <div className="flex justify-center items-center lg:items-center w-full flex-col mt-3">
        <div className="w-full lg:w-[100%] flex justify-center items-center">
          <h1 className="text-[#0085DB] text-3xl font-bold">Resource</h1>
          <h1 className="text-3xl font-bold">Evaluation</h1>
        </div>
        <div className="w-full lg:w-[80%] flex justify-center items-center">
          <hr className="bg-black h-1 w-[100px] mt-3" />
        </div>
        <br />
      </div>

      <div className="flex justify-center  p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-3xl overflow-hidden w-[60%] max-w-[100%] p-4 space-y-8"
        >
          {/* Candidate Code Selection */}
          {/* Candidate Code Selection */}
          {/* Enhanced Candidate Code Selection */}
          <div className="space-y-4">
            <label className="text-lg font-semibold text-gray-700 block">
              Select Candidate Code
            </label>
            <div className="relative">
              {/* Custom Styled Box */}
              <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-2">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full shadow-md mr-3">
                  <FaUserCircle className="text-blue-500 text-xl" />
                </div>

                {/* Select Box */}
                <select
                  onChange={handleCodeSelect}
                  defaultValue=""
                  className="w-full p-3 border border-gray-200 rounded-lg text-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                >
                  <option value="" disabled className="text-gray-400">
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
          <div className="overflow-scroll  scrollbar-hidden">
            {selectedCodes.map((code) => {
              const { position, discipline } = getCandidateDetails(code);
              return (
                <div
                  key={code}
                  className="flex items-center p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-200 w-[1250px] scrollbar-hidden"
                >
                  {/* Candidate Info */}
                  <div className="flex items-center w-1/3">
                    <FaUserCircle className="text-blue-500 text-4xl mr-3" />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        Candidate: {code}
                      </h2>
                      <p className="text-gray-600 text-[15px]">
                        {position} - {discipline}
                      </p>
                    </div>
                  </div>

                  {/* Evaluation Type Dropdown */}
                  <div className="flex-1 mx-3">
                    <label className="text-gray-700 text- font-medium block mb-1">
                      Evaluation Type
                    </label>
                    <select
                      onChange={(e) => setEvaluationType(e.target.value)}
                      className="w-[130px] p-3 border border-gray-300 rounded-md shadow-inner text-gray-700 focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="" disabled>
                        Choose Evaluation Type
                      </option>
                      <option value="Online">Online</option>
                      <option value="Onsite">Onsite</option>
                    </select>
                  </div>

                  {/* Evaluation Date */}
                  <div className="flex-1 mx-3">
                    <label className="text-gray-700 font-medium block mb-1">
                      Evaluation Date
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md shadow-inner p-3">
                      <FaCalendarAlt className="text-blue-400 mr-2" />
                      <input
                        type="date"
                        onChange={(e) => setEvaluationDate(e.target.value)}
                        className="w-full outline-none text-gray-700"
                      />
                    </div>
                  </div>

                  {/* Evaluation Time */}
                  <div className="flex-1 mx-3">
                    <label className="text-gray-700 font-medium block mb-1">
                      Evaluation Time
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md shadow-inner p-3">
                      <FaClock className="text-blue-400 mr-2" />
                      <input
                        type="time"
                        onChange={(e) => setEvaluationTime(e.target.value)}
                        className="w-full outline-none text-gray-700"
                      />
                    </div>
                  </div>

                  {/* Evaluation Hours */}
                  <div className="flex-1 mx-3">
                    <label className="text-gray-700 font-medium block mb-1">
                      Evaluation Hours
                    </label>
                    <select
                      onChange={(e) => setEvaluationHours(e.target.value)}
                      className="w-[140px] p-3 border border-gray-300 rounded-md shadow-inner text-gray-700 focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="" disabled>
                        Select Duration
                      </option>
                      {[1, 2, 3, 4, 5].map((hour) => (
                        <option key={hour} value={hour}>
                          {hour} Hour{hour > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Remove Button */}
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
          {/* Submit Button */}
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
