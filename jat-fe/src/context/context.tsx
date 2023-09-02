import { createContext } from "react";

interface Context {
  jobs: any[];
  currentJob: any;
  errors?: null;
  error: boolean;
  loading: boolean;
  getAllJobs: () => any;
  getJobById: (id: string) => any;
  createJob: (job: any) => any;
  deleteJob: (id: any) => any;
  updateJob: (id: any, job: any) => any;
}

export const JobContext = createContext<Context>({
  getAllJobs: () => {},
  getJobById: () => {},
  createJob: () => {},
  deleteJob: () => {},
  updateJob: () => {},
  errors: null,
  jobs: [{}],
  currentJob: {},
  loading: false,
  error: false,
});
