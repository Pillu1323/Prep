// Object of Protos:
const BookProtos = {
  getSummary: function () {
    return `This ${this.title} is written by ${this.author} in the year ${this.year}`;
  },
};

// Create object
const Book1 = Object.create(BookProtos);
Book1.title = 'Book one';
Book1.author = 'John Doe';
Book1.year = '2013';

console.log(Book1);
