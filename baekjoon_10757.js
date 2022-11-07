let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

var A = parseInt(input[0]);
let B = parseInt(input[1]);

let result = A + B
console.log(result.toString());