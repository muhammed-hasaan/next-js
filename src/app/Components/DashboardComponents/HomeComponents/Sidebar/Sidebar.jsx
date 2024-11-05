"use client";
import React from "react";

import "../../../../globals.css";
import Image from "next/image";
import FinanceDropdown from "./DropDowns/FinanceDropdown/FinanceDropdown";
import TimeSheetAndAttendanceDropdown from "./DropDowns/TimeSheet&Attendance/TimeSheet&Attendance";
import ResourceManagementDropdown from "./DropDowns/ResourceManagement/ResourceManagement";
import { RxDashboard } from "react-icons/rx";
// import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";
import LogoutButton from "./LogoutButton/LogoutButton";
import ProjectManagementDropdown from "./DropDowns/ProjectManagement/ProjectManagement";
import "../../../../globals.css";
const SideBar = (props) => {
  const router = useRouter();
  const NavigateTOHome = () => {
    router.push("/Dashboard/Home");
  };
  // function LogoutFunc() {
  //   const storedEmail = localStorage.setItem("Email", JSON.stringify(""));
  //   if (storedEmail == "") {
  //     window.location.href = "/Login";
  //   } else {
  //     console.log("There is email");
  //   }
  // }

  function NavigateToUserProfile() {
    router.push("/Dashboard/UserProfile");
  }

  return (
    <div className="h-screen shadow-xl bg-white text-gray-800 flex flex-col fixed top-0 left-0 overflow-y-scroll w-[20%] scrollbar-hidden responsivehide">
      {/* Logo Section */}
      <div className="p-4 flex items-center space-x-2">
        <img
          src="https://demos.wrappixel.com/free-admin-templates/bootstrap/spike-bootstrap-free/src/assets/images/logos/dark-logo.svg"
          alt=""
        />
        {/* <span className="text-xl font-semibold">Dashboard</span> */}
      </div>

      {/* User Info */}
      <div
        className="p-4 border-b border-gray-200"
        onClick={NavigateToUserProfile}
      >
        <div className="flex items-center space-x-4">
          <Image
            src={props?.picture || "/default-avatar.png"}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm text-gray-500">Logined</p>
            <p className="font-bold text-gray-700">{props?.name || "Name"}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-4">
        <nav className="space-y-2">
          <p className="text-gray-500 text-xs">MAIN</p>

          <div
            onClick={NavigateTOHome}
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            <div className="bg-gray-100 p-2 rounded">
              <RxDashboard className="text-gray-800" />
            </div>
            <span>Dashboard</span>
          </div>

          {/* Dropdowns */}
          <FinanceDropdown />
          <TimeSheetAndAttendanceDropdown />
          <ResourceManagementDropdown />
          <ProjectManagementDropdown />
        </nav>
      </div>

      {/* Logout Button (Fixed at the Bottom) */}
      <LogoutButton />
    </div>
  );
};

export default SideBar;
