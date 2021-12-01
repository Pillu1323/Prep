// foreach does not return anything, so we do not need to store it into new array,
// this works very similary to a for loop but it going to take a funciton instead
// It makes working with arrays where you nee to loop over them so much easier since we do not
// need to write down the for loop syntax

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
  { name: 'Phone', price: 500 },
];

items.forEach((item) => {
  console.log(item.name);
});

// output
/* 
Bike
TV
Album
Book
Computer
Keyboard
Phone */
