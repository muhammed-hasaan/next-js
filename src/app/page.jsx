"use client";
import LoginForm from "./Components/LoginComponents/LoginForm/LoginForm";
import { useState } from "react";
import Swal from "sweetalert2";
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "iamadmin") {
      localStorage.setItem("Email", JSON.stringify(email));
      Swal.fire({
        title: "Login Successful",
        text: "Logging in...",
        icon: "success",
        buttons: false, // Remove button
        timer: 2000, // 2 seconds timeout
      });
      setTimeout(() => {
        window.location = "/Dashboard/Home";
      }, 2500);
    } else {
      Swal.fire({
        title: "Enter Correct Credentials",
        text: "Your Entered Credentials are wrong",
        icon: "error",
        buttons: false, // Remove button
        timer: 1000, // 1-second timeout
      });
    }
  };
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <LoginForm
        handleLogin={handleLogin}
        Getemail={(e) => setEmail(e.target.value)}
        emailValue={email}
        Getpassword={(e) => setPassword(e.target.value)}
        passwordValue={password}
      />
    </div>
  );
}
