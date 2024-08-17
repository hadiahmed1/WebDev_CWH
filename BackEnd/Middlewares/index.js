import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();

app.use(express.static('public'))
// MW1
app.use((req,res,next)=>{
    console.log("MW1");
    fs.appendFileSync("file1.txt",`${Date.now()} is a ${req.method}\n`)
    next();
})
// MW2
app.use((req,res,next)=>{
    console.log("MW2");

    next();
})
const port=3000;
app.get('/',(req,res)=>{
    res.send("<h1>HOME</h1>");
})

app.listen(port,()=>{
    console.log(`Listening to Port ${port}`);
})