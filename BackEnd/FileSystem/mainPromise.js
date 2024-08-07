import fs from "fs/promises"
let a= await fs.readFile('file.txt');
let b=await fs.appendFile("file.txt","appendig PROMISE");
console.log(a.toString(),b);