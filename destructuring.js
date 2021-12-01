// Destructuring allows you to easily extract "array" elements or "object properties" & store
// them in variables

// Destructuring allows you to pull single element or properties & store them in variables

// Array
[Vaibhav, Pillu] = ['Vaibhav Loves Pillu', 'Pillu Loves Vaibhav'];
console.log(Vaibhav); // Vaibhav Loves Pillu
console.log(Pillu); // Pillu Loves Vaibhav

const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3); // 1 3

// Object
const { name, age, sex, Score } = {
  name: 'Vaibhav',
  age: 31,
  sex: 'Male',
  Score: 100,
};
console.log(name, age, sex); // Vaibhav 31 Male
console.log(Score); // Undefined , as we are not pullinng out the Score.
