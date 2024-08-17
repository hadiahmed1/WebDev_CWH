console.log("DOM Manipulation")
let b=document.getElementsByClassName("box");
console.log(b);
b[2].style.backgroundColor="#0000ff"
document.getElementById("b2").style.backgroundColor="yellow";
document.querySelector(".box").style.backgroundColor="green";
let boxes=document.querySelectorAll(".box");
boxes.forEach(element => {
    element.style.backgroundColor="pink";
});
let colors=["red","blue","yellow","green","pink","aqua","coral","cyan","crimson","gold"];
    console.log(Math.floor(Math.random()*10))
const assignRandomColour=(element)=>{
    element.style.backgroundColor=colors[Math.floor(Math.random()*10)];
    element.style.color=colors[Math.floor(Math.random()*10)];
}
boxes.forEach(element => {
    assignRandomColour(element);
});
// 
let div=document.createElement("div");
div.innerHTML="Created";
div.setAttribute("class","created");
document.querySelector(".container").append(div);
// 
let cont=document.querySelector(".container");
cont.insertAdjacentHTML("beforebegin", '<b>heyyyy</b>');