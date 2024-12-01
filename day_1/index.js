const fs = require('node:fs/promises');

const lineRegex = /^(\d+)\s*(\d+)$/;

const partOne = (input) => {
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
    return totalDistance;
};

// TODO: Read as stream
fs.readFile('input.txt', { encoding: 'utf8' }).then((input) => {
    console.log(partOne(input));
});
