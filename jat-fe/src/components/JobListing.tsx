const JobListing = ({ job }: { job: any }) => {
  return (
    <a
      key={job.jobId}
      href={`/job/${job.jobId}`}
      className="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">{job.jobTitle}</p>
        <p>Company: {job.companyName}</p>
        <p>Status: {job.status}</p>
      </div>
    </a>
  );
};

export default JobListing;
