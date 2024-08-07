// console.log("Heyy");
// var slugify=require("slugify")
// let a=slugify("Th1s is @ $tring");
// console.log(a);
import http from "http"
// const http=require("http");
import fs from "fs";
// const fs=require("fs");
import {pi} from "./myModule.js"
console.log(pi);
import abc from "./myModule.js"
console.log(abc);
const host='127.0.0.1'
const port=3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(`<h1>pi=${pi}</h1>`);
});
server.listen(port,host,()=>{
    console.log(`Server running at http://${host}:${port}`);
})