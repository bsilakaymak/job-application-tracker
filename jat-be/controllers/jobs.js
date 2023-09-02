const Job = require("../models/job");

// CRUD Controllers

//get all jobs
exports.getJobs = (req, res, next) => {
  Job.findAll()
    .then((jobs) => {
      res.status(200).json({ jobs: jobs });
    })
    .catch((err) => console.log(err));
};

//get job by id
exports.getJob = (req, res, next) => {
  const jobId = req.params.jobId;
  Job.findByPk(jobId)
    .then((job) => {
      if (!job) {
        return res.status(404).json({ message: "Job not found!" });
      }
      res.status(200).json({ job: job });
    })
    .catch((err) => console.log(err));
};

//create job
exports.createJob = (req, res, next) => {
  const jobTitle = req.body.jobTitle;
  const jobDescription = req.body.jobDescription;
  const companyName = req.body.companyName;
  const companyContact = req.body.companyContact;
  const appliedVia = req.body.appliedVia;
  const status = req.body.status;
  const remarks = req.body.remarks;
  const open = req.body.open;
  const feedback = req.body.feedback;
  Job.create({
    jobTitle,
    jobDescription,
    companyContact,
    companyName,
    appliedVia,
    status,
    remarks,
    open,
    feedback,
  })
    .then((result) => {
      console.log("Created Job");
      res.status(201).json({
        message: "Job created successfully!",
        job: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//update job
exports.updateJob = (req, res, next) => {
  const jobId = req.body.jobId;
  const jobTitle = req.body.jobTitle;
  const jobDescription = req.body.jobDescription;
  const companyName = req.body.companyName;
  const companyContact = req.body.companyContact;
  const appliedVia = req.body.appliedVia;
  const status = req.body.status;
  const remarks = req.body.remarks;
  const open = req.body.open;
  const feedback = req.body.feedback;
  Job.findByPk(jobId)
    .then((job) => {
      if (!job) {
        return res.status(404).json({ message: "Job not found!" });
      }
      job.jobTitle = jobTitle;
      job.jobDescription = jobDescription;
      job.companyName = companyName;
      job.companyContact = companyContact;
      job.appliedVia = appliedVia;
      job.status = status;
      job.remarks = remarks;
      job.open = open;
      job.feedback = feedback;
      return job.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Job updated!", job: result });
    })
    .catch((err) => console.log(err));
};

//delete job
exports.deleteJob = (req, res, next) => {
  const jobId = req.params.jobId;
  Job.findByPk(jobId)
    .then((job) => {
      if (!job) {
        return res.status(404).json({ message: "Job not found!" });
      }
      return Job.destroy({
        where: {
          jobId: jobId,
        },
      });
    })
    .then((result) => {
      res.status(200).json({ message: "Job deleted!" });
    })
    .catch((err) => console.log(err));
};
