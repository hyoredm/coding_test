var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
let S = parseInt(input[0]);

if (90<=S && S<=100) {
    console.log("A");
} else if(80<=S && S<=89) {
    console.log("B");
} else if(70<=S && S<=79) {
    console.log("C");
} else if(60<=S && S<=69) {
    console.log("D");
} else {
    console.log("F");
}