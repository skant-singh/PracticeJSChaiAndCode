// Hash map

let map=new Map();
map.set(1,"Person1");
map.set(2,"Person2");
map.set(3,"Person3");

console.log(map.keys());
console.log(map.entries());
console.log(map.entries());

console.log(map.has(1));
console.log(map.has(4));

map.delete(3);

console.log(map.entries());

map.forEach((v,k)=>{
    console.log(`key ${k} : ${v}`);
})


let str="Automation";
let chMap=new Map();

for(let ch of str){
    if(chMap.has(ch)){
        chMap.set(ch,chMap.get(ch)+1);
    }else{
        chMap.set(ch,1);
    }
}

for(let [k,v] of chMap.entries()){
    console.log(`key ${k} :${v}`);
}



/* ----------------------------Set-------------------------------------------------------------- */

let set =new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(1);

console.log(set);
console.log(set.values());
console.log(set.entries());
console.log(set.delete(4));
set.forEach((v)=>{
    console.log(v);
})