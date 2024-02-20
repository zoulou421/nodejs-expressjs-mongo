const express=require('express');

const app= express();
app.use((req, res, next)=>{
    console.log("request received");
    next();
});

app.use((req, res, next)=>{
    res.status(201);
    next();
});
app.use((request, response,next)=>{
    response.json({message:"Your request app is sent  successfully!"});
    console.log("Your request app is sent  successfully!")
});
module.exports=app;