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

// Magazine constructor
function Magzine(title, author, year, month) {
  Book.call(this, author, title, year);
  this.month = month;
}

// Inherit the prototype
Magzine.prototype = Object.create(Book.prototype);

// if we want to use the magazine prototype then,
// Magzine.prototype.constructor = Magzine;
// instantiate magazine object
const Mag1 = new Magzine('Mag one', 'John Doe', '2019', 'Jan');
console.log(Mag1.getSummary());
