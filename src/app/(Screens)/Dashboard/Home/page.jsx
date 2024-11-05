"use client";
import { useEffect, useState } from "react";
import DashboardLayout from "../../../Sections/DashboardSections/dashboard";
import StatusCards from "../../../Components/DashboardComponents/HomeComponents/StatusCards/StatusCards";
import "../../../globals.css";
import "./Home.css";

const Dashboard = () => {
  const VideosData = [
    { url: "https://www.youtube.com/embed/KCgYDCKqato", title: "Interview 1" },
    { url: "https://www.youtube.com/embed/icOq4ZIqIa4", title: "Interview 2" },
    { url: "https://www.youtube.com/embed/4wBy58qk7Bg", title: "Interview 3" },
    { url: "https://www.youtube.com/embed/yL19XilAtO0", title: "Interview 4" },
    { url: "https://www.youtube.com/embed/KCgYDCKqato", title: "Interview 5" },
    { url: "https://www.youtube.com/embed/icOq4ZIqIa4", title: "Interview 6" },
    { url: "https://www.youtube.com/embed/4wBy58qk7Bg", title: "Interview 7" },
    { url: "https://www.youtube.com/embed/yL19XilAtO0", title: "Interview 8" },
    { url: "https://www.youtube.com/embed/KCgYDCKqato", title: "Interview 9" },
    { url: "https://www.youtube.com/embed/icOq4ZIqIa4", title: "Interview 10" },
    { url: "https://www.youtube.com/embed/4wBy58qk7Bg", title: "Interview 11" },
    { url: "https://www.youtube.com/embed/yL19XilAtO0", title: "Interview 12" },
  ];

  const [email, setEmail] = useState(null);

  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem("Email"));
    if (!storedEmail) {
      window.location.href = "/Login";
    } else {
      setEmail(storedEmail);
    }
  }, []);

  if (!email) return null;

  return (
    <DashboardLayout>
      <div className="flex justify-end items-end w-[100%]">
        <div className="p-6 bg-gray-100 min-h-screen w-[100%] responsiveFullWidth">
          <StatusCards />

          {/* Forms & Requests Section */}
          <SectionTitle title="Forms & Requests" />
          <div className="forms-requests grid grid-cols-3 gap-6 mt-4">
            <ButtonLinkCard
              title="Fin Best Resources"
              description="Our Candidates Rsource"
              actionLink="/Dashboard/ResourceManagement/AvailableResources"
              gradientColor="bg-gradient-to-r from-indigo-500 to-purple-500"
            />
            <ButtonLinkCard
              title="Requirements Form"
              description="Place Your Requirements Here"
              actionLink="/Dashboard/ResourceManagement/RequirementForm"
              gradientColor="bg-gradient-to-r from-green-500 to-teal-500"
            />
            <ButtonLinkCard
              title="Task Management"
              description="Management Your Tasks Here"
              actionLink="/Dashboard/projectManagement/TodoList"
              gradientColor="bg-gradient-to-r from-yellow-500 to-orange-500"
            />
          </div>

          {/* Interview Videos Section */}
          <SectionTitle title="Our Interviews" />
          <div className="video-carousel overflow-hidden w-full mt-4">
            <Carousel videos={VideosData} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Section Title Component
const SectionTitle = ({ title }) => (
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 border-b-2 pb-2 border-gray-300">
    {title}
  </h2>
);

// ButtonLinkCard Component for Forms & Requests Section
const ButtonLinkCard = ({ title, description, actionLink, gradientColor }) => (
  <div
    className={`p-6 rounded-lg shadow-lg text-white ${gradientColor} hover:shadow-2xl transition duration-200`}
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm mt-2 mb-4">{description}</p>
    <a
      href={actionLink}
      className="inline-block text-center bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition duration-200"
    >
      Explore
    </a>
  </div>
);

// Carousel Component for Interview Videos Section
// Carousel Component for Interview Videos Section
const Carousel = ({ videos }) => (
  <div className="w-full overflow-hidden">
    <div className="animate-scroll flex gap-4">
      {videos.concat(videos).map((video, index) => (
        <div
          key={index}
          className="w-80 h-56 bg-white p-4 rounded-lg shadow-lg overflow-hidden flex-shrink-0"
        >
          <iframe
            src={video.url}
            className="w-full h-44"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <h2 className=" mt-1 text-xl mb-4">Title Here</h2>
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;
