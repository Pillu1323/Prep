// generators are the functions that can be paused and resumed as many times we like,
// each pause it can yield a value back, if resumed it can yield another value back

function* g1() {
  console.log('hello');
  yield 'Yield 1 ran...';
  console.log('world');
  yield 'yield 2 ran...';
  return 'Returned ...';
}

var g = g1();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

// https://www.youtube.com/watch?v=dcP039DYzmE
