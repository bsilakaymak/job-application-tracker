const JobDetails = ({ job }: { job: any }) => {
  return (
    <div key={job.jobId}>
      <p>Title: {job.jobTitle}</p>
      <p>Description: {job.jobDescription}</p>
      <p>Company: {job.companyName}</p>
      <p>Contact: {job.companyContact}</p>
      <p>Open: {job.open}</p>
      <p>Status: {job.status}</p>
      <p>Remarks: {job.remarks}</p>
      {!job.open && <p>Learnings/Feedback: {job.feedback}</p>}
      <p>Applied via:{job.appliedVia}</p>
    </div>
  );
};

export default JobDetails;
