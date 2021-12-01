// for Arrays

// for objects

let user = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

// for ...in

for (let key in user) {
  // keys
  // console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(user[key]); // John, 30, true
}
