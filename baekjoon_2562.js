const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let max = input[0];
let N = 0;

for(let i=0; i<9; i++){
    if(max<input[i]) {
        max = input[i];
        N = i;
   }
}
   console.log(max);
   console.log(N + 1);