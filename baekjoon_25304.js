const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let X = parseInt(input[0]);
let N = parseInt(input[1]);
let Sum = 0;

for (let i=2; i<=N+1; i++) {
    let arr = input[i].split(' ');
    let T = Number(arr[0]) * Number(arr[1]);
    Sum += T;
}

if (X == Sum) {
    console.log('Yes');
} else {
    console.log('No');
}
