//set: these are the collection of unique values and does not allow duplicate items
//creation of set using new keyword
let names= new Set(["a","b","c","d"])
console.log(names)

//setName.add():- add(), it is used to add elements into the set

names.add("e");
names.add("d");
console.log(names);

//setName.has(): this has() is used to return true is a specified value exist in the set

console.log(names.has("s"));// returns false since the value is not in set.
console.log(names.has("a"));// return true since the value is not in set.