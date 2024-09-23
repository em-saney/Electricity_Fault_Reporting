import React from 'react'
import Image from "next/image";
import Link from "next/link";
import carousel04 from "../public/images/hero.jpg";


function Hero() {
  return (
    <div className="relative bg-[#F5FFFA]">
    <div className="mx-auto">
      {/* Image */}
      <div className="relative w-[100%] h-[80vw] sm:h-[50vw] lg:h-[40vw]">
        <Image
          src={carousel04}
          fill
          className="object-cover"
          alt=""
        />
      </div>
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-xl sm:text-1xl lg:text-xl font-semibold lg:mt-0 mb-3 mt-8">
          Ahmed Bello University
        </h2>
        <p className="text-base sm:text-lg lg:text-3xl mb-4">
          Electricity Fault Reporting System
        </p>
        <p className="text-base sm:text-lg lg:text-3xl mb-6">(EFRS)</p>
        <Link href="#">
          <button className="border text-green-600  bg-zinc-100 py-2 rounded px-6 sm:px-8 lg:px-10 sm:text-sm lg:text-base">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Hero