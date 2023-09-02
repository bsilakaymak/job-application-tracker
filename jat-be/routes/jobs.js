const controller = require("../controllers/jobs");
const router = require("express").Router();

// CRUD Routes /jobs
router.get("/", controller.getJobs); // /jobs
router.get("/:jobId", controller.getJob); // /jobs/:jobId
router.post("/", controller.createJob); // /jobs
router.put("/:jobId", controller.updateJob); // /jobs/:jobId
router.delete("/:jobId", controller.deleteJob); // /jobs/:jobId
module.exports = router;
