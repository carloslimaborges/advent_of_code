const fs = require('node:fs/promises');

let reportCount = 0;

const isSafe = (reportString) => {
    reportCount++;
    if (!/\d/.test(reportString)) return false;
    const report = reportString.split(" ");
    let lastDirection = 0;
    for (let i = 1; i < report.length; i++) {
        const difference = Number(report[i]) - Number(report[i - 1]);
        const absDiff = Math.abs(difference);
        if (absDiff === 0 || absDiff > 3) {
            console.debug(`Report ${reportCount}: ${reportString} is NOT safe due to ABS DIFF`);
            return false;
        }
        if (i === 1 && lastDirection === 0) {
            lastDirection = Math.sign(difference);
            continue;
        }
        if (Math.sign(difference) !== lastDirection) {
            console.debug(`Report ${reportCount}: ${reportString} is NOT safe due to DIRECTION CHANGE`);
            return false;
        }
    }
    console.debug(`Report ${reportCount}: ${reportString} is safe`);
    return true;
};

const partOne = (input) => {
    const reports = input.split("\n");
    console.log(`Found ${reports.length} reports`);
    return reports.filter(isSafe).length;
};

console.time('Input Reading Time');
fs.readFile('input.txt', { encoding: 'utf8' }).then((input) => {
    console.timeEnd('Input Reading Time');
    console.log(partOne(input));
});