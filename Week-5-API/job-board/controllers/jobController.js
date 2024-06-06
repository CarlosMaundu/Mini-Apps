const jobService = require('../services/jobService');

const getJobs = async (req, res) => {
// handle pagination
  const page = req.query.page || 1; 
  try {
    const result = await jobService.fetchJobs(page);
    if (result) {
      res.json(result);
    } else {
      res.status(500).send('Failed to fetch jobs');
    }
  } catch (error) {
    res.status(500).send('Error retrieving jobs');
  }
};

module.exports = { getJobs };
