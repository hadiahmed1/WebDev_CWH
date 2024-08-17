// Combine adjective
// Adj: crazy amazing fire
//shop: food garments motors
// word ltd hub org
let str="";
concatRandom=(a,b,c)=>{
    rand=Math.floor(Math.random()*(3)+1);
    if(rand==1){
        str+=a;
    }else if(rand==2){
        str+=b;
    }else{
        str+=c;
    }
}
concatRandom("crazy","amazing","fire");
concatRandom(" food"," garments"," motors");
concatRandom(" org"," ltd"," hub");
console.log(str);