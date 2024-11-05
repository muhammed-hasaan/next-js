"use client";
import React from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "../../../../Sections/DashboardSections/dashboard";

const DebitNoteDetail = () => {
  const router = useRouter();

  // Sample data (replace this with actual data fetching logic)
  const debitNoteData = {
    vendorName: "Vendor A",
    dateIssued: "2024-09-01",
    referenceNo: "INV-001",
    amount: "$1500",
    reason: "Service Charge",
    status: "Pending",
    noteContent: "This is a note related to the service charge.",
  };

  return (
    <DashboardLayout>
      <div className=" w-[100%] flex justify-end items-end">
        <div className=" w-[80%] flex justify-center items-center flex-col ">
          <div className=" flex justify-center border-3 items-center ">
            <h1 className="text-[#ff0000] text-3xl font-bold">User </h1>
            <h1 className="text-3xl font-bold"> Profile</h1>
          </div>
          <hr className="bg-black h-1 text-black w-[100px] mt-3" />
        </div>
      </div>
      <div className="flex flex-col items-center w-full py-6">
        <div className="flex justify-end w-full">
          <div className="p-6 bg-gray-50 min-h-screen w-[80%]">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Debit Note Details
              </h1>

              <div className="bg-white  rounded-lg p-8 w-full">
                <table className="min-w-full">
                  <tbody>
                    {Object.entries(debitNoteData).map(
                      ([key, value], index) => (
                        <tr
                          key={index}
                          className={`border-b ${
                            index % 2 === 0 ? "bg-gray-50" : ""
                          }`}
                        >
                          <td className="py-3 font-semibold text-gray-700 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}:{" "}
                            {/* Formatting key names */}
                          </td>
                          <td className="py-3 text-gray-600">{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => router.back()}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DebitNoteDetail;
