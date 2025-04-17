const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
    },
    description:{
        type:String,
    },
    company_name:{
        type:String,
    },
    location:{
        type: String,
    },
    salary:{
        type:Number,
    },
});


const jobModel = mongoose.model("jobModel", jobSchema);

module.exports = jobModel;