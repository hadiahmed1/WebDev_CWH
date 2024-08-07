import express from "express";
const app=express();
app.use(express.static('public'))
const port=3000;
//get post put delete
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/name',(req,res)=>{
    res.send("My name is hadi");
})
app.get('/blog',(req,res)=>{
    res.send("This is my blog");
})
app.get(`/blog/:slug`,(req,res)=>{
    res.send(`Intro to ${req.params.slug}`);
    console.log(req.params);
    console.log(req.query)
})
app.listen(port,()=>{
    console.log(`Port ${port}`);
})