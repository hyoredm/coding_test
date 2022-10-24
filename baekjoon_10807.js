let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let num = Number(input[0]);
let x = Number(input[2]);
let count = 0;

for (let i = 0; i < num; i++) {
    let N = input[1].split(' ');
  if(x === Number(N[i])) {
    count++;
  }
}

console.log(count);