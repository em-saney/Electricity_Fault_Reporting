import React from "react";

function About() {
  return (
    <div className="mx-auto max-w-[90%]  ">
      <div>
        <h1 className="text-green-500 text-2xl mt-4 mb-3">About Efrs</h1>
        <p className="mb-3">
          Welcome to the Electricity Fault Reporting System (EFRS), a
          state-of-the-art web-based application specifically designed to
          streamline the reporting and management of electricity faults within
          the hostels of Ahmadu Bello University, Nigeria. Our mission is to
          enhance the efficiency and effectiveness of fault reporting,
          significantly reducing downtime and improving the quality of life for
          both staff and students residing in the hostels.
        </p>
        <h1 className="text-green-500 text-2xl mb-3">Our Objective</h1>
        <p className="mb-3">
          User-Friendly Platform: Provide a seamless and intuitive interface for
          staff and students to report electricity faults in real-time. Prompt
          Notification: Ensure quick notification and assignment of reported
          faults to the appropriate maintenance personnel for swift action.
          Tracking and Monitoring: Offer robust tools to track and monitor the
          progress of fault resolution, ensuring transparency and
          accountability. Insightful Analytics: Generate comprehensive reports
          and analytics on fault frequency, duration, and resolution time to
          identify patterns and improve maintenance strategies.
        </p>
      </div>
    </div>
  );
}

export default About;
