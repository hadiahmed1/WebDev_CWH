import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import blog from "./routes/blog.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
app.use(express.static('public'))
app.use('/blog',blog)
const port=3000;
//get post put delete
app.get('/',(req,res)=>{//8192 byte limit
    res.send("<h1>GET REQUEST</h1>");
}).post('/',(req,res)=>{
    res.send("POST REQUEST");
    console.log("post request sucessfull");
}).put('/',(req,res)=>{
    res.send("PUT REQUEST")
})
app.get('/index',(req,res)=>{
    res.sendFile("./Templates/about.html",{root: __dirname})
})
app.get('/api',(req,res)=>{
    res.json({a:1,b:2,c:3, name:['harry','jerry']});
})
app.listen(port,()=>{
    console.log(`Port ${port}`);
})