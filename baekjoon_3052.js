const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let N = input.map(input => input % 42);

set = [...new Set(N)];
NewArr = [...set];
console.log(NewArr.length);
