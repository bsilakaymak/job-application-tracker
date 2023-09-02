import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobDetails from "../components/JobDetails";
import Layout from "../components/Layout";
import { JobContext } from "../context";

const About = () => {
  const { id } = useParams();
  const { getJobById, currentJob } = useContext(JobContext);
  useEffect(() => {
    if (id) {
      getJobById(id);
    }
  }, [id]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-between h-72">
        {currentJob && <JobDetails job={currentJob} />}
        <a
          className="mt-5 inline-block rounded bg-red-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal border-solid border-2 text-textSecondary hover:opacity-70"
          href={`/edit/${currentJob?.jobId}`}
        >
          Edit job application
        </a>
      </div>
    </Layout>
  );
};

export default About;
