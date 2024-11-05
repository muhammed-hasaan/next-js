import React from "react";
import RequirementFormComponent from "../../../../Components/DashboardComponents/ResourceManagement/RequirementForm/RequirementForm";
import DashboardLayout from "../../../../Sections/DashboardSections/dashboard";

const RequirementForm = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-center items-end w-[100%] flex-col ">
        <div className=" w-[100%] flex justify-center items-center ">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 to-purple-500 text-3xl font-bold">
            Enquiry{" "}
          </h1>
          <h1 className="text-3xl font-bold"> Form</h1>
        </div>
        <div className=" w-[100%] flex justify-center items-center ">
          <hr className="bg-black h-1 text-black w-[100px] mt-3" />
        </div>
        <br />
      </div>

      <div className="flex justify-end items-end w-[100%]">
        <div className="p-6 min-h-screen w-[100%] responsiveFullWidth  ">
          {/* Status Cards */}
          <div className="flex justify-center items-center flex-col">
            <div className="">
              <RequirementFormComponent />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RequirementForm;
