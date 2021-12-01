// class constructor

// properties are variables and methods are the functions
// properties need not to be initialised  with constructor, hence we also need not to call super
// Methods are treated as that of properties with arrow function
// if we want to use any property inside of method we have to use this

class human {
  gender = 'male';
  getName = () => console.log('He is vaibhav & he is ' + this.gender);
}

class vaibhav extends human {
  name = 'Vaibhav';
  love = () => console.log('he loves Pillu very much');
}

const Vaibhav = new vaibhav();
Vaibhav.getName(); //He is vaibhav & he is male
Vaibhav.love(); //he loves Pillu very much

//Q
// 1. How do we pass args to class???
// https://hackernoon.com/the-constructor-is-dead-long-live-the-constructor-c10871bea599
