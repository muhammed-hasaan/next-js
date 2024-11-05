import { IoNotificationsOutline } from "react-icons/io5";
import "../../../../globals.css";

export default function Navbar(props) {
  return (
    <div className="flex justify-end items-end w-[100%]">
      <header className="flex justify-between items-center p-4 bg-white shadow-xl w-[100%] responsiveFullWidth">
        <div className="md:hidden ">
          <button onClick={props.openSideBar} className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-end w-full pr-4 pl-2 space-x-4">
          <IoNotificationsOutline size={28} className="text-gray-800" />
        </div>
      </header>
    </div>
  );
}
