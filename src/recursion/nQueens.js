function nQueens(n) {
    function solveNQueens(row) {
        if (row === n) {
            // All queens are legally placed.
            result.push([...colPlacement]);
            return;
        }
        for (let col = 0; col < n; col++) {
            // Test if a newly placed queen will conflict with any earlier queens placed before.
            if (
                colPlacement.slice(0, row).every((c, i) => Math.abs(c - col) !== 0 && Math.abs(c - col) !== row - i)
            ) {
                colPlacement[row] = col;
                solveNQueens(row + 1);
            }
        }
    }

    const result = [],
        colPlacement = Array(n).fill(0);
    solveNQueens(0);
    return result;
}




// Import the function (assuming it's defined in a file called queens.js)
// const nQueens = require('./queens');

// Define a function to compare two arrays of arrays
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (!arr1[i].every((val, index) => val === arr2[i][index])) return false;
    }
    return true;
}

// Test cases
const testCases = [
    { n: 1, expected: [[]] },
    { n: 2, expected: [] },
    { n: 3, expected: [] },
    { n: 4, expected: [[1, 3, 0, 2], [2, 0, 3, 1]] },
    { n: 5, expected: [[0, 2, 4, 1, 3],
                       [0, 3, 1, 4, 2], 
                       [1, 3, 0, 2, 4], 
                       [1, 4, 2, 0, 3], 
                       [2, 0, 3, 1, 4], 
                       [2, 4, 1, 3, 0], 
                       [3, 0, 2, 4, 1], 
                       [3, 1, 4, 2, 0], 
                       [4, 1, 3, 0, 2], 
                       [4, 2, 0, 3, 1]
                    ] 
    },
];

// Run test cases
testCases.forEach(({ n, expected }, index) => {
    const result = nQueens(n);
    if (arraysEqual(result, expected)) {
        console.log(`Test case ${index + 1} passed.`);
    } else {
        console.error(`Test case ${index + 1} failed.`);
        console.log('Expected:', expected);
        console.log('Actual:', result);
    }
});
