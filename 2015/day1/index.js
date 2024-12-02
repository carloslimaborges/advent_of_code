const fs = require('node:fs/promises');

const partOne = (input) => {
    let currentLevel = 0;
    for (let level of input) {
        if (level === '(') currentLevel++;
        if (level === ')') currentLevel--;
    }
    return currentLevel;
};

const partTwo = (input) => {
    let currentLevel = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            currentLevel++;
        }
        if (input[i] === ')') {
            currentLevel--;
        }
        if (currentLevel < 0) {
            return i + 1;
        }
    }
    return -1;
};

console.time('Input Reading Time');
fs.readFile('input.txt', { encoding: 'utf8' }).then((input) => {
    console.timeEnd('Input Reading Time');
    console.log(partOne(input));
    console.log(partTwo(input));
});