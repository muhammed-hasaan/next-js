"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ResourceUserImg from "../../../../../../../Assets/ResourceManagement/AvailableResources/AvailableResourceDetail/ResourceUserImg.JPEG";
import { FaVideo, FaFileDownload } from "react-icons/fa";
import { FaChevronDown, FaChevronUp, FaBuilding } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "NEOM Project",
    image:
      "https://th.bing.com/th/id/OIP.MjLaBrRkq25lUtwkqX1tbgHaFQ?w=273&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Modelling, wall finishes, floor finishes, ceiling finishes, ceiling cove details, skirting details, and joineries with finishes and details.",
      "Creating Parametric and adaptive families of joineries and doors.",
      "Preparing wall finish layouts, floor finish layouts, furniture layouts, reflected ceiling layouts.",
      "Layouts, elevation sheets, enlarged layout sheets, joinery details sheets, typical wall, floor, ceiling, and door sheets.",
    ],
  },
  {
    id: 2,
    title: "Egg-Shaped Office",
    image:
      "https://th.bing.com/th/id/OIP.q4UI5drDcWaCEKh_xqmt5gHaFt?pid=ImgDet&w=206&h=159&c=7&dpr=1.1",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Modelling for Project B including various finishes.",
      "Creating detailed layouts and adaptive families.",
    ],
  },
  {
    id: 3,
    title: "Technosphere",
    image:
      "https://www.arabianbusiness.com/cloud/2021/09/15/CnDBW9Ng-technosphere-3.jpg",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Full project modelling and finish details.",
      "Preparing comprehensive layout sheets.",
    ],
  },
  {
    id: 4,
    title: "NEOM Project",
    image:
      "https://th.bing.com/th/id/OIP.MjLaBrRkq25lUtwkqX1tbgHaFQ?w=273&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Modelling, wall finishes, floor finishes, ceiling finishes, ceiling cove details, skirting details, and joineries with finishes and details.",
      "Creating Parametric and adaptive families of joineries and doors.",
      "Preparing wall finish layouts, floor finish layouts, furniture layouts, reflected ceiling layouts.",
      "Layouts, elevation sheets, enlarged layout sheets, joinery details sheets, typical wall, floor, ceiling, and door sheets.",
    ],
  },
  {
    id: 5,
    title: "Egg-Shaped Office",
    image:
      "https://th.bing.com/th/id/OIP.q4UI5drDcWaCEKh_xqmt5gHaFt?pid=ImgDet&w=206&h=159&c=7&dpr=1.1",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Modelling for Project B including various finishes.",
      "Creating detailed layouts and adaptive families.",
    ],
  },
  {
    id: 6,
    title: "Technosphere",
    image:
      "https://www.arabianbusiness.com/cloud/2021/09/15/CnDBW9Ng-technosphere-3.jpg",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Full project modelling and finish details.",
      "Preparing comprehensive layout sheets.",
    ],
  },
  {
    id: 7,
    title: "NEOM Project",
    image:
      "https://th.bing.com/th/id/OIP.MjLaBrRkq25lUtwkqX1tbgHaFQ?w=273&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Modelling, wall finishes, floor finishes, ceiling finishes, ceiling cove details, skirting details, and joineries with finishes and details.",
      "Creating Parametric and adaptive families of joineries and doors.",
      "Preparing wall finish layouts, floor finish layouts, furniture layouts, reflected ceiling layouts.",
      "Layouts, elevation sheets, enlarged layout sheets, joinery details sheets, typical wall, floor, ceiling, and door sheets.",
    ],
  },
  {
    id: 8,
    title: "Egg-Shaped Office",
    image:
      "https://th.bing.com/th/id/OIP.q4UI5drDcWaCEKh_xqmt5gHaFt?pid=ImgDet&w=206&h=159&c=7&dpr=1.1",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Modelling for Project B including various finishes.",
      "Creating detailed layouts and adaptive families.",
    ],
  },
  {
    id: 9,
    title: "Technosphere",
    image:
      "https://www.arabianbusiness.com/cloud/2021/09/15/CnDBW9Ng-technosphere-3.jpg",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Full project modelling and finish details.",
      "Preparing comprehensive layout sheets.",
    ],
  },
  {
    id: 10,
    title: "NEOM Project",
    image:
      "https://th.bing.com/th/id/OIP.MjLaBrRkq25lUtwkqX1tbgHaFQ?w=273&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Modelling, wall finishes, floor finishes, ceiling finishes, ceiling cove details, skirting details, and joineries with finishes and details.",
      "Creating Parametric and adaptive families of joineries and doors.",
      "Preparing wall finish layouts, floor finish layouts, furniture layouts, reflected ceiling layouts.",
      "Layouts, elevation sheets, enlarged layout sheets, joinery details sheets, typical wall, floor, ceiling, and door sheets.",
    ],
  },
  {
    id: 11,
    title: "Egg-Shaped Office",
    image:
      "https://th.bing.com/th/id/OIP.q4UI5drDcWaCEKh_xqmt5gHaFt?pid=ImgDet&w=206&h=159&c=7&dpr=1.1",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Modelling for Project B including various finishes.",
      "Creating detailed layouts and adaptive families.",
    ],
  },
  {
    id: 12,
    title: "Technosphere",
    image:
      "https://www.arabianbusiness.com/cloud/2021/09/15/CnDBW9Ng-technosphere-3.jpg",
    scopeOfWork: "LOD 400 Modelling",
    softwareUsed: "CAD, Revit, Navisworks",
    rolesResponsibilities: [
      "Full project modelling and finish details.",
      "Preparing comprehensive layout sheets.",
    ],
  },
];
export default function AvailableResourceDetail() {
  const [isProjectListOpen, setIsProjectListOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openProjectList = () => {
    setIsProjectListOpen(true);
  };

  const openModal = (index) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectIndex(null);
    setIsProjectListOpen(false); // Reset project list visibility
  };

  const nextProject = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const previousProject = () => {
    setSelectedProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const galleryItems = [
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.MjLaBrRkq25lUtwkqX1tbgHaFQ?w=273&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      projectName: "NEOM Project",
      scopeOfWork: "LOD 400 Modelling",
      softwareUsed: "CAD, Revit, Navisworks",
      rolesAndResponsibilities: [
        "Modelling, wall finishes, floor finishes, ceiling finishes, ceiling cove details, skirting details and joineries with finishes and details.",
        "Creating Parametric and adaptive families of joineries, and doors. Preparing wall finish layouts, floor finish layouts, furniture layouts, reflected ceiling layouts.",
        "Layouts, elevation sheets, enlarged layout sheets, joinery details sheets, typical wall, floor, ceiling, and door sheets.",
      ],
    },
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.q4UI5drDcWaCEKh_xqmt5gHaFt?pid=ImgDet&w=206&h=159&c=7&dpr=1.1",
      projectName: "Egg-Shaped Office",
      scopeOfWork: "Interior Design",
      softwareUsed: "AutoCAD, SketchUp",
      rolesAndResponsibilities: [
        "Interior modeling and layout design for office space.",
      ],
    },
    {
      imageSrc:
        "https://www.arabianbusiness.com/cloud/2021/09/15/CnDBW9Ng-technosphere-3.jpg",
      projectName: "Technosphere",
      scopeOfWork: "Architectural Modeling",
      softwareUsed: "Revit, 3ds Max",
      rolesAndResponsibilities: [
        "Facade detailing, parametric design, structural modeling.",
      ],
    },
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.PTjkctDG6ofQEZK3RKSwMgHaEK?pid=ImgDet&w=474&h=266&rs=1",
      projectName: "Commercial Complex",
      scopeOfWork: "LOD 500 Modelling",
      softwareUsed: "Navisworks, Revit",
      rolesAndResponsibilities: [
        "Comprehensive modeling for commercial complex.",
      ],
    },
  ];

  const PreviousCompanyProjects = [
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.MjLaBrRkq25lUtwkqX1tbgHaFQ?w=273&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      projectName: "NEOM Project",
      scopeOfWork: "LOD 400 Modelling",
      softwareUsed: "CAD, Revit, Navisworks",
      rolesAndResponsibilities: [
        "Modelling, wall finishes, floor finishes, ceiling finishes, ceiling cove details, skirting details and joineries with finishes and details.",
        "Creating Parametric and adaptive families of joineries, and doors. Preparing wall finish layouts, floor finish layouts, furniture layouts, reflected ceiling layouts.",
        "Layouts, elevation sheets, enlarged layout sheets, joinery details sheets, typical wall, floor, ceiling, and door sheets.",
      ],
    },
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.q4UI5drDcWaCEKh_xqmt5gHaFt?pid=ImgDet&w=206&h=159&c=7&dpr=1.1",
      projectName: "Egg-Shaped Office",
      scopeOfWork: "Interior Design",
      softwareUsed: "AutoCAD, SketchUp",
      rolesAndResponsibilities: [
        "Interior modeling and layout design for office space.",
      ],
    },
    {
      imageSrc:
        "https://www.arabianbusiness.com/cloud/2021/09/15/CnDBW9Ng-technosphere-3.jpg",
      projectName: "Technosphere",
      scopeOfWork: "Architectural Modeling",
      softwareUsed: "Revit, 3ds Max",
      rolesAndResponsibilities: [
        "Facade detailing, parametric design, structural modeling.",
      ],
    },
    {
      imageSrc:
        "https://th.bing.com/th/id/OIP.PTjkctDG6ofQEZK3RKSwMgHaEK?pid=ImgDet&w=474&h=266&rs=1",
      projectName: "Commercial Complex",
      scopeOfWork: "LOD 500 Modelling",
      softwareUsed: "Navisworks, Revit",
      rolesAndResponsibilities: [
        "Comprehensive modeling for commercial complex.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);
  const [SoftwareActiveIndex, SetSoftwareActiveIndex] = useState(-1);

  const [ProjectcurrentIndex, setProjectCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }, 3000); // Change project every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [galleryItems.length]);

  const carouselRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    // Start the automatic scrolling every 3 seconds
    scrollIntervalRef.current = setInterval(() => {
      if (carouselRef.current) {
        // Scroll the carousel
        carouselRef.current.scrollBy({
          left: carouselRef.current.offsetWidth, // Scroll by one full width of the carousel
          behavior: "smooth", // Smooth scrolling effect
        });
      }
    }, 3000); // Change project every 3 seconds

    return () => clearInterval(scrollIntervalRef.current); // Cleanup on unmount
  }, [galleryItems.length]);

  // comment & add reviews section code

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (reviewText.trim() && rating) {
      setReviews([...reviews, { text: reviewText, rating }]);
      setReviewText("");
      setRating(0);
    }
  };

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  // Carousel functionality to change project every 2 seconds

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // Carousel functionality to change project every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 100000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  const companies = [
    {
      name: "softclub",
      position: "Senior Developer",
      startDate: "1/1/2018",
      endDate: "1/1/2023",
      projects: [
        { name: "Project Alpha", imageSrc: "https://via.placeholder.com/150" },
        { name: "Project Beta", imageSrc: "https://via.placeholder.com/150" },
        { name: "Project Gamma", imageSrc: "https://via.placeholder.com/150" },
      ],
    },
    {
      name: "falume",
      position: "Lead Engineer",
      startDate: "3/1/2023",
      endDate: "Present",
      projects: [
        { name: "Project Delta", imageSrc: "https://via.placeholder.com/150" },
        {
          name: "Project Epsilon",
          imageSrc: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      name: "zafaxplay",
      position: "Lead Engineer",
      startDate: "3/1/2023",
      endDate: "Present",
      projects: [
        { name: "Project Delta", imageSrc: "https://via.placeholder.com/150" },
        {
          name: "Project Epsilon",
          imageSrc: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      name: "neoamble",
      position: "Lead Engineer",
      startDate: "3/1/2023",
      endDate: "Present",
      projects: [
        { name: "Project Delta", imageSrc: "https://via.placeholder.com/150" },
        {
          name: "Project Epsilon",
          imageSrc: "https://via.placeholder.com/150",
        },
      ],
    },
  ];

  const [expandedCompany, setExpandedCompany] = useState(null);

  const toggleCompany = (idx) => {
    setExpandedCompany(expandedCompany === idx ? null : idx);
  };

  const faqs = [
    {
      question: "What is your total experience with BIM?",
      answer: "Yes",
    },
    {
      question: "Revit modelling skills on a scale of 1 to 10?",
      answer: "8",
    },
    {
      question: "CAD Drafting skills on a scale of 1 to 10?",
      answer: "7",
    },
    {
      question: "Revit family creation skills on a scale of 1 to 10?",
      answer: "6",
    },
    {
      question: "Revit documentation skills on a scale of 1 to 10?",
      answer: "9",
    },
    {
      question: "No. of BIM projects you worked on in total?",
      answer: "15",
    },
  ];
  const Softwares = [
    {
      question: "3D Max",
      answer: "Yes",
    },
    {
      question: "Autocad Revit",
      answer: "8",
    },
    {
      question: "Illustrator",
      answer: "7",
    },
    {
      question: "Photoshop",
      answer: "6",
    },
  ];
  return (
    <div className="flex justify-center items-start w-full  ">
      <div className="max-w-6xl w-full rounded-3xl">
        {/* Profile Header */}
        <div
          className="relative flex flex-col md:flex-row items-center md:items-start justify-between p-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl shadow-lg transform transition-transform duration-300 "
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/gradient-purple-hexagonal-background_23-2148965956.jpg?ga=GA1.1.64287740.1721854936&semt=ais_hybrid')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0085DB] opacity-40 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full space-y-8 md:space-y-0">
            {/* Left Side Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 md:w-1/2 space-y-5">
              {/* Profile Image */}
              <Image
                src={ResourceUserImg}
                alt="Candidate Profile"
                className="rounded-full border-4 border-white shadow-lg transform transition duration-300 hover:scale-105"
                width={160}
                height={160}
              />

              {/* Employee Code */}
              <p className="text-lg font-semibold text-white">
                Employee Code: <span className="font-bold">#12345</span>
              </p>

              {/* Position and Availability */}
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <span className="text-xl text-white font-medium bg-[#0085DB] px-4 py-1 rounded-full shadow-md">
                  BIM Architect
                </span>
                <p className="text-md text-white font-medium">
                  Availability: <span className="font-bold">Immediate</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-6 mt-6">
                <button className="bg-white text-[#0085DB] border border-[#0085DB] px-6 py-2 rounded-full shadow-lg transition-transform duration-300 hover:bg-[#0085DB] hover:text-white flex items-center">
                  <FaFileDownload className="inline mr-2" /> Download CV
                </button>
                <button className="bg-white text-[#0085DB] border border-[#0085DB] px-6 py-2 rounded-full shadow-lg transition-transform duration-300 hover:bg-[#0085DB] hover:text-white flex items-center">
                  <FaFileDownload className="inline mr-2" /> Download Portfolio
                </button>
              </div>
            </div>

            {/* Right Side Video */}
            <div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center p-6">
              <div className="w-full h-72 md:h-80 bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <iframe
                  src="https://www.youtube.com/embed/OVAMb6Kui6A"
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* Primary Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          {/* Qualification Section */}
          <div className="bg-white p-5 rounded-3xl shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-[#0085DB]  text-2xl font-bold mb-2">
              Position
            </h2>
            <hr className="h-1 rounded-full bg-[#2563EB] " />
            <ul className=" mt-4 text-black space-y-4">
              <li>
                <strong>Position :</strong> BIM Architect
              </li>
              <li>
                <strong>Discipline :</strong> Architecture
              </li>
              <li>
                <strong>Sub-Discipline :</strong> Landscape Design
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-5 rounded-3xl shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-[#0085DB]  text-2xl font-bold mb-2">
              Personal Information
            </h2>
            <hr className="h-1 rounded-full bg-[#2563EB] " />
            <ul className="mt-4 text-black space-y-4">
              <li>
                <strong>Language :</strong> English
              </li>
              <li>
                <strong>Gender :</strong> Male
              </li>
              <li>
                <strong>Nationality :</strong> Egyptian
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-5 rounded-3xl shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-[#0085DB]  text-2xl font-bold mb-2">
              Category & Experences
            </h2>
            <hr className="h-1 rounded-full bg-[#2563EB] " />
            <ul className="mt-4 text-black space-y-4">
              <li>
                <strong>Category :</strong> Professional
              </li>
              <li>
                <strong>Sub-Category :</strong> BIM Specialists
              </li>
              <li>
                <strong>Total Domain Experience :</strong> 3 Years
              </li>
              <li>
                <strong>Total GCC Experience :</strong> 1 Year
              </li>
            </ul>
          </div>

          {/* Educational Qualification Section */}
          <div className="bg-white p-5 rounded-3xl shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-[#0085DB]  text-[22px] font-bold mb-2">
              Educational Qualification
            </h2>
            <hr className="h-1 rounded-full bg-[#2563EB] " />
            <ul className="text-black space-y-4 mt-4 ">
              <li>
                <strong>Final Qualification :</strong> CA
              </li>
              <li>
                <strong>Year of Passing :</strong> 2015
              </li>
              <li>
                <strong>Institution :</strong> NED University
              </li>
            </ul>
          </div>
        </div>
        {isProjectListOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-5 w-3/4 max-w-3xl">
              <div className="w-full flex justify-center items-center flex-col mb-4">
                <h2 className=" text-2xl font-bold mb-2">
                  Previous Company Projects List
                </h2>
                <hr className="h-1 rounded-full w-28 bg-[#0085DB]" />
              </div>
              <ul className="space-x-6 flex  items-center">
                {projects.map((project, index) => (
                  <li key={project.id} className="flex items-center flex-row">
                    <div
                      key={index}
                      onClick={() => openModal(index)}
                      className="cursor-pointer overflow-hidden rounded-xl bg-white p-2 shadow-md transition-transform duration-300 hover:scale-105"
                    >
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={project.image}
                          alt={`Gallery Image ${index + 1}`}
                          className="object-cover w-full h-48" // Fixed height to ensure uniform box size
                        />
                      </div>
                      <div className="text-center mt-2 text-gray-800 font-semibold">
                        {project.title}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={closeModal}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/* Modal for Project Details */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="bg-white rounded-lg p-8 w-3/4 max-w-2xl shadow-2xl transition-transform transform duration-300 ease-in-out">
              <div className="flex justify-between items-center mb-6 flex-col">
                <h2 className="text-3xl font-bold text-indigo-600 flex justify-center items-center flex-col">
                  {selectedProject.title}
                  <hr className="h-2 w-20 rounded-full bg-gradient-to-tl from-indigo-500 to-purple-500 mt-3" />
                </h2>

                <div className="flex w-full justify-between mt-5">
                  <div className="flex">
                    <button
                      onClick={previousProject}
                      className="bg-indigo-600 text-white py-2 px-4 rounded-l-lg hover:bg-indigo-500 transition duration-200"
                    >
                      &lt; Previous
                    </button>
                    <button
                      onClick={nextProject}
                      className="bg-indigo-500 text-white py-2 px-4 rounded-r-lg hover:bg-indigo-600 transition duration-200"
                    >
                      Next &gt;
                    </button>
                  </div>
                  <div className="flex">
                    <button
                      onClick={closeModal}
                      className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-200 flex justify-center items-center"
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover my-4 rounded-lg shadow-md"
              />

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  Scope of Work:
                </h3>
                <p className="text-gray-700">{selectedProject.scopeOfWork}</p>

                <h3 className="font-semibold text-lg text-gray-800 mt-4">
                  Software Used:
                </h3>
                <p className="text-gray-700">{selectedProject.softwareUsed}</p>

                <h3 className="font-semibold text-lg text-gray-800 mt-4">
                  Roles & Responsibilities:
                </h3>
                <ul className="list-disc ml-5 text-gray-700">
                  {selectedProject.rolesResponsibilities.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* Modal for Project Details
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-5 w-3/4 max-w-2xl">
              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover my-2 rounded"
              />
              <p>{selectedProject.description}</p>

              <div className="mt-4">
                <h3 className="font-semibold">Scope of Work:</h3>
                <p>{selectedProject.scopeOfWork}</p>

                <h3 className="font-semibold">Software Used:</h3>
                <p>{selectedProject.softwareUsed}</p>

                <h3 className="font-semibold">Roles & Responsibilities:</h3>
                <ul className="list-disc ml-5">
                  {selectedProject.rolesResponsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={previousProject}
                  className="bg-gray-300 text-black py-2 px-4 rounded"
                >
                  &lt; Previous
                </button>
                <button
                  onClick={nextProject}
                  className="bg-gray-300 text-black py-2 px-4 rounded"
                >
                  Next &gt;
                </button>
              </div>
              <button
                onClick={closeModal}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )} */}
        {/* Skills Section */}
        {/* <div className="p-8 bg-gray-50 rounded-3xl shadow-md transition-transform duration-300 hover:scale-105">
          <h2 className="text-teal-600 text-3xl font-semibold">Skills</h2>
          <hr className="border-b-2 border-teal-500 h-2 w-10" />

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm">
              AutoCAD
            </span>
            <span className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm">
              SketchUp
            </span>
            <span className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm">
              3ds Max
            </span>
            <span className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm">
              Landscape Design
            </span>
            <span className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm">
              Project Management
            </span>
          </div>
        </div> */}
        {/* Interests Section */}
        {/* <div className="p-8 bg-gray-50 rounded-3xl shadow-md transition-transform duration-300 hover:scale-105">
          <h2 className="text-teal-600 text-3xl font-semibold">Interests</h2>
          <hr className="border-b-2 border-teal-500 h-2 w-10" />
          <p className="mt-3 text-gray-800 leading-relaxed text-lg">
            I enjoy exploring innovative design techniques, attending
            architecture expos, and participating in landscape sustainability
            workshops. My passion lies in merging technology with nature to
            create harmonious spaces.
          </p>
        </div> */}
        <div className="bg-purple-50 rounded-3xl shadow-md transition-transform duration-300  mt-10  w-[100%] flex justify-between px-5  py-10 ">
          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg w-[50%]">
            <h2 className="text-3xl font-bold text-center text-[#1D4ED8] mb-8">
              Working Experience
            </h2>
            <div className="space-y-6">
              {companies.map((company, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-200 transition-transform duration-300 hover:scale-[1.02]"
                >
                  {/* Company Header with Icon */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-3">
                      <FaBuilding className="text-[#1D4ED8] text-2xl" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {company.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {company.position}
                        </p>
                        <p className="text-xs text-gray-500">
                          {company.startDate} - {company.endDate}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleCompany(idx)}
                      className="text-[#1D4ED8] text-xl"
                    >
                      {expandedCompany === idx ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                  </div>

                  {/* Divider */}
                  {expandedCompany === idx && (
                    <>
                      <hr className="my-2 border-gray-200" />
                      <h1 className="text-xl">Projects</h1>
                      <hr className="my-2 w-6 h-1 bg-blue-600" />

                      {/* Projects Section */}
                      <div className="grid grid-cols-2 gap-4">
                        {company.projects.map((project, projectIdx) => (
                          <div
                            key={projectIdx}
                            className="relative rounded-lg overflow-hidden shadow-sm transition transform duration-200 hover:scale-105 border border-gray-200"
                          >
                            <img
                              src={project.imageSrc}
                              alt={project.name}
                              className="object-cover w-full h-32"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <p className="text-white text-center font-semibold text-sm">
                                {project.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl shadow-lg transition-transform duration-300  w-[48.5%] space-y-4 h-full ">
            <h2 className="text-[#0085DB] text-2xl font-semibold text-center mb-4">
              Bim Expertise Technical Questions
            </h2>
            <hr className="mx-auto w-16 border-b-2 border-indigo-500 rounded-full mb-4" />

            <div className="flex flex-col space-y-3">
              <div className="flex">
                {/* Questions Column */}
                <div className="flex-1 text-gray-800 font-semibold">
                  <h3 className="text-lg font-bold mb-2 border-b-2 border-gray-200">
                    Questions
                  </h3>{" "}
                  {/* Heading for Questions */}
                  {faqs.map((item, index) => (
                    <div
                      key={index}
                      className="py-2 border-b-2 border-gray-200"
                    >
                      {item.question}
                    </div>
                  ))}
                </div>

                {/* Vertical Line */}
                <div className="border-l border-gray-300 mx-4" />

                {/* Answers Column */}
                <div className="flex-2 text-gray-700 font-medium">
                  <h3 className="text-lg font-bold mb-2  border-b-2 border-gray-200">
                    Answers
                  </h3>{" "}
                  {/* Heading for Answers */}
                  {faqs.map((item, index) => (
                    <div
                      key={index}
                      className="py-2 border-b-2 border-gray-200"
                    >
                      {item.answer}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <br />
            <hr className="w-full bg-blue-500 h-[2px]" />

            {/* Software Experience */}
            <h2 className="text-[#0085DB] text-2xl font-semibold text-center mb-4">
              Software Proficiency Level
            </h2>
            <hr className="mx-auto w-16 border-b-2 border-indigo-500 rounded-full mb-4" />

            <div className="flex flex-col space-y-3">
              <div className="flex">
                {/* Questions Column */}
                <div className="flex-1 text-gray-800 font-semibold">
                  <h3 className="text-lg font-bold mb-2 border-b-2 border-gray-200">
                    Softwares
                  </h3>{" "}
                  {/* Heading for Questions */}
                  {Softwares.map((item, index) => (
                    <div
                      key={index}
                      className="py-2 border-b-2 border-gray-200"
                    >
                      {item.question}
                    </div>
                  ))}
                </div>

                {/* Vertical Line */}
                <div className="border-l border-gray-300 mx-4" />

                {/* Answers Column */}
                <div className="flex-1 text-gray-700 font-medium">
                  <h3 className="text-lg font-bold mb-2  border-b-2 border-gray-200">
                    Proficiency level
                  </h3>{" "}
                  {/* Heading for Answers */}
                  {Softwares.map((item, index) => (
                    <div
                      key={index}
                      className="py-2 border-b-2 border-gray-200"
                    >
                      {item.answer}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start space-x-8 w-[100%] px-5">
          {/* Carousel Section */}
          <div className="mt-10 p-6 bg-blue-50 rounded-lg shadow-xl border-4 border-gray-100 flex flex-col items-center w-[100%]">
            <h2 className="text-[#0085DB] text-3xl font-semibold mb-2">
              Projects
            </h2>
            <hr className="bg-[#0085DB] h-1 w-10 mb-6 rounded-full" />

            <div className="relative w-full overflow-hidden">
              <div
                className="transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  display: "flex",
                }}
              >
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className="project-card flex-shrink-0 w-full md:w-1/2 lg:w-[270px] p-4 cursor-pointer"
                    onClick={() => handleProjectClick(item)} // Add click handler
                  >
                    <div className="rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg transition-transform duration-300"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-700">{item.scopeOfWork}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal for displaying project details */}
            {selectedProject && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={handleBackdropClick} // Close modal on backdrop click
              >
                <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                  >
                    &times;
                  </button>
                  <h3 className="text-xl font-bold mb-4">
                    {selectedProject.title}
                  </h3>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="font-semibold">Scope of Work:</p>
                  <p className="mb-4">{selectedProject.scopeOfWork}</p>
                  <p className="font-semibold">Software Used:</p>
                  <p className="mb-4">{selectedProject.softwareUsed}</p>
                  <p className="font-semibold">Roles & Responsibilities:</p>
                  <ul className="list-disc pl-5">
                    {selectedProject.rolesResponsibilities.map(
                      (role, index) => (
                        <li key={index}>{role}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
