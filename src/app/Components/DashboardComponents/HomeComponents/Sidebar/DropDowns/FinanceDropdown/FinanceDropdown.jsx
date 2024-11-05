import React from "react";
import {
  // FiMail,
  // FiMessageCircle,
  // FiCalendar,
  // FiList,
  // FiFolder,
  // FiUser,
  FiClipboard,
  // FiGlobe,
  // FiLink,
} from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function FinanceDropdown() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <p className="text-gray-500 text-xs">FINANCE</p>

      <div
        onClick={toggleDropdown}
        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
      >
        <div className="bg-gray-100 p-2 rounded">
          <FiClipboard className="text-gray-800" />
        </div>
        <span>Finance</span>
      </div>

      <div className="relative">
        {/* Dropdown */}
        {dropdownOpen && (
          <div className=" top-full left-0  bg-white  rounded  w-full pl-8">
            <div className="flex flex-col">
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded w-full">
                <div className="bg-gray-100 p-2 rounded">
                  <FiClipboard className="text-gray-800" />
                </div>
                <span>Contract/Agreement</span>
              </div>
              <div
                onClick={() => {
                  router.push("/Dashboard/Invoice");
                }}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
              >
                <div className="bg-gray-100 p-2 rounded">
                  <FiClipboard className="text-gray-800" />
                </div>
                <span>Invoices </span>
              </div>
              <div
                onClick={() => {
                  router.push("/Dashboard/CreaditNote");
                }}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
              >
                <div className="bg-gray-100 p-2 rounded">
                  <FiClipboard className="text-gray-800" />
                </div>
                <span>Credit Note</span>
              </div>
              <div
                onClick={() => {
                  router.push("/Dashboard/DebitNote");
                }}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
              >
                <div className="bg-gray-100 p-2 rounded">
                  <FiClipboard className="text-gray-800" />
                </div>
                <span>Debit Note</span>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <div className="bg-gray-100 p-2 rounded">
                  <FiClipboard className="text-gray-800" />
                </div>
                <span>SOA</span>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <div className="bg-gray-100 p-2 rounded">
                  <FiClipboard className="text-gray-800" />
                </div>
                <span>Payment </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
