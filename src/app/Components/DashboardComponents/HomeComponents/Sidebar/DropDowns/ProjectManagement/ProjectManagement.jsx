
import React from "react";
import {FiClipboard} from "react-icons/fi";
import { HiAdjustments } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
export default function ProjectManagementDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [SubdropdownOpen, setSubdropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const toggleSubDropdown = () => {
        setSubdropdownOpen(!SubdropdownOpen);
    };
    return (
        <>
            <p className="text-gray-500 text-xs">TIMESHEET & ATTENDANCE</p>

            <div
                onClick={toggleDropdown}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
                <div className="bg-gray-100 p-2 rounded">
                    <HiAdjustments className="text-gray-800" />
                </div>
                <span>Project Management</span>
            </div>

            <div className="relative">
                {/* Dropdown */}
                {dropdownOpen && (
                    <div className=" top-full left-0  bg-white  rounded  w-full pl-8">
                        <div className="flex flex-col">
                            <Link href = "/Dashboard/ProjectManagement/TodoList">
                            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded w-full">
                                <div className="bg-gray-100 p-2 rounded">
                                    <FiClipboard className="text-gray-800" />
                                </div>
                                <span>Todo List</span>
                            </div>
                            </Link>
                            <Link href = "/Dashboard/ProjectManagement/MeetingsList">
                            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded w-full">
                                <div className="bg-gray-100 p-2 rounded">
                                    <FiClipboard className="text-gray-800" />
                                </div>
                                <span>Meeting List</span>
                            </div>
                            </Link>
                            {/* <div
                                onClick={toggleSubDropdown}
                                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
                            >
                                <div className="bg-gray-100 p-2 rounded">
                                    <FiClipboard className="text-gray-800" />
                                </div>
                                <span>Attendance</span>
                            </div> */}
                            {/* {SubdropdownOpen && (
                                <div className="pl-8">
                                    <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                        <div className="bg-gray-100 p-2 rounded">
                                            <FiClipboard className="text-gray-800" />
                                        </div>
                                        <span>Current Attendance</span>
                                    </div>
                                    <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                        <div className="bg-gray-100 p-2 rounded">
                                            <FiClipboard className="text-gray-800" />
                                        </div>
                                        <span>Past Attendance</span>
                                    </div>
                                </div>
                            )} */}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
