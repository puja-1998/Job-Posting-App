const jobModel = require("../models/jobModel");

// create job controller
const createJob = async (req, res) =>{
try{
    let jobObj = req.body;
    await jobModel.create(jobObj);  // created DB
    res.status(200).json({
        success: true,
        message:"Job Created Successfully"
    });
}
  catch(err) {
    console.log("error while creating the jobs", err);
  } 
};

// fetch job controller
const fetchJob = (req, res) =>{
    res.status(200).json({
        success: true,
        message:"Job Fetched Successfully"
    });
};

// update job controller
const updateJob = (req, res) =>{
    res.status(200).json({
        success: true,
        message:"Job Updated Successfully"
    });
};

// delete job controller
const deleteJob = (req, res) =>{
    res.status(200).json({
        success: true,
        message:"Job deleted Successfully"
    });
};


module.exports = {createJob, fetchJob, updateJob, deleteJob};