// components/ResourceManagementDropdown.js
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiClipboard } from "react-icons/fi";
import { MdOutlineManageHistory } from "react-icons/md";
import { useDropdown } from "../../../../../../../../context/DropdownContext";

export default function ResourceManagement() {
  const { dropdownOpen, setDropdownOpen } = useDropdown();
  const currentPath = usePathname();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const menuItems = [
    {
      label: "Available Resources",
      href: "/Dashboard/ResourceManagement/AvailableResources",
    },
    {
      label: "Resource Evaluation",
      href: "/Dashboard/ResourceManagement/ResourceEvaluation",
    },
    {
      label: "Resource Mobilization",
      href: "http://localhost:3000/Dashboard/ResourceManagement/ResourceMobilization",
    },
    {
      label: "Requirement Form",
      href: "/Dashboard/ResourceManagement/RequirementForm",
    },
    {
      label: "Currently Deployed Resources",
      href: "/Dashboard/ResourceManagement/CurrentlyDeployedResources",
    },
    {
      label: "Resource Extension Request",
      href: "/Dashboard/ResourceManagement/ResourceExtensionRequest",
    },
    {
      label: "Demobilized Resources",
      href: "/Dashboard/ResourceManagement/DemobilizedResources",
    },
    {
      label: "Resource Rating",
      href: "/Dashboard/ResourceManagement/ResourceRating",
    },
  ];

  return (
    <>
      <p className="text-gray-500 text-xs">RESOURCE MANAGEMENT</p>

      <div
        onClick={toggleDropdown}
        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
      >
        <div className="bg-gray-100 p-2 rounded">
          <MdOutlineManageHistory className="text-gray-800" />
        </div>
        <span>Resource Management</span>
      </div>

      <div className="relative">
        {/* Dropdown */}
        {dropdownOpen && (
          <div className="top-full left-0 bg-white rounded w-full pl-8">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  <div
                    className={`flex items-center space-x-3 cursor-pointer p-2 rounded ${
                      currentPath === item.href ? "bg-[#0085DB]" : ""
                    }`}
                  >
                    <div className="bg-gray-100 p-2 rounded">
                      <FiClipboard className="text-gray-800" />
                    </div>
                    <span
                      className={currentPath === item.href ? "text-white" : ""}
                    >
                      {item.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
