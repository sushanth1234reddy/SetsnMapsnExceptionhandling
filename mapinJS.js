//Map : it is a collection of unique key-Value pair used to store unique values
//does not allow duplicate values.
//map creation using the new .
let inp=new Map([["a",1],["b",2],["c",3]]);
console.log(inp);

//Set(): to add new values to the Map.
inp.set("d",10);
inp.set("a",1);
inp.set("x",50);
console.log(inp)

//get(): used to retrive the value with help if keya

console.log(inp.get("a"));
console.log(inp.get("x"));