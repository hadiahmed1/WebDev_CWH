import express from "express";
const router=express.Router();
router.get('/',(req,res)=>{
    res.send(`This is a BLOG`)
})
router.get('/blogpost:slug',(req,res)=>{
    res.send(` Blog of ${req.params.slug}`)
})
export default router;