// I am interested to see if (true && condition2), does condition2 gets executed?

let a = true;
let b = (c, d) => {
  return c + d;
};

if (a && b(3, 5)) {
  console.log('true');
}
