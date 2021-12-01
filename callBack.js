// simple example for callback
// callback is passed as a function parameter to a function, which is then called inside of
// that function.

// definition
function one(callback) {
  setTimeout(() => {
    console.log('function One');
  }, 1000);

  callback();
}
function two(callback) {
  setTimeout(() => {
    console.log('function two');
  }, 3000);

  callback();
}
function three() {
  console.log('function three');
}

// calling
one(() => {
  two(() => {
    three();
  });
});
// function three
// function one
// function two
