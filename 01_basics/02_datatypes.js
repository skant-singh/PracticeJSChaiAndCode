// Primarily only two types of Data- 1.Primitive, 2.Reference

//Primitive- 7 Types-> string, number, boolean, null, undefined, Symbol, bigInt
// Reference type- object, function, array


// number can store a maximum of 2^53  larger than that needs to be stored in bigInt (n should be appended in end to mark as bigInt)
let nullVariable=null;
let undefinedVariable;
let symbolVariable1=Symbol("123");
let symbolVariable2=Symbol("123");
let bigIntVariable=123445579886687667867868758786n;

let arrayVariable=["shashi","Neeraf"];
let functionVariable= function (){
    console.log("Hi I am a function");
}

let objectVariable={
    name:"shashikant"
}

console.table([typeof nullVariable,typeof undefinedVariable,typeof symbolVariable1, symbolVariable1==symbolVariable1,typeof bigIntVariable,
    "value of bigInt variable"+bigIntVariable, typeof arrayVariable, typeof functionVariable,typeof objectVariable
]);


/* ********************** Lets talk about storage of variables in memory ***********************/

// Primitive types --- value stored in stack, on assignment value is copied from assignment to assignee
// Non-Primitive types-- values are stored in heap , on assignment of one variable to other, reference is passed

