// // directly
// // using templet literals
// const Book1 = {
//   title: 'Book 1',
//   author: 'John Doe',
//   description: function () {
//     return `this ${this.title} is written by ${this.author}`;   //used template literals here
//   },
// };
// console.log(Book1.description());

// function can be shortHand
// without using template literals
const book2 = {
  title: 'Hare Rama',
  author: 'Sadguru',
  price() {
    // console.log(this); this is reffering to book2
    return this.title + ' is good book by ' + this.author;
  },
};

console.log(book2.price());
// `this ${this.title} book written by ${this.author} is free`

// IMP
// (() => {foo: 1})() // this will return undefined.
// 'foo: 1' is interpreted as a statement composed of a label and the literal 1
// Mala Asa Vatata : if we are going to return a single object, better to wrap it with ()

// the correct way should be wrapping it with parenthesis
// (() => ({foo: 1}))() // returns Object {foo: 1}
