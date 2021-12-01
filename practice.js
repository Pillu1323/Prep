// My Practice

function Student(name, age) {
  this.name = name;
  this.age = age;
  getInfo = () => {
    console.log(this.name + ' is ' + this.age + ' year old ');
  };
}

const vaibhav = new Student('vaibhav', 31);
// vaibhav.getInfo();
