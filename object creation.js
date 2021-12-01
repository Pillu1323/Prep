// function creator

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const Hardik = new Person('Hardik', 30);
console.log(`We have ${Hardik.name} with ${Hardik.age} age`);
// We have Hardik with 30 age

// ES6 Class

class Car {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const Maruti = new Car('Maruti 800', 'Petrol');
console.log(`We bought ${Maruti.name} & it is ${Maruti.type} model`);
// We bought Maruti 800 & it is Petrol model
