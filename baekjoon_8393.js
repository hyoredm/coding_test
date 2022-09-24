let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
let N = 0;

for (let i=1; i<=input[0]; i++) {
    N += i;
}

console.log(N);