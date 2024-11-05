"use client";
import React, { useState } from "react";
import "./ResourceList.css";
import ManImg from "../../../../../../../Assets/ResourceManagement/AvailableResources/Man.jpeg";
import Link from "next/link";
import { FaMapMarkerAlt, FaBriefcase, FaClock } from "react-icons/fa";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import "sweetalert2/dist/sweetalert2.min.css";
import { faPlayCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt, faTruck } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { FaUser, FaGlobe, FaLevelUpAlt } from "react-icons/fa";

const ResourcesList = (props) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const jobData = [
    {
      id: 1,
      category: "BIM",
      position: "BIM Modeler / BIM Technician",
      discipline: "Architecture",
      subDiscipline: "Facade Design",
      finalEducationalQualification: "B.Arch",
      qualificationPassoutFinalYear: 2021,
      availabilityToJoin: "3 month",
      gender: "Male",
      softwareSkills: "AutoCAD",
      gccExperience: "1 year",
      domainExperience: "2 years in Architecture",
      nationality: "Pakistani",
      language: "English",
      level: "Senior Level",
      lastWorkingCompany: "XYZ Design Studio",
      lastCompanyLocation: "Toronto, Canada",
      image: ManImg,
      videoUrl: "https://www.youtube.com/embed/sYV37t8vDgQ",
    },
    {
      id: 2,
      category: "BIM",
      position: "BIM Coordinator (MEP)",
      discipline: "Mechanical",
      subDiscipline: "HVAC (Heating, and Air Conditioning)",
      finalEducationalQualification: "B.Tech in Mechanical Engineering",
      qualificationPassoutFinalYear: 2019,
      availabilityToJoin: "Immediately",
      gender: "Male",
      softwareSkills: "Navisworks",
      gccExperience: "3 years",
      domainExperience: "5 years in MEP Design",
      nationality: "Emirati",
      language: "Arabic",
      level: "Mid-level",
      lastWorkingCompany: "MEP Solutions Co.",
      lastCompanyLocation: "Dubai, UAE",
      image: ManImg,
      videoUrl: "https://www.youtube.com/embed/sYV37t8vDgQ",
    },
    {
      id: 3,
      category: "BIM",
      position: "BIM Project Manager",
      discipline: "Structure",
      subDiscipline: "Bridge Design",
      finalEducationalQualification: "M.Sc. in Civil Engineering",
      qualificationPassoutFinalYear: 2015,
      availabilityToJoin: "2 months",
      gender: "Male",
      softwareSkills: "Tekla Structures",
      gccExperience: "5 years",
      domainExperience: "10 years in Structural Engineering",
      nationality: "Indian",
      language: "Hindi",
      level: "Senior-level",
      lastWorkingCompany: "Infrastructure Builders Ltd.",
      lastCompanyLocation: "Mumbai, India",
      image: ManImg,
      videoUrl: "https://www.youtube.com/embed/sYV37t8vDgQ",
    },
    {
      id: 4,
      category: "CAD",
      position: "CAD Drafter / CAD Technician",
      discipline: "Electrical",
      subDiscipline: "Power Distribution Systems",
      finalEducationalQualification: "Diploma in Electrical Engineering",
      qualificationPassoutFinalYear: 2022,
      availabilityToJoin: "3 weeks",
      gender: "Female",
      softwareSkills: "AutoCAD Electrical",
      gccExperience: "1 year",
      domainExperience: "2 years in Electrical Drafting",
      nationality: "Filipino",
      language: "Tagalog",
      level: "Entry-level",
      lastWorkingCompany: "Electrical Solutions Co.",
      lastCompanyLocation: "Manila, Philippines",
      image: ManImg,
      videoUrl: "https://www.youtube.com/embed/sYV37t8vDgQ",
    },
    {
      id: 5,
      category: "CAD",
      position: "CAD Designer",
      discipline: "Landscape",
      subDiscipline: "Urban Landscape Design",
      finalEducationalQualification: "B.Landscape Architecture",
      qualificationPassoutFinalYear: 2020,
      availabilityToJoin: "Immediately",
      gender: "Male",
      softwareSkills: "SketchUp",
      gccExperience: "2 years",
      domainExperience: "3 years in Landscape Design",
      nationality: "Australian",
      language: "English",
      level: "Mid-level",
      lastWorkingCompany: "Green Spaces Ltd.",
      lastCompanyLocation: "Sydney, Australia",
      image: ManImg,
      videoUrl: "https://www.youtube.com/embed/sYV37t8vDgQ",
    },
    {
      id: 6,
      category: "CAD",
      position: "CAD Structural Designer",
      discipline: "Structure",
      subDiscipline: "Reinforced Concrete Design",
      finalEducationalQualification: "B.Tech in Civil Engineering",
      qualificationPassoutFinalYear: 2018,
      availabilityToJoin: "1 month",
      gender: "Female",
      softwareSkills: "AutoCAD",
      gccExperience: "3 years",
      domainExperience: "4 years in Structural Drafting",
      nationality: "American",
      language: "English",
      level: "Mid-level",
      lastWorkingCompany: "Concrete Solutions Inc.",
      lastCompanyLocation: "New York, USA",
      image: ManImg,
      videoUrl: "https://www.youtube.com/embed/sYV37t8vDgQ",
    },
    {
      id: 7,
      category: "BIM",
      position: "BIM Manager",
      discipline: "Plumbing & Drainage",
      subDiscipline: "Stormwater Management",
      finalEducationalQualification: "M.Sc. in Environmental Engineering",
      qualificationPassoutFinalYear: 2016,
      availabilityToJoin: "1 month",
      gender: "Male",
      softwareSkills: "Navisworks",
      gccExperience: "4 years",
      domainExperience: "8 years in Plumbing Design",
      nationality: "British",
      language: "English",
      level: "Senior-level",
      lastWorkingCompany: "Plumbing Solutions Ltd.",
      lastCompanyLocation: "London, UK",
      image: ManImg,
      videoUrl: "https://www.youtube.com/embed/sYV37t8vDgQ",
    },
    {
      id: 8,
      category: "CAD",
      position: "CAD Lead",
      discipline: "Infrastructure (Dry Utilities)",
      subDiscipline: "Fiber Optic Networks",
      finalEducationalQualification: "B.Tech in Telecommunications",
      qualificationPassoutFinalYear: 2017,
      availabilityToJoin: "2 weeks",
      gender: "Male",
      softwareSkills: "MicroStation",
      gccExperience: "5 years",
      domainExperience: "6 years in Telecommunications Drafting",
      nationality: "Pakistani",
      language: "Urdu",
      level: "Lead",
      lastWorkingCompany: "Telecom Design Co.",
      lastCompanyLocation: "Islamabad, Pakistan",
      image: ManImg,
      videoUrl: "https://www.youtube.com/embed/sYV37t8vDgQ",
    },
    {
      id: 9,
      category: "CAD",
      position: "CAD Designer",
      discipline: "Interior",
      subDiscipline: "Interior Detailing",
      finalEducationalQualification: "B.Landscape Architecture",
      qualificationPassoutFinalYear: 2023,
      availabilityToJoin: "Immediately",
      gender: "Male",
      softwareSkills: "AutoCAD",
      gccExperience: "1 years",
      domainExperience: "3 years in Landscape Design",
      nationality: "canadian",
      language: "English",
      level: "Mid-level",
      lastWorkingCompany: "Green Spaces Ltd.",
      lastCompanyLocation: "Sydney, Australia",
      image: ManImg,
      videoUrl: "https://www.youtube.com/embed/sYV37t8vDgQ",
    },
    {
      id: 10,
      category: "BIM",
      position: "BIM Modeler / BIM Technician",
      discipline: "Architecture",
      subDiscipline: "Facade Design",
      finalEducationalQualification: "B.Arch",
      qualificationPassoutFinalYear: 2021,
      availabilityToJoin: "1 month",
      gender: "Female",
      softwareSkills: "Revit",
      gccExperience: "1 year",
      domainExperience: "2 years in Architecture",
      nationality: "Canadian",
      language: "English",
      level: "Entry-level",
      lastWorkingCompany: "XYZ Design Studio",
      lastCompanyLocation: "Toronto, Canada",
      image: ManImg,
      videoUrl: "https://www.youtube.com/embed/sYV37t8vDgQ",
    },
  ];

  const handleImageClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const [selectedButton, setSelectedButton] = useState("All Resources");

  // Function to handle button click
  const handleClick = (button) => {
    setSelectedButton(button);
    if (button == "Shortlist") {
      props.SetShortlist("Shortlist");
    } else {
      props.SetShortlist("");
    }
  };

  const [allShortlistedData, setAllShortlistedData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const [currentJobData, setCurrentJobData] = useState(null);

  function getShortListData(ShortlistedJobData) {
    const updatedJobData = {
      ...ShortlistedJobData,
      rating: rating, // Include the latest rating
      review: review, // Include the latest review
    };

    // Update the state with the new data
    const updatedData = [...allShortlistedData, updatedJobData];
    setAllShortlistedData(updatedData);

    // Set the updated data for the shortlist
    props.SetGetDataForShortlist(updatedData);

    console.log("Updated allShortlistedData:", updatedData);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentJobData) {
      getShortListData(currentJobData); // Pass the current job data
    }
    setModalOpen(false); // Close the modal after submission
    setRating(0); // Reset rating
    setReview(""); // Reset review
  };

  return (
    <div className="job-list-container">
      <div
        className={`w-full space-x-2 mb-2 ${
          selectedButton == "Shortlist"
            ? "flex justify-center items-center"
            : ""
        } `}
      >
        {["All Resources", "Shortlist"].map((buttonText, index) => (
          <button
            key={index}
            onClick={() => handleClick(buttonText)}
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

      <div>
        {(() => {
          const filteredJobs = jobData.filter((job) => {
            // Check if there are no filters applied
            const noFiltersApplied = Object.values(props.FilterData).every(
              (value) => value === "" || value === null || value === undefined
            );

            // If no filters applied, return all jobs
            if (noFiltersApplied) {
              return true;
            }

            // Otherwise, filter the jobs based on the filters provided
            return (
              (props.FilterData.Category === "" ||
                props.FilterData.Category === job.category) &&
              (props.FilterData.Discipline === "" ||
                props.FilterData.Discipline === job.discipline) &&
              (props.FilterData.DomainExperience === "" ||
                props.FilterData.DomainExperience === job.domainExperience) &&
              (props.FilterData.FEQualification === "" ||
                props.FilterData.FEQualification ===
                  job.finalEducationalQualification) &&
              (props.FilterData.GCCExperience === "" ||
                props.FilterData.GCCExperience === job.gccExperience) &&
              (props.FilterData.Gender === "" ||
                props.FilterData.Gender === job.gender) &&
              (props.FilterData.JoinAvailability === "" ||
                props.FilterData.JoinAvailability === job.availabilityToJoin) &&
              (props.FilterData.Language === "" ||
                props.FilterData.Language === job.language) &&
              (props.FilterData.LastCompany === "" ||
                props.FilterData.LastCompany === job.lastWorkingCompany) &&
              (props.FilterData.LastCompanyLocation === "" ||
                props.FilterData.LastCompanyLocation ===
                  job.lastCompanyLocation) &&
              (props.FilterData.Level === "" ||
                props.FilterData.Level === job.level) &&
              (props.FilterData.Nationality === "" ||
                props.FilterData.Nationality === job.nationality) &&
              (props.FilterData.Position === "" ||
                props.FilterData.Position === job.position) &&
              (props.FilterData.QualificationPassoutYear === "" ||
                props.FilterData.QualificationPassoutYear ===
                  job.qualificationPassoutFinalYear) &&
              (props.FilterData.SoftwareSkills === "" ||
                props.FilterData.SoftwareSkills === job.softwareSkills) &&
              (props.FilterData.SubDiscipline === "" ||
                props.FilterData.SubDiscipline === job.subDiscipline)
            );
          });

          // Check if there are no filtered jobs
          if (filteredJobs.length === 0) {
            return (
              <div className="w-full lg:w-[900px] xl:w-[700px] bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition duration-300 ease-in-out flex flex-col lg:flex-row gap-y-5 gap-x-5 justify-start lg:items-center">
                {" "}
                <p className="text-center text-gray-600">
                  Candidates not found.
                </p>{" "}
              </div>
            );
          }

          function toggleSoftwareField(dropdown) {
            const softwareSection = document.getElementById(
              "softwareRequiredSection"
            );
            softwareSection.style.display =
              dropdown.value === "Yes" ? "block" : "none";
          }

          function handleCandidateClick() {
            Swal.fire({
              title:
                '<div className="flex justify-center items-center flex-col text-yellow-300"><span class="text-xl font-semibold text-gray-800">Request For Evaulation</span> <hr classNwme="h-4 bg-black border-4 border-b-gray-200" /> </div>',
              html: `
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <!-- Expected Site Duration -->
        <div>
          <label for="siteDuration" class="block text-sm font-medium text-gray-600">Expected Site Duration</label>
          <select id="siteDuration" class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option>1-3 Weeks</option>
            <option>1 Month</option>
            <option>2 Months</option>
            <option>3 Months</option>
            <option>6 Months</option>
            <option>12 Months</option>
            <option>1 Year +</option>
          </select>
        </div>
        
        <!-- Expected Mobilization Date -->
        <div>
          <label for="mobilizationDate" class="block text-sm font-medium text-gray-600">Expected Mobilization Date</label>
          <input type="date" id="mobilizationDate" class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>
        
        <!-- POC Name & Position -->
        <div class="col-span-2">
          <label for="pocName" class="block text-sm font-medium text-gray-600">POC Name & Position</label>
          <input type="text" id="pocName" placeholder="Name & Position" class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>
        
        <!-- POC Contact Details -->
        <div class="col-span-2">
          <label for="pocContact" class="block text-sm font-medium text-gray-600">POC Contact Details</label>
          <input type="text" id="pocContact" placeholder="Phone/Mobile No." class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>
        
        <!-- Workstation / Laptop Required -->
        <div>
          <label for="workstationRequired" class="block text-sm font-medium text-gray-600">Workstation / Laptop Required</label>
          <select id="workstationRequired" class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" onchange="toggleSoftwareField(this)">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        
        <!-- Software Required with Version -->
        <div id="softwareRequiredSection" style="display: none;">
          <label for="softwareVersion" class="block text-sm font-medium text-gray-600">Software Required <span class="text-indigo-600 font-medium">(with Version)</span></label>
          <input type="text" id="softwareVersion" placeholder="Software & Version" class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>
        
        <!-- Evaluation Location -->
        <div class="col-span-2">
          <label for="evaluationLocation" class="block text-sm font-medium text-gray-600">Evaluation Location</label>
          <input type="text" id="evaluationLocation" class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>
        
        <!-- Remark -->
        <div class="col-span-2">
          <label for="remark" class="block text-sm font-medium text-gray-600">Remark</label>
          <textarea id="remark" class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" rows="3" placeholder="Add any relevant comments..."></textarea>
        </div>
      </div>
    `,
              showCancelButton: true,
              confirmButtonText: "Submit",
              customClass: {
                popup: "p-4 rounded-lg shadow-lg",
                confirmButton:
                  "bg-[#2563EB] hover:bg-[#0085DB] text-white font-medium py-2 px-4 rounded-md transition",
                cancelButton:
                  "bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-md transition",
              },
              preConfirm: () => {
                const siteDuration =
                  document.getElementById("siteDuration").value;
                const mobilizationDate =
                  document.getElementById("mobilizationDate").value;
                const pocName = document.getElementById("pocName").value;
                const pocContact = document.getElementById("pocContact").value;
                const workstationRequired = document.getElementById(
                  "workstationRequired"
                ).value;
                const softwareVersion =
                  document.getElementById("softwareVersion").value;
                const evaluationLocation =
                  document.getElementById("evaluationLocation").value;
                const remark = document.getElementById("remark").value;

                return {
                  siteDuration,
                  mobilizationDate,
                  pocName,
                  pocContact,
                  workstationRequired,
                  softwareVersion,
                  evaluationLocation,
                  remark,
                };
              },
            });
          }

          function CandidateMobilizationRequest() {
            Swal.fire({
              title:
                '<div className="flex justify-center items-center flex-col text-yellow-300"><span class="text-xl font-semibold text-gray-800">Request For Mobilization</span> <hr classNwme="h-4 bg-black border-4 border-b-gray-200" /> </div>',
              html: `
     <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
  <!-- POC Name & Position -->
  <div class="col-span-2">
    <label for="pocNamePosition" class="block text-sm font-medium text-gray-600">POC Name & Position</label>
    <input type="text" id="pocNamePosition" placeholder="Name & Position" class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
  </div>
  
  <!-- POC Contact Details -->
  <div class="col-span-2">
    <label for="pocContactDetails" class="block text-sm font-medium text-gray-600">POC Contact Details</label>
    <input type="text" id="pocContactDetails" placeholder="Phone/Mobile No." class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
  </div>

  <!-- Mobilization Location -->
  <div class="col-span-2">
    <label for="mobilizationLocation" class="block text-sm font-medium text-gray-600">Mobilization Location</label>
    <input type="text" id="mobilizationLocation" placeholder="Location" class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
  </div>

  <!-- Remark -->
  <div class="col-span-2">
    <label for="remark" class="block text-sm font-medium text-gray-600">Remark</label>
    <textarea id="remark" class="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" rows="3" placeholder="Add any relevant comments..."></textarea>
  </div>
</div>

    `,
              showCancelButton: true,
              confirmButtonText: "Submit",
              customClass: {
                popup: "p-4 rounded-lg shadow-lg",
                confirmButton:
                  "bg-[#2563EB] hover:bg-[#0085DB] text-white font-medium py-2 px-4 rounded-md transition",
                cancelButton:
                  "bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-md transition",
              },
              preConfirm: () => {
                const siteDuration =
                  document.getElementById("siteDuration").value;
                const mobilizationDate =
                  document.getElementById("mobilizationDate").value;
                const pocName = document.getElementById("pocName").value;
                const pocContact = document.getElementById("pocContact").value;
                const workstationRequired = document.getElementById(
                  "workstationRequired"
                ).value;
                const softwareVersion =
                  document.getElementById("softwareVersion").value;
                const evaluationLocation =
                  document.getElementById("evaluationLocation").value;
                const remark = document.getElementById("remark").value;

                return {
                  siteDuration,
                  mobilizationDate,
                  pocName,
                  pocContact,
                  workstationRequired,
                  softwareVersion,
                  evaluationLocation,
                  remark,
                };
              },
            });
          }
          // Rendering job cards within the map function
          return filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`${
                props.Shortlist == "Shortlist" ? "w-full" : ""
              } relative p-5 rounded-xl border border-gray-300 bg-white shadow-lg hover:shadow-md transition-shadow duration-300 mb-8 flex flex-col lg:flex-row gap-y-5 gap-x-8 items-start lg:items-center`}
            >
              {/* Top-right Icon Actions */}
              <div className="absolute top-3 right-4 flex space-x-3">
                <div className="group relative">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-gray-400 hover:text-blue-500 cursor-pointer text-lg transition"
                    onClick={() => {
                      setCurrentJobData(job); // Set the current job data
                      setModalOpen(true); // Open the modal
                    }}
                  />

                  <span className="absolute bottom-[-1.5rem] left-0 translate-y-full text-xs font-medium bg-blue-500 text-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
                    Shortlist
                  </span>
                </div>
                <div className="group relative">
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    className="text-gray-400 hover:text-blue-500 cursor-pointer text-lg transition"
                    onClick={() => handleCandidateClick(job.id)}
                  />
                  <span className="absolute bottom-[-1.5rem] left-0 translate-y-full text-xs font-medium bg-blue-500 text-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
                    Request Evaluation
                  </span>
                </div>
                <div className="group relative">
                  <FontAwesomeIcon
                    icon={faTruck}
                    className="text-gray-400 hover:text-blue-500 cursor-pointer text-lg transition"
                    onClick={() => CandidateMobilizationRequest(job.id)}
                  />
                  <span className="absolute bottom-[-1.5rem] left-0 translate-y-full text-xs font-medium bg-blue-500 text-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
                    Request Mobilization
                  </span>
                </div>
              </div>

              {/* Profile Image */}
              <div
                className="relative cursor-pointer hover:opacity-90 transition-opacity duration-300 lg:mr-6"
                onClick={() => handleImageClick(job.videoUrl)}
              >
                <Image
                  src={job.image}
                  width={160}
                  height={160}
                  className="rounded-full w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 shadow-md"
                  alt="ResourceUserImage"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-25 rounded-full">
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="text-white opacity-85"
                    style={{ fontSize: "50px" }}
                  />
                </div>
              </div>

              {/* Job Details */}
              <Link
                href="/Dashboard/ResourceManagement/AvailableResources/AvailableResourceDetail"
                className="w-full lg:w-[calc(100%-220px)] flex flex-col space-y-2"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {job.position}
                </h2>
                <p className="text-gray-500 text-sm font-medium">
                  {job.category}
                </p>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-blue-400" />
                    {job.lastCompanyLocation}
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1 text-purple-400" />
                    Availability: {job.availabilityToJoin}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                    <FaUser className="mr-1 text-blue-400" />
                    Gender: {job.gender}
                  </span>
                  <span className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                    <FaGlobe className="mr-1 text-green-400" />
                    Nationality: {job.nationality}
                  </span>
                  <span className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                    <FaLevelUpAlt className="mr-1 text-purple-400" />
                    Level: {job.level}
                  </span>
                </div>
              </Link>

              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                    <h2 className="text-xl font-semibold mb-4">
                      Leave a Review
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <div className="flex mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className={`text-2xl ${
                              star <= rating
                                ? "text-yellow-500"
                                : "text-gray-400"
                            }`}
                            onClick={() => setRating(star)}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                      <textarea
                        className="w-full border border-gray-300 p-2 rounded-lg mb-4"
                        rows="4"
                        placeholder="Write your review..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                      />
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="mr-2 bg-gray-300 text-black px-4 py-2 rounded-lg"
                          onClick={() => setModalOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          ));
        })()}

        <div className="job-list-header flex flex-col lg:flex-row items-start lg:items-center gap-2 mb-4">
          <p className="text-gray-700">Show 10 jobs</p>
          <select className="border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value="default">Sort by default</option>
          </select>
        </div>
        {/* Popup Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-700 ease-out">
            <div className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-3xl p-10 w-[90%] max-w-3xl shadow-2xl transform transition-all duration-700 ease-out  backdrop-blur-lg">
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-gray-600 hover:text-red-500 text-3xl focus:outline-none transition-all duration-300 ease-in-out"
                onClick={closeModal}
              >
                <span className="transition-transform transform hover:rotate-90">
                  ✕
                </span>
              </button>

              {/* Modal Header */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3 text-4xl font-extrabold tracking-wide">
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                    Software
                  </h1>
                  <h1 className="text-gray-800">Engineer</h1>
                </div>
                <div className="w-24 mt-4 border-t-4 border-gray-300 rounded-full"></div>
              </div>

              {/* Video Section with Shadow Animation */}
              <div className="relative w-full h-0 pb-[56.25%] mt-8 rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src={selectedVideo}
                  title="Interview Tips Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-20 pointer-events-none rounded-xl"></div>
              </div>

              {/* Button with Pulse and Gradient Effects */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() =>
                    router.push(
                      "/Dashboard/ResourceManagement/AvailableResources/AvailableResourceDetail"
                    )
                  }
                  className="bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-l animate-pulse focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50"
                >
                  View Detail
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesList;
