import React, { useState } from "react";
import "../ResourcesList/ResourceList.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaUser,
  FaGlobe,
  FaLevelUpAlt,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import {
  faPlayCircle,
  faStar,
  faFileArrowDown,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ResourcesList = ({ GetDataForShortlist, SetShortlist }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [jobList, setJobList] = useState(GetDataForShortlist || []);
  const [selectedButton, setSelectedButton] = useState("Shortlist");

  const handleImageClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    SetShortlist(button === "Shortlist" ? "Shortlist" : "");
  };

  const handleUnshortlist = (jobId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You wont to move this candidate to all resources",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, move it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedJobList = jobList.filter((job) => job.id !== jobId);
        setJobList(updatedJobList); // Update jobList in the state
        SetShortlist(updatedJobList); // Update Shortlist as necessary
        Swal.fire({
          title: "Moved To All Resources Tab",
          text: "Candidate SUccessfully Move to All Resources Tab",
          icon: "success",
          showConfirmButton: false,
        });
      }
    });
  };
  var ratingData;
  jobList.map((data) => {
    ratingData = data.rating;
  });
  const [rating, setRating] = useState(ratingData);

  return (
    <div className="job-list-container min-w-[800px] bg-gray-50 p-6 rounded-lg shadow-lg">
      <div
        className={`min-w-[500px]  space-x-2 mb-2 ${
          selectedButton === "Shortlist"
            ? "flex justify-center items-center"
            : ""
        }`}
      >
        {["All Resources", "Shortlist"].map((buttonText, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(buttonText)}
            className={`p-2 rounded-lg text-black ${
              selectedButton === buttonText
                ? "bg-[#0085DB] text-white " // Background color for the selected button
                : "border border-[#0085DB] " // Border for unselected buttons
            }`}
          >
            {buttonText}
          </button>
        ))}
      </div>

      {jobList.map((job) => (
        <div
          key={job.id}
          className="p-6 mb-6 rounded-md bg-white shadow-md transition-transform duration-300 transform hover:scale-[1.02] flex flex-col lg:flex-row gap-y-6 gap-x-8 items-start lg:items-center"
        >
          <div className="absolute top-2 right-6 flex space-x-4">
            <div className="group relative">
              <span
                onClick={() => handleUnshortlist(job.id)}
                className="absolute bottom-0 w-24 text-center text-sm font-semibold text-white bg-blue-500 rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 "
              >
                Move to Resources
              </span>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-blue-600 hover:text-gray-400 cursor-pointer"
              />
            </div>
            <div className="group relative">
              <span
                onClick={() => handleUnshortlist(job.id)}
                className="absolute bottom-0 w-24 text-center text-sm font-semibold text-white bg-blue-500 rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                Evaluate
              </span>
              <FontAwesomeIcon
                className="text-blue-600 hover:text-gray-400 cursor-pointer"
                icon={faFileArrowDown}
              />
            </div>{" "}
            <div className="flex -mt-[4px]">
              <button
                type="button"
                className={`text-2xl ${
                  rating >= 1 ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => setRating(1)}
              >
                ★
              </button>
              <button
                type="button"
                className={`text-2xl ${
                  rating >= 2 ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => setRating(2)}
              >
                ★
              </button>
              <button
                type="button"
                className={`text-2xl ${
                  rating >= 3 ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => setRating(3)}
              >
                ★
              </button>
              <button
                type="button"
                className={`text-2xl ${
                  rating >= 4 ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => setRating(4)}
              >
                ★
              </button>
              <button
                type="button"
                className={`text-2xl ${
                  rating >= 5 ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => setRating(5)}
              >
                ★
              </button>
            </div>
          </div>

          <div
            className="relative cursor-pointer hover:opacity-90 transition-opacity duration-300"
            onClick={() => handleImageClick(job.videoUrl)}
          >
            <Image
              src={job.image}
              width={140}
              height={140}
              className="rounded-full shadow-md"
              alt="ResourceUserImage"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-full">
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="text-white text-4xl"
              />
            </div>
          </div>

          <Link
            href="/Dashboard/ResourceManagement/AvailableResources/AvailableResourceDetail"
            className="w-full lg:w-auto"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">
                {job.position}
              </h2>
              <p className="text-gray-500 text-sm font-medium">
                {job.category}
              </p>
              <div className="flex gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-500 mr-1" />{" "}
                  {job.lastCompanyLocation}
                </span>
                <span className="flex items-center">
                  <FaClock className="text-purple-500 mr-1" /> Availability:{" "}
                  {job.availabilityToJoin}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-700">
                <span className="flex items-center px-3 py-1 bg-gray-100 rounded-lg">
                  <FaUser className="text-blue-400 mr-1" /> Gender: {job.gender}
                </span>
                <span className="flex items-center px-3 py-1 bg-gray-100 rounded-lg">
                  <FaGlobe className="text-green-400 mr-1" /> Nationality:{" "}
                  {job.nationality}
                </span>
                <span className="flex items-center px-3 py-1 bg-gray-100 rounded-lg">
                  <FaLevelUpAlt className="text-purple-400 mr-1" /> Level:{" "}
                  {job.level}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 mt-4">
        <p className="text-gray-600">Show 10 jobs</p>
        <select className="border-gray-300 rounded-md px-3 py-2 text-sm">
          <option value="default">Sort by default</option>
        </select>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={closeModal}
            >
              &#10005;
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={selectedVideo}
                title="Interview Tips"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesList;
