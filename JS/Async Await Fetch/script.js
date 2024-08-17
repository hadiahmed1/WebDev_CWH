async function getData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data=await x.json();
    return data;
}
// console.log("Getting Data");
// let data=getData();
// data.then(()=>{
//     console.log(data);
//     console.log("Process Data")
// })
async function main(){
    console.log("Fetch Data");
    let data=await getData();
    console.log("Data Recieved:",data)
}
main();