let input = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let N = input;
let sum;
let result = 0;

while(true) {

    sum = Math.floor(N/10) + (N % 10);
    N = (N % 10) * 10 + (sum % 10);
    result++;

    if (N === input)
    break;
}

console.log(result);