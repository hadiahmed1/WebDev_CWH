import fs from "fs";
fs.writeFileSync("file.txt","Hadi Ahmed");//blocks thread not good
fs.writeFile("file2.txt","File 2",()=>{
    console.log("Done");
})
fs.appendFile("file.txt"," appending text",(d,e)=>{
    console.log(d);
})
console.log("End");