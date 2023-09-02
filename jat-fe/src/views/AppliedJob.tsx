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
      AppliedJob
      {currentJob && <JobDetails job={currentJob} />}
      <a href={`/edit/${currentJob?.jobId}`}>Edit job application</a>
    </Layout>
  );
};

export default About;
