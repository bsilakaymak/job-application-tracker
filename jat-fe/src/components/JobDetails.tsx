const JobDetails = ({ job }: { job: any }) => {
  return (
    <div key={job.jobId} className="text-center">
      <h2 className="text-xl font-bold">Title: {job.jobTitle}</h2>
      <br></br>
      <div className="text-left">
        <p>
          <strong className="text-red-900">Applied via: </strong>
          {job.appliedVia}
        </p>
        <p>
          <strong className="text-red-900">Description: </strong>
          {job.jobDescription}
        </p>
        <p>
          <strong className="text-red-900">Company name: </strong>
          {job.companyName}
        </p>
        <p>
          <strong className="text-red-900">Company contact: </strong>
          {job.companyContact}
        </p>
        <p>
          <strong className="text-red-900">Open: </strong>
          {job.open ? "Still open" : "Already finalized"}
        </p>
        <p>
          <strong className="text-red-900">Status: </strong> {job.status}
        </p>
        <p>
          <strong className="text-red-900">Remarks: </strong> {job.remarks}
        </p>
        {!job.open && <p>Learnings/Feedback: {job.feedback}</p>}
      </div>
    </div>
  );
};

export default JobDetails;
