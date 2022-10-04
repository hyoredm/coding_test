const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i=0; i<input.length-1; i++) {
    let arr = input[i].split(' ');
    let S = Number(arr[0]) + Number(arr[1])
    
    console.log(S);
    
}