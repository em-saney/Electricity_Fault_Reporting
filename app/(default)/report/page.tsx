import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DisplayReportPage() {
  const router = useRouter();
  const [report, setReport] = useState("Loading...");

  useEffect(() => {
    // Wait for the router to be ready before accessing query
    if (router.isReady) {
      const queryReport = router.query?.report;
      
      // Set the report if it's available, otherwise set a default message
      if (queryReport) {
        
      } else {
        setReport("No report submitted");
      }
    }
  }, [router.isReady]); // Trigger useEffect only when router becomes ready

  return (
    <div>
      <h1 className="text-xl font-bold">Fault Report</h1>
      <p className="mt-4 p-4 border rounded">{report}</p>
    </div>
  );
}
