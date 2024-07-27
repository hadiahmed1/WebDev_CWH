// let obj={
//     a:1,
//     b:"Hadi"
// }
// console.log(obj);

// let animal={
//     eat:true
// }
// let rabbit={
//     jumps:true
// }
// rabbit.__proto__=animal;
class Animal{
    constructor(name){
        console.log("Instance of Animal is created");
        this.name=name;
    }
    eats(food) {
        console.log(`${this.name} eat ${food}`);
    }
}
let dog=new Animal("Dog");
class Lion extends Animal{
    constructor(name){
        super(name);
        console.log("I'm a Lion");
    }
    roar(){
        console.log("Rrrr");
    }
}
let l=new Lion("Lionnn");