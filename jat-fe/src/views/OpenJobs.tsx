import { useContext, useEffect } from "react";
import JobListing from "../components/JobListing";
import Layout from "../components/Layout";
import { JobContext } from "../context";

const OpenJobs = () => {
  const { getAllJobs, jobs } = useContext(JobContext);
  useEffect(() => {
    getAllJobs();
  }, []);
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        {jobs &&
          jobs
            .filter((job: any) => job.open === true)
            .map((job: any) => <JobListing key={job.jobId} job={job} />)}
      </div>
    </Layout>
  );
};

export default OpenJobs;
