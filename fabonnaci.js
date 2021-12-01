var i;
var fib = []; // Initialize array!

fib[0] = 0;
console.log(fib[0]);
fib[1] = 1;
console.log(fib[1]);
for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
