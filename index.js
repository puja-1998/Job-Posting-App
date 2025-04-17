const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3000;
const router = require("./routes/jobRoutes")
const mongoose = require('mongoose');


const app = express(); //app fire

// Middleware for data from postman body
app.use(express.json());

// Middleware to use router
app.use("/api/v1",router);
const mongoURL = process.env.MONGODB;

// conneting to mogoose db
mongoose
    .connect(mongoURL)
    .then(() => console.log("connected to the DB successfully"))
    .catch((err) => console.log("error while connecting to the Database", err));



app.listen(port , (err) =>{
    if(err){
        console.log("error while connecting to the server");
    }
    console.log(`server is started on the http://localhost:${port}`);
    
})