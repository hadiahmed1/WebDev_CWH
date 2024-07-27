let a=parseInt(prompt("Enter 1st Number"))
let b=parseInt(prompt("Enter 2nd Number"))
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Error: Not a Number")
}
let sum=a+b;
try{
    console.log(`Sum= ${sum}*${x}`);
}catch(e){
    console.log("Errrorrr!");
}finally{
    console.log(`Sum=${sum}`);
}