const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const nums = input[1].split(' ').map(Number);

let max = 0;
let score = 0;

for(let i=0; i<count; i++){
    if(max<nums[i]) max = nums[i];
}

for(let j=0; j<count; j++){
    score += (nums[j]/max)*100
}

console.log(score/count);