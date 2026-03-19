let stringOne="StingOne";
let stringTwo=new String("String1");

console.log(`${typeof stringOne} , ${typeof stringTwo}`);

console.log(stringOne.__proto__);
console.log(stringTwo.__proto__);

// __proto__ used to see functions available with string

let sampleString="My name is shashikant singh, I'm from Jharkhand India";

console.log(sampleString.length);
console.log(sampleString.charAt(0));
console.log(sampleString.substring(0,10));
console.log(`sampleString.includes("shashi"): ${sampleString.includes("shashi")}`);
console.log(`check index of "name" : ${sampleString.indexOf("name")}`);
console.log(`replace first spaces with "-" ${sampleString.replace(" ","-")}`);
console.log(`temporarily replace all spaces with "-" ${sampleString.replaceAll(" ","-")}`);
console.log(`split the string based on "-" ${sampleString.split("-")}`);
