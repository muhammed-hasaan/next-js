import React from "react";
import DashboardLayout from "../../../Sections/DashboardSections/dashboard";
// import BannerImg from '../../../../../Assets/UserProfile/banner.jpg'
import CompanyLogo from "../../../../../Assets/UserProfile/CompanyLogo.png";
import Image from "next/image";
import "../../../globals.css";
const UserProfile = () => {
  const companyData = {
    name: "ENGISOFT ENGINEERING",
    tagline: "Leading BIM & Digital Engineering Consultant in the MENA region",
    location: "Karachi",
    followers: 872,
    following: 245,
    description:
      "ENGISOFT is committed to delivering innovative solutions in the field of BIM and digital engineering. Our team of 300+ experts is dedicated to excellence.",
    services: ["BIM Modeling", "Project Management", "Consulting", "Training"],
    achievements: [
      { year: 2022, title: "Best BIM Consultant Award" },
      { year: 2023, title: "Top Engineering Firm in the MENA" },
    ],
  };

  return (
    <DashboardLayout>
      <div className="flex justify-end items-end w-[100%]">
        <div className=" min-h-screen w-[80%] responsiveFullWidth  ">
          {/* Status Cards */}
          <div className="flex justify-center items-center flex-col">
            <div className="mt-6">
              <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8">
                  <div className="relative w-full">
                    {/* Company Banner */}
                    <div className="h-64 bg-cover bg-center rounded-t-lg relative UserProfileBanner">
                      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-15 rounded-t-lg"></div>
                      <div className="relative z-10 flex items-center justify-center p-[6.4rem]">
                        <Image
                          src={CompanyLogo}
                          alt="Company Logo"
                          width={150}
                          height={150}
                        />
                      </div>
                    </div>

                    {/* Company Details */}
                    <div className="relative z-10 text-center pt-4 ">
                      <h1 className="text-3xl font-bold text-gray-800">
                        {companyData.name}
                      </h1>
                      <p className="text-lg italic text-gray-600">
                        {companyData.tagline}
                      </p>
                      <p className="text-gray-600 mt-2">
                        <span className="material-icons text-base mr-1">
                          place
                        </span>
                        {companyData.location}
                      </p>

                      {/* Follower Info */}
                      <div className="flex justify-center mt-4 space-x-6">
                        <div className="text-gray-800">
                          <p className="text-lg font-semibold">
                            {companyData.following} Following
                          </p>
                        </div>
                        <div className="text-gray-800">
                          <p className="text-lg font-semibold">
                            {companyData.followers} Followers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Company Description */}
                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                      About Us
                    </h2>
                    <p className="text-gray-600">{companyData.description}</p>
                  </div>

                  {/* Services Offered */}
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                      Services
                    </h2>
                    <ul className="list-disc list-inside text-gray-600">
                      {companyData.services.map((service, index) => (
                        <li key={index} className="mb-2">
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                      Achievements
                    </h2>
                    {companyData.achievements.map((achievement, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {achievement.year}:{" "}
                          <span className="text-red-500">
                            {achievement.title}
                          </span>
                        </h3>
                      </div>
                    ))}
                  </div>

                  {/* Edit Profile Button */}
                  <div className="flex justify-end">
                    <button className="bg-red-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserProfile;
