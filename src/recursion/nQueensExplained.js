/*
function isSafe(colPlacement, row, col){
                // Check if the new queen conflicts with any earlier queens in the same column
                // or in any diagonal positions
    return colPlacement.slice(0, row).every((c, i) => Math.abs(c - col) !== 0 && Math.abs(c - col) !== row - i)
}
function isSafe(board, row, col) {
    // Check this row on the left side
    for (let i = 0; i < col; i++) {
        if (board[row][i]) {
            return false;
        }
    }

    // Check upper diagonal on the left side
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) {
            return false;
        }
    }

    // Check lower diagonal on the left side
    for (let i = row, j = col; j >= 0 && i < board.length; i++, j--) {
        if (board[i][j]) {
            return false;
        }
    }

    return true;
}
*/
function isSafe(colPlacement, row, col) {
    // Check if the new queen conflicts with any earlier queens in the same column
    // or in any diagonal positions
    return colPlacement.slice(0, row).every((c, i) => {
        // Check if the new queen is in the same column or on the same diagonal
        return Math.abs(c - col) !== 0 && Math.abs(c - col) !== row - i;
    });
}

function nQueens(n) {
    // Define a recursive function to solve the N-Queens problem
    function solveNQueens(row) {
        // If all queens are placed legally, add the current placement to the result
        if (row === n) {
            // All queens are legally placed. Finished ?
            result.push([...colPlacement]);
            return;
        }
        // Iterate through each column in the current row
        for (let col = 0; col < n; col++) {
            // Test if a newly placed queen will conflict with any earlier queens
            // placed before.
            if (isSafe(colPlacement, row, col)) {
                // If no conflicts are found, place the queen in the current column
                colPlacement[row] = col;
                // Recursively solve for the next row
                solveNQueens(row + 1);
            }
        }
    }

    // Initialize an empty array to store the solutions
    const result = [],
        // Initialize an array to represent the column placement of queens in each row
        colPlacement = Array(n).fill(0);
    // Start the recursive solving process from the first row
    solveNQueens(0);
    // Return the array of solutions
    return result;
}



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
