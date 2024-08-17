/*
30% of time
+ -> -
* -> +
- -> /
/ -> **
*/
const prompt=require("prompt-sync")();
let n1=prompt("n1=");
let n2=prompt("n2=");
let op=prompt("Operator=");
let random=Math.random();
//faulty
if(random<0.5){
    if(op=="+"){
        op="-";
    }else if(op=="*"){
        op="+";
    }else if(op=="-"){
        op="/";
    }else if(op=="/"){
        op="**";
    }
}
console.log(eval(n1+op+n2))
