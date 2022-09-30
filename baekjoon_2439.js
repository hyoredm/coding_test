const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let A = parseInt(input[0]);
let star = '';

for (let i = 0; i < A; i++) {
    for (let j = 0; j < A - i - 1; j++) {
        star += ' ';
    }

    for (let k = 0; k <= i; k++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);