"use client";
import { useState } from "react";
import SideBar from "../../Components/DashboardComponents/HomeComponents/Sidebar/Sidebar";
import Navbar from "../../Components/DashboardComponents/HomeComponents/Navbar/Navbar";
import NavbarUserImg from "../../../../Assets/NavbarAssets/UserImg.jpeg";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const user = {
    name: "M.Hasaan",
    picture: NavbarUserImg,
  };
  return (
    <div className="flex h-screen bg-gray-100 w-[100%]">
      {/* Sidebar */}
      <div className="flex w-[20%] ">
        <SideBar
          IsSideBarOpen={isSidebarOpen}
          name={user.name}
          picture={user.picture}
        />
      </div>
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-[100%] lg:min-w-[80%] ">
        {/* Navbar */}
        <Navbar
          openSideBar={() => setSidebarOpen(!isSidebarOpen)}
          name={user.name}
          picture={user.picture}
        />
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50 ">
          {children}
        </main>
      </div>
    </div>
  );
}
