import { FC, ReactNode, useEffect, useReducer, useState } from "react";
import { JobContextActions } from "./actions";
import { JobContext } from "./context";
import { JobReducer } from "./reducer";

export const JobState: FC<{ children: ReactNode }> = ({ children }) => {
  const initialState = {
    jobs: [],
    currentJob: {},
    errors: null,
  };

  const [state, dispatch] = useReducer(JobReducer, initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllJobs = async () => {
    setLoading(true);
    setError(false);
    const fetchData = async () => {
      const res = await fetch(`/api/jobs`);
      const data = await res.json();

      dispatch({
        type: JobContextActions.GET_JOBS,
        payload: data,
      });
      setLoading(false);
    };

    fetchData().catch((error) => {
      dispatch({
        type: JobContextActions.JOBS_ERROR,
        payload: error,
      });
      setError(true);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobById = async (id: string) => {
    let returnedData;
    setLoading(true);
    setError(false);
    const fetchData = async () => {
      const res = await fetch(`/api/jobs/${id}`);
      const data = await res.json();
      dispatch({
        type: JobContextActions.GET_JOB,
        payload: data,
      });
      setLoading(false);
    };

    fetchData().catch((error) => {
      dispatch({
        type: JobContextActions.JOBS_ERROR,
        payload: error,
      });
      setError(true);
      setLoading(false);
    });
    return returnedData;
  };

  const deleteJob = async (id: string) => {
    setLoading(true);
    setError(false);
    const fetchData = async () => {
      await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      dispatch({
        type: JobContextActions.DELETE_JOB,
        payload: id,
      });
      setLoading(false);
    };

    fetchData().catch((error) => {
      dispatch({
        type: JobContextActions.JOBS_ERROR,
        payload: error,
      });
    });
    setError(true);
  };

  const updateJob = async (id: string, job: any) => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(`/api/jobs/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });

      const data = await response.json();

      dispatch({
        type: JobContextActions.UPDATE_JOB,
        payload: data,
      });

      setLoading(false);
    };

    fetchData().catch((error) => {
      dispatch({
        type: JobContextActions.JOBS_ERROR,
        payload: error,
      });
    });
    setError(true);
    setLoading(false);
  };

  const createJob = async (job: any) => {
    setLoading(true);
    setError(false);
    const fetchData = async () => {
      await fetch(`/api/jobs`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      dispatch({
        type: JobContextActions.CREATE_JOB,
        payload: state.jobs.push(job),
      });
      setLoading(false);
    };

    fetchData().catch((error) => {
      dispatch({
        type: JobContextActions.JOBS_ERROR,
        payload: error,
      });
    });
    setError(true);
    setLoading(false);
  };

  return (
    <JobContext.Provider
      value={{
        jobs: state.jobs,
        currentJob: state.currentJob,
        errors: state.errors,
        loading,
        error,
        getAllJobs,
        deleteJob,
        updateJob,
        getJobById,
        createJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
