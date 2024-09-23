"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import login from "@/public/images/hero.jpg";
// export const metadata = {
//   title: 'Reset Password - Creative',
//   description: 'Page description',
// }

export default function Registration() {
  const [fullName, setFullName] = React.useState("");
  const [regNumber, setRegNumber] = React.useState("");
  const [Number, setNumber] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <div className="flex flex-col md:flex-row lg:h-screen">
      <div className="w-full md:w-1/2 h-full flex rounded-md items-center justify-center relative">
        <Image
          src={login} // Replace with the actual path to your image
          alt="Ahmed Bello University"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            Ahmed Bello University
          </h1>
          <h2 className="text-xl md:text-2xl">
            Electricity Fault Reporting System
          </h2>
          <p className="text-lg md:text-xl">(EFRS)</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <h2 className="text-lg md:text-xl bg-gradient-to-r from-[#15AE08] to-[#565EA6] bg-clip-text text-transparent text-center font-bold mb-6">
            Registration
          </h2>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="fullName"
                className="shadow appearance-none border border-transparent rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #15AE08, #565EA6) border-box",
                  border: "2px solid transparent",
                }}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="regNumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Registration Number
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="regNumber"
                className="shadow appearance-none border border-transparent rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
                style={{
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #15AE08, #565EA6) border-box",
                  border: "2px solid transparent",
                }}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="regNumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="regNumber"
                className="shadow appearance-none border border-transparent rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                value={Number}
                onChange={(e) => setNumber(e.target.value)}
                style={{
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #15AE08, #565EA6) border-box",
                  border: "2px solid transparent",
                }}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              New Password
            </label>
            <div className="relative w-full">
              <input
                type="password"
                id="newPassword"
                className="shadow appearance-none border border-transparent rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #15AE08, #565EA6) border-box",
                  border: "2px solid transparent",
                }}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <div className="relative w-full">
              <input
                type="password"
                id="confirmPassword"
                className="shadow appearance-none border border-transparent rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #15AE08, #565EA6) border-box",
                  border: "2px solid transparent",
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-10">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#15AE08] to-[#565EA6] px-8 md:px-12 hover:bg-green-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
            >
              Complete
            </button>
          </div>
          <div className="mt-4 text-center">
          

            <p className="text-gray-500 text-sm mt-5">
              Already have an account?{" "}
              <Link
                href="/login"
                className="inline-block align-baseline font-bold text-sm text-[#15AE08] hover:text-green-800"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
