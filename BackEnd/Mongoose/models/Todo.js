import mongoose from "mongoose"
const TodoSchema=new mongoose.Schema({
    title:String,
    description:String,
    isDone: Boolean
});
export const Todo=mongoose.model('Todo',TodoSchema);
