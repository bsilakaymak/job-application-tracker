import { useContext, useEffect } from "react";
import JobListing from "../components/JobListing";
import Layout from "../components/Layout";
import { JobContext } from "../context";

const AppliedJobs = () => {
  const { getAllJobs, jobs } = useContext(JobContext);
  useEffect(() => {
    getAllJobs();
  }, []);
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {jobs &&
          jobs.length > 0 &&
          jobs.map((job) => <JobListing key={job.jobId} job={job} />)}
      </div>
    </Layout>
  );
};

export default AppliedJobs;
