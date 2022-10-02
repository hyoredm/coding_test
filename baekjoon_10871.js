const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let N = parseInt(input[0].split(' ')[0]);
let X = parseInt(input[0].split(' ')[1]);
let T = '';
let arr = input[1].split(' ');

for (let i=0; i < N; i++) {
     if ( Number(arr[i]) < X) {
        T += Number(arr[i]) + ' ';
    }
}
 console.log(T);