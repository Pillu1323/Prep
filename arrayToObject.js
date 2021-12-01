// Removing duplicates from the array

const array = ['🐑', 1, 2, '🐑', '🐑', 3];

// Step 1
const uniqueSet = new Set(array); // arry to Object
// uniqueSet { '🐑', 1, 2, 3 }

// Step 2
const backToArray = [...uniqueSet]; // object to array
// ['🐑', 1, 2, 3]

// Another method:
const array = ['🐑', 1, 2, '🐑', '🐑', 3];

Array.from(new Set(array));

// ['🐑', 1, 2, 3]
