const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let N = input

for (let i = 0; i < input.length; i++) {
    N[i] = N[i] % 42;
}

set = [...new Set(N)];
NewArr = [...set];
console.log(NewArr.length);
