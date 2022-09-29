const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let A = parseInt(input[0]);
let star = '';
let X = '';

for (let i = 0; i < A; i++) {
    star += '*';
    X += star + '\n';
}
console.log(X);