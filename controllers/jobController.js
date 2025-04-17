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
const fetchJob = async (req, res) =>{
    try{
        // Find All the Jobs or filter by methods
        let filterObj = req.query || {};  
       const jobList = await jobModel.find(filterObj);

       // find jobs by Id
    //    const id = req.query.id;
    //    const jobById = await jobModel.findById(id);


    // find generic jobs using findByOne Method
        //const location = req.query.location;
        //const jobByLocation = await jobModel.findByOne({location});

        res.status(200).json({
            success: true,
            message:"Job Fetched Successfully",
            data: jobList,
        });
    }
    catch(err) {
        console.log("error while fetching the jobs", err);
      } 
    
};

// update job controller
const updateJob = async (req, res) =>{
    try{
         // Update the Jobs
       const jobList = await jobModel.find();
        res.status(200).json({
            success: true,
            message:"Job Updated Successfully"
        });
    }
    catch(err) {
        console.log("error while updating the jobs", err);
      } 
};

// delete job controller
const deleteJob = async (req, res) =>{
    try{
        res.status(200).json({
            success: true,
            message:"Job deleted Successfully"
        });
    }
    catch(err) {
        console.log("error while deleting the jobs", err);
      } 
};


module.exports = {createJob, fetchJob, updateJob, deleteJob};