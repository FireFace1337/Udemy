//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 6;
let result = '';

for (let i = 1; i <= lines; i++) {
    for (let j = lines; j > i; j--) {
        result += ' ';
    }
    result += '*'.repeat(i * 2 - 1) + '\n';
}

console.log(result);