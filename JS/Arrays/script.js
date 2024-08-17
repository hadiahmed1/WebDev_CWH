let arr=[1,2,4,6,3,7];
arr.shift();
arr.unshift(10);
delete arr[2];
console.log(arr);
arr2=[7,8,9];
arr.concat(arr2);
arr.forEach((element,index) => {
    console.log(element,index)
});
//MAP
let sqr=arr.map(e=>{
    return e*e;
})
console.log(sqr);

let filt=sqr.filter(e=>{
    if(e<40){
        return true;
    }
    return false;
});
console.log(filt);
const sum=(a,b)=>{
    return a+b;
}
console.log("Sum="+arr.reduce(sum))