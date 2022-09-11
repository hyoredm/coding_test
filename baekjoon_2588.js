const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const a = parseInt(input[0]);
const b = parseInt(input[1]);

const one = b % 10;
const ten = Math.floor((b % 100) / 10);
const hundred = Math.floor(b / 100);

console.log(a * one);
console.log(a * ten);
console.log(a * hundred);
console.log(a * b);