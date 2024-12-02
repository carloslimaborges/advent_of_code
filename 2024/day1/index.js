const fs = require('node:fs/promises');

const lineRegex = /^(\d+)\s*(\d+)$/;

const partOne = (input) => {
    console.time('Part One Time');
    const list1 = [];
    const list2 = [];
    let totalDistance = 0;
    input
        .split('\n')
        .forEach((line) => {
            const match = line.match(lineRegex);
            if (match === null) {
                return;
            }
            const [_, number1, number2] = match;
            list1.push(Number(number1));
            list2.push(Number(number2));
        });
    list1.sort();
    list2.sort();
    for (let i = 0; i < list1.length; i++) {
        totalDistance += Math.abs(list1[i] - list2[i]);
    }
    console.timeEnd('Part One Time');
    return totalDistance;
};

const partTwo = (input) => {
    console.time('Part Two Time');
    const list1 = [];
    const list2 = [];
    let similarityScore = 0;
    input
        .split('\n')
        .forEach((line) => {
            const match = line.match(lineRegex);
            if (match === null) {
                return;
            }
            const [_, number1, number2] = match;
            list1.push(Number(number1));
            list2.push(Number(number2));
        });
    for (let i = 0; i < list1.length; i++) {
        similarityScore += list1[i] * list2.filter((num) => num === list1[i]).length;
    }
    console.timeEnd('Part Two Time');
    return similarityScore;
}

// TODO: Read as stream
console.time('Input Reading Time');
fs.readFile('input.txt', { encoding: 'utf8' }).then((input) => {
    console.timeEnd('Input Reading Time');
    console.log(partOne(input));
    console.log(partTwo(input));
});
