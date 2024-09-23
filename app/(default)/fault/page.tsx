"use client";

import { useState } from "react";

import Image from 'next/image';
import React from 'react'; 
import carousel04 from "@/public/images/hero.jpg";

function Fault() {
    const reports = [
        { id: 1, title: "Low Current", description: "The lights in my room have been dim for the past two days, even when all the lights are turned on. The room is not well-lit, making it difficult to read or study.", time: "2 Days ago" },
        { id: 2, title: "Fallen Pole", description: "An electric pole near the main entrance of Dandifo Hall has fallen. This happened after a heavy rainstorm last night. The wires are exposed and pose a danger.", time: "2 Weeks ago" },
        { id: 3, title: "High Current Issue", description: "There seems to be a problem with the electrical system in my room. The electrical appliances are receiving too much current, which is causing them to overheat.", time: "8 Weeks ago" },
        { id: 4, title: "Fallen Pole", description: "An electric pole near the main entrance of Dandifo Hall has fallen. This happened after a heavy rainstorm last night. The wires are exposed and pose a danger.", time: "12 Weeks ago" },
      ];
      
  
  return (
    <div>
    <div className="relative w-full h-[35vw] sm:h-[40vw] md:h-[35vw] lg:h-[25vw]">
    <Image
      src={carousel04}
      fill
      className="object-cover object-top"
      alt=""
    />
    
    <div className="absolute inset-0 flex flex-col  lg:top-0 top-10 justify-center items-center text-center text-white">
      <h2 className="text-sm sm:text-xl md:text-3xl lg:text-3xl font-semibold mt-4 sm:mt-6 md:mt-8 lg:mt-0">
        Welcome John
      </h2>
      <p className="text-sm sm:text-base md:text-3xl lg:text-3xl  lg:mt-3 md:mb-4 lg:mb-4">
        Electricity Fault Reporting System
      </p>
      <p className="text-sm sm:text-base md:text-lg lg:text-3xl">
        (EFRS)
      </p>
    </div>
    </div>
    <div className=" bg-gray-100 p-6 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Report Form */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Electricity Faulty In Your Hostel?</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Nature Of Fault</label>
              <input
                type="text"
                placeholder="Low Light"
                className="mt-1 p-2 w-full border rounded-md"
                style={{
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #15AE08, #565EA6) border-box",
                  border: "2px solid transparent",
                }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Describe Fault</label>
              <textarea
                rows={3}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="50 Words Max..."
                style={{
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #15AE08, #565EA6) border-box",
                  border: "2px solid transparent",
                }}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Hostel</label>
              <select className="mt-1 p-2 w-full border rounded-md">
                <option>Select Hostel</option>
                <option>Hostel A</option>
                <option>Hostel B</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block  text-gray-700">Block</label>
              <select className="mt-1  p-2 w-full border rounded-md">
                <option>Select Block</option>
                <option>Block 1</option>
                <option>Block 2</option>
              </select>
              
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Room No.</label>
              <input
                type="text"
                placeholder="1021"
                className="mt-1 p-2 w-full border rounded-md"
                style={{
                  background:
                    "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #15AE08, #565EA6) border-box",
                  border: "2px solid transparent",
                }}
              />
            </div>

            <button className="w-full bg-gradient-to-r from-[#15AE08] to-[#565EA6] text-white py-2 rounded-md" >
              Send Report
            </button>
          </form>
        </div>

        {/* Previous Reports */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Previous Reports</h2>
          <ul>
            {reports.map((report) => (
              <li key={report.id} className="mb-4 shadow-lg px-2">
                <div className="flex items-center  mb-2">
                  <div className="w-8 h-8 bg-gray-300 shadow-md rounded-full flex items-center justify-center text-lg font-semibold">
                    {report.title.charAt(0)}
                  </div>
                  <div className="ml-3 ">
                    <h3 className="text-lg font-semibold">{report.title}</h3>
                    <p className="text-gray-500">{report.time}</p>
                  </div>
                </div>
                <p className="text-gray-700">{report.description}</p>
                <button className="text-green-500 mt-2">Maintenance Feedback</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Fault