const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let T = parseInt(input[0]);
let Sum = '';

for (let i=1; i<=T; i++) {
    let arr = input[i].split(' ');
    Sum = Number(arr[0]) + Number(arr[1])
    console.log(`Case #${i}: ${Sum}`);
}

