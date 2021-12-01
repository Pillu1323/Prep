// in this file we are observing the behavior of this in node

//case 1
console.log(this === global); // false ( still need to chek this )

// // case 2
// function Hero(heroName, realName) {
//   this.realName = realName;
//   this.heroName = heroName;
// }
// const superman = Hero('Superman', 'Clark Kent');
// console.log(superman); // undefined

//case 3
function rajat() {
  console.log(this === global); //true
}
rajat();

//case 4
('use strict');
function rajat() {
  console.log(this === global); //false
}
rajat();
