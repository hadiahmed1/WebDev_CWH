let btn=document.getElementById("btn");
let cont=document.querySelector(".container");
btn.addEventListener("click",()=>{cont.innerHTML=`Button was clicked`})
btn.addEventListener("dblclick",()=>{
    cont.innerHTML=`Button was double clicked`;
})