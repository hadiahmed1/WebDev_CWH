import mongoose from "mongoose"
import express from "express"
import {Todo} from "./models/Todo.js"
let conn= await mongoose.connect("mongodb://localhost:27017/todo")
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    const todo=new Todo({title:"First Todo",description:"Created a todo app",isDone: false})
    todo.save();
    res.send("hello world")
})
app.get('/a',async(req,res)=>{
    let a=await Todo.findOne({})
    res.json({title:a.title,description:a.description,isDone:a.isDone})
})
app.listen(port,()=>{
    console.log("Port="+port)
})
