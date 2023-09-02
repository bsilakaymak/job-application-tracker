const JobListing = ({ job }: { job: any }) => {
  return (
    <a
      key={job.jobId}
      href={`/job/${job.jobId}`}
      className="max-w-sm rounded overflow-hidden bg-textPrimary shadow-lg border-solid border-2 border-primary hover:opacity-70"
    >
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">{job.jobTitle}</p>
        <p>Company: {job.companyName}</p>
        <p className="text-red-900">Status: {job.status}</p>
      </div>
    </a>
  );
};

export default JobListing;
