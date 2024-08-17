import fs from "fs/promises";
import fsn from "fs";
import path from "path";
const parentFolderPath = './Clutter'; 
let files=await fs.readdir(path.join(process.cwd(), parentFolderPath));
let extensions=[];
for (const file of files) {
    let ext=file.split(".")[file.split.length-1];
    console.log(ext);
    if(fsn.existsSync(path.join(parentFolderPath, ext))){
        await fs.rename(path.join(parentFolderPath, file), path.join(parentFolderPath, ext, file));
    }else{
        await fs.mkdir(path.join(parentFolderPath,ext));
        await fs.rename(path.join(parentFolderPath, file), path.join(parentFolderPath, ext, file));
    }
}