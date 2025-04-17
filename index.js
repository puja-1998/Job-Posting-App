const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express(); //app fire

app.get("/", (req, res) => {
    res.send("Hello from server")
});

app.listen(port , (err) =>{
    if(err){
        console.log("error while connecting to the server");
    }
    console.log(`server is started on the http://localhost:${port}`);
    
})