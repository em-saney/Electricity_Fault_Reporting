import Image from "next/image";
import logo from "@/public/images/pngegg (30) 1.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-blue-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Logo */}
        <div className="h-24 w-48 mb-4 md:mb-0  rounded-md">
          <Image
            src={logo}
            alt="Left Logo"
            width={100}
            height={100}
            className="h-full w-auto "
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col md:flex-row md:items-center text-center md:text-left mb-4 md:mb-0">
          {/* Text Content */}
          <div className="flex flex-col text-center mx-9">
            <h2 className="text-xl font-bold leading-tight line-clamp-1">
              Ahmed Bello University
            </h2>
            <p className="mt-2 text-base font-semibold">
              Electricity Fault Reporting System (EFRS)
            </p>
          </div>

          {/* Additional Information */}
          <div className="mt-4 md:mt-0 lg:max-w-[60%] max-w-full">
            <p className="text-sm  text-center">
              Welcome To The Electricity Fault Reporting System (EFRS), A
              State-Of-The-Art Web-Based Application Specifically Designed To
              Streamline The Reporting And Management Of Electricity Faults
              Within The Hostels Of Ahmadu Bello University, Nigeria. Our
              Mission Is To Enhance The Efficiency And Effectiveness Of Fault
              Reporting, Significantly Reducing Downtime And Improving The
              Quality Of Life For Both Staff And Students Residing In The
              Hostels.
            </p>
          </div>
        </div>

        {/* Right Logo */}
        <div className="h-24 w-auto mt-4 md:mt-0">
          <Image
            src="/path/to/right-logo.png"
            alt="Right Logo"
            width={100}
            height={100}
            className="h-full w-auto "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
