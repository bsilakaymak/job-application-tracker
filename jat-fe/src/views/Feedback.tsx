import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { JobContext } from "../context";
import { uuidv4 } from "../utils";

const Feedback = () => {
  const { jobs, getAllJobs } = useContext(JobContext);
  useEffect(() => {
    getAllJobs();
  }, []);

  const points: string[] = [];
  jobs.map((job) => points.push(job.feedback));
  return (
    <Layout>
      <h2 className="text-bold text-lg">NOTES FROM INTERVIEWS</h2>
      <ol className="list-disc">
        {points.length > 0 &&
          points.map((item) => <li key={uuidv4()}>{item}</li>)}
      </ol>
    </Layout>
  );
};

export default Feedback;
