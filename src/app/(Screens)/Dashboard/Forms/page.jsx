"use client";
import DashboardLayout from "../../../Sections/DashboardSections/dashboard";
import NavbarUserImg from "../../../../../Assets/NavbarAssets/UserImg.jpeg";
import Form from "../../../Components/DashboardComponents/FormsComponent/Form/Form";
import { useState, useEffect } from "react";
var Forms = () => {
  const user = {
    name: "M.Hasaan",
    picture: NavbarUserImg,
  };
  const [email, setEmail] = useState(null);

  useEffect(() => {
    // This will only run on the client side
    const storedEmail = JSON.parse(localStorage.getItem("Email"));

    // If no email found in localStorage, redirect to Login page
    if (!storedEmail) {
      window.location.href = "/Login";
    } else {
      setEmail(storedEmail); // Set the email to state
    }
  }, []);

  // If the email is not yet retrieved, don't render anything
  if (!email) {
    return null;
  }

  return (
    <DashboardLayout user={user}>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-indigo-700 text-3xl font-bold">Add </h1>
          <h1 className="text-3xl font-bold"> User</h1>
        </div>
        <hr className="bg-black h-1 text-black w-[890px] mt-3" />
        <br />
      </div>
      <hr />
      <Form />
    </DashboardLayout>
  );
};
export default Forms;
