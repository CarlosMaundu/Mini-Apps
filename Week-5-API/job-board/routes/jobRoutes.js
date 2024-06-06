const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.get('/jobs', jobController.getJobs);

module.exports = router;
