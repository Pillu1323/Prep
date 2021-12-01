// indexOf (element)
// this will return the indexof the FIRST element present inside of an array. It searches
// from LEFT whereas "lastIndexOf" searches from RIGHT.

let a = [33, 43, 54, 79, 89, 43];
console.log(a.indexOf(43)); // 1
console.log(a.lastIndexOf(43)); //5
console.log(a[0]); // 33
// it can also store the index of in an varible
let b = a.indexOf(43);
console.log(b);
