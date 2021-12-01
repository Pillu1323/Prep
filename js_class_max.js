// creating object with the help of class constructor
// ES 6
class human {
  constructor() {
    this.gender = 'Male';
  }
  getGender = function () {
    console.log('It is male');
  };
}

class Max extends human {
  constructor() {
    super();
    this.name = 'max';
  }
  getName() {
    console.log(' It has a name Maxwell');
  }
}
const Person = new Max();
Person.getName();
Person.getGender();
