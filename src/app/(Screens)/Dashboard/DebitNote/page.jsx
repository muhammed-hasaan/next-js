"use client";
import DashboardLayout from "../../../Sections/DashboardSections/dashboard";
import DebitNoteDataTable from "../../../Components/DashboardComponents/DebitNoteComponents/DebitNoteDataTable/DebitNoteDataTable";

export default function CreaditNote() {
  return (
    <DashboardLayout>
      <div className="flex justify-center items-end w-[100%] flex-col ">
        <div className=" w-[80%] flex justify-center items-center space-x-3">
          <h1 className="text-[#ff0000] text-3xl font-bold">Get </h1>
          <h1 className="text-3xl font-bold"> DebitNote</h1>
        </div>
        <div className=" w-[80%] flex justify-center items-center ">
          <hr className="bg-black h-1 text-black w-[100px] mt-3" />
        </div>
        <br />
      </div>

      <div className="flex justify-end items-end w-[100%]">
        <div className="p-6 bg-gray-50 min-h-screen w-[80%] responsiveFullWidth  ">
          {/* Status Cards */}
          <div className="flex justify-center items-center flex-col">
            <div className="mt-6">
              <DebitNoteDataTable />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
