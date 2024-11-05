import React from "react";
import InvoiceDetailDataTableComponent from "../../../../Components/DashboardComponents/InvoiceComponents/InvoiceDetailComponent/InvoiceDetailDataTable/InvoiceDetailDataTable";
import DashboardLayout from "@/app/Sections/DashboardSections/dashboard";
export default function InvoiceDetailPage() {
  return (
    <DashboardLayout>
      <div className="flex justify-center items-end w-[100%] flex-col ">
        <div className=" w-[80%] flex justify-center items-center ">
          <h1 className="text-indigo-700 text-3xl font-bold">Invoice</h1>
          <h1 className="text-3xl font-bold"> Detail</h1>
        </div>
        <div className=" w-[80%] flex justify-center items-center ">
          <hr className="bg-black h-1 text-black w-[100px] mt-3" />
        </div>
        <br />
      </div>

      <div className="flex justify-end items-end w-[100%]">
        <div className="p-6 bg-white min-h-screen w-[80%] responsiveFullWidth  ">
          {/* Status Cards */}
          <div className="flex justify-center items-center flex-col">
            <div className="mt-6">
              <InvoiceDetailDataTableComponent />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
