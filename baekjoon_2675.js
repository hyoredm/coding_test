let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let test =  Number(input[0]);
let sum = '';

for (let i = 1; i <= test; i++) {
    let cases = input[i].split(' ')[1];
    let num = Number(input[i].split("")[0]);
    for(let j = 0; j < cases.length; j++) {
        for (let k = 0; k < num; k++) {
        sum += cases[j]
        }
    }
    sum += '\n';
}

console.log(sum);