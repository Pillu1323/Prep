// Adding elements to an array and returning Brand new array
// useCase:  copying an array after you have added new elemets to it
// Concat method allows you to add the elemets at the end of the array

// diff between push and concat is, they both adds elements at the end , but when we add array
// to array, push add that array as a single element but concat retrives all the elements from
// it and adds as individual elements

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const BrandNewArray = arr1.concat(arr2); // concat returns new array
console.log(BrandNewArray); // [ 1, 2, 3, 4, 5, 6 ]

arr1.push(arr2);
console.log(arr1); //[ 1, 2, 3, [ 4, 5, 6 ] ]

const arr3 = arr1.push(arr2); // push returns the length of array
console.log(arr3); //5   ( that has to be 4 check by your end)
