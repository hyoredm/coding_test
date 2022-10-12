let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);

for(let i = 1; i <= count; i++) {
    let sum = 0;
    let score = input[i].split(' ');
    let scorecount = Number(score[0]);

    for(let j = 1; j <= scorecount; j++) {
        sum += Number(score[j]);
    }
        let student = 0;
        let average = sum / scorecount;

        for (let k = 1; k <= scorecount; k++) {
        if(score[k] > average) {
            student++;
        }
    }
    let percent = (student/scorecount*100).toFixed(3);
    console.log(percent + '%');
}