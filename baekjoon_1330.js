var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
let A = parseInt(input[0]);
let B = parseInt(input[1]);

if (A > B) {
    console.log('>');
} else if (A < B) {
    console.log('<');
} else {
    console.log('==');
}