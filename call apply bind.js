// As per observation it seems that, call, apply and bind are methods,they attach an object
// with the function.

// "'This' keyword refers to the object from where it was called."

// Call: The call() method invokes a function with a given "this" value and arguments provided
//one by one
var employee1 = { firstName: 'John', lastName: 'Dow' };
var employee2 = { firstName: 'Jimmy', lastName: 'Shergil' };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
  );
}

invite.call(employee1, 'Hello', 'How are you?'); // Hello John Dow, How are you?
invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Shergil, How are you?

// Apply
// Apply: Invokes the function with a given "this" value and allows you to pass in arguments
// as an array
var employee1 = { firstName: 'Disha', lastName: 'Patani' };
var employee2 = { firstName: 'Hema', lastName: 'Malini' };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
  );
}

invite.apply(employee1, ['Hello', 'How are you?']); // Hello Disha Patani, How are you?
invite.apply(employee2, ['Hello', 'How are you?']); // Hello Hema Malini, How are you?

//Bind
// bind: returns a new function, allowing you to pass any number of arguments
var employee1 = { firstName: 'John', lastName: 'Cena' };
var employee2 = { firstName: 'Brock', lastName: 'Lesner' };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1('Hello', 'How are you?'); // Hello John Cena, How are you?
inviteEmployee2('Hello', 'How are you?'); // Hello Brock Lesner, How are you?

//N.B.
/* 
Call and apply are pretty interchangeable. Both execute the current function
 immediately. You need to decide whether it’s easier to send in an array or a comma 
 separated list of arguments. You can remember by treating Call is for comma (separated list) 
 and Apply is for Array.

Whereas Bind creates a new function that will have this set to the first parameter passed to 
bind().
*/
