// This is ES6 feature
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary = () => {
    return `This ${this.title} is written by ${this.author} in the year ${this.year}`;
  };
}

// instantiate object
const Book1 = new Book('Hare Ram', 'vaibhav', 2021);
console.log(Book1.getSummary());
