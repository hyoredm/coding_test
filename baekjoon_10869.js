const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a + b);
console.log(a - b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);