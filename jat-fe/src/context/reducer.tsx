import { JobContextActions } from "./actions";

export const JobReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case JobContextActions.GET_JOBS:
      return {
        ...state,
        jobs: action.payload.jobs,
      };

    case JobContextActions.GET_JOB:
      return {
        ...state,
        currentJob: action.payload.job,
      };
    case JobContextActions.CREATE_JOB:
      const newJob = action.payload;
      const newJobs = state.jobs.push(newJob);
      return {
        ...state,
        jobs: newJobs,
      };
    case JobContextActions.DELETE_JOB:
      const filteredJobs = state.jobs.filter(
        (job: any) => job.jobId !== action.payload
      );
      return {
        ...state,
        jobs: filteredJobs,
        currentJob: null,
      };
    case JobContextActions.UPDATE_JOB:
      const updatedJob = action.payload;
      const updatedJobs = state.jobs.map((job: any) => {
        if (job.jobId === updatedJob.jobId) {
          return updatedJob;
        }
        return job;
      });
      return {
        ...state,
        jobs: updatedJobs,
        currentJob: action.payload,
      };
    case JobContextActions.JOBS_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
