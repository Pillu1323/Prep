var columns = process.argv.slice(2);
let l = +columns[0];
// console.log(l);
let diamond = (l) => {
  let s = '';
  let p = '';
  for (let i = 1; i <= l * 2; i++) {
    if (i <= l) {
      s = '  ';
      for (let j = l; j >= i; j--) {
        s = s + '  ';
      }
      for (let k = 1; k <= i; k++) {
        s = s + ' *  ';
      }
      p += '\n' + s;
    } else {
      s = '';
      for (let j = l; j <= i; j++) {
        s = s + '  ';
      }

      for (let k = l * 2; k >= i; k--) {
        s = s + ' *  ';
      }
      p += '\n' + s;
    }
    s = '';
  }
  console.log(`The Diamond of ${l} columns: \n ${p} \n`);
};

diamond(l);
