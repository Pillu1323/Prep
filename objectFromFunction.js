// I don't know exactly but I guess objects can be constructed using function creators
//https://www.youtube.com/watch?v=vDJpGenyHaA time :17:31

// constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// using prototype to avoid the repetative code
Book.prototype.getSummary = function () {
  return `This ${this.title} is written by ${this.author} in the year ${this.year}`;
};

// instantiate an object based upon the function Book
const Book1 = new Book('BhagwatGeeta', 'ShriKrushna', 5000);
const Book2 = new Book('Bible', 'Yeshu', 2000);

console.log(Book2.getSummary());
