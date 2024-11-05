import React from "react";
import AvailableResourcesDetailComponent from "../../../../../Components/DashboardComponents/ResourceManagement/AvailableResources/AvailableResourceDetail/page";
import DashboardLayout from "../../../../../Sections/DashboardSections/dashboard";

const AvailableResources = () => {
  return (
    <DashboardLayout>
      {/* <div className="flex justify-center items-end w-[100%] flex-col ">
        <div className=" w-[80%] flex justify-center items-center ">
          <h1 className="text-[#ff0000] text-3xl font-bold">Resource </h1>
          <h1 className="text-3xl font-bold"> Detail</h1>
        </div>
        <div className=" w-[80%] flex justify-center items-center ">
          <hr className="bg-black h-1 text-black w-[100px] mt-3" />
        </div>
        <br />
      </div> */}
      <div className="flex justify-center items-center w-[100%]">
        <div className=" min-h-screen  responsiveFullWidth  ">
          {/* Status Cards */}
          <div className="flex justify-center  flex-col">
            <div className="">
              <AvailableResourcesDetailComponent />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AvailableResources;
