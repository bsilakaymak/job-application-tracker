import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import Layout from "../components/Layout";
import { JobContext } from "../context";

const EditJob = () => {
  const { id } = useParams();
  const { getJobById, currentJob } = useContext(JobContext);

  useEffect(() => {
    if (id) {
      getJobById(id);
    }
  }, [id]);

  return <Layout>{currentJob.jobId && <Form />}</Layout>;
};

export default EditJob;
