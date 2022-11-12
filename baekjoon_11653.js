const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

  let num = Number(input);
  let x = 2;
  while (num > 1) {
    let temp = num % x;
    if (temp == 0) {
      console.log(x);
      num = num / x;
    } else {
      x++;
    }
  }