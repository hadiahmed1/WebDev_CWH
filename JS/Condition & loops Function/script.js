let a=17;
if(a>18){
    console.log("VOTE!!");
}else if(a==17){
    console.log("Wait for 1 Year!");
}else{
    console.log("Not Eligible")
}
for (let i = 0; i < 5; i++) {
    console.log(`i=${i}`)
}
let student={
    name:"Hadi",
    age:21,
    graduate:false
}
for (const key in student) {
console.log(key+" "+student[key])
}
checkAge=(age)=>{
    if(age>=18){
        console.log("VOTE!!");
    }else if(age==17){
        console.log("Wait for 1 Year!");
    }else{
        console.log("Not Eligible")
    }
    return "Return";
}
console.log(checkAge(12));
checkAge(17);
checkAge(18);
checkAge(25);

function chekPrime(num) {
    let isPrime=true;
    for (let i = 2; i < Math.sqrt(num)+1; i++) {
        if(num%i==0){
            isPrime=false;
            break;
        }
    }    
    return isPrime;
}
for(let i=1;i<100;i++){
    (chekPrime(i))?(console.log(i)):console.log();
}

