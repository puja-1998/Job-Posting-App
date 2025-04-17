const express = require('express');
const router = express.Router();
const {createJob, fetchJob, updateJob, deleteJob} = require("../controllers/jobController"); //using destructure it
//const jobControllers = require("../controllers/jobController");  // or this way also i can use it


router.get("/", (req, res) => {
    res.send("Hello from server")
});

//create-job API 
router.post("/create-job", createJob);

// retrive/fetched job API 
router.get("/jobs", fetchJob);

//upadte / put job API 
router.put("/update-job", updateJob);

//delete job API 
router.delete("/delete-job", deleteJob);


module.exports = router;