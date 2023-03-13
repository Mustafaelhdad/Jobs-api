// get all jobs
const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};

// get single job
const getJob = async (req, res) => {
  res.send("get single job");
};

// create a job
const createJob = async (req, res) => {
  res.send("create job");
};

// delete a job
const deleteJob = async (req, res) => {
  res.send("delete a job");
};

// update a job
const updateJob = async (req, res) => {
  res.send("update a job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
};
