async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45);
        },1000);
    });
}
// let a=await sleep();
(async function main(){//IIFE:imediately invoked function expression
    let a=await sleep();
    console.log(a);
})()
// De-Structuring
let [x,y,...rest]=[3,5,7,2,5];
console.log(`x=${x}\ny=${y}\nrest=${rest}`);
let student={
    roll:"cse2021057",
    age:21
}
let {roll,age}=student;
console.log(`${roll}    ${age}`)