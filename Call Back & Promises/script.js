console.log("Before set Time out");
setTimeout(() => {
    console.log("IN SET TIME OUT");
},500);
console.log("After set Time out");

console.log("PROMISE:");
let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        resolve("Success");
    }else{
        reject("Faliure1");
    }
})

let prom2=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        resolve("Success2");
    }else{
        reject("Faliure2");
    }
})

let p3=Promise.all([prom1,prom2]).then((a)=>{
    console.log("Success",a);
}).catch((err)=>{
    console.log("Faliure:",err);
})