// Generate a sudoku puzzle

// Returns an array of rows (top to bottom)
//      Each row has an array of cells (left to right)
//      Cells can be clues (int 1 to 9) or empty (int 0)
export const generatePuzzle = () => {
    let rows = _getInitRows();
    console.log(rows)
    rows = _addClue(rows);
}

// Returns the initial rows data
const _getInitRows = () => {
    let row = [];
    for (let i = 0; i < 9; i++) {
        row.push({
            value: 0
        });
    }
    let rowsInit = [];
    for (let i = 0; i < 9; i++) {
        const rowClone = structuredClone(row)
        rowsInit.push(rowClone);
    }
    return rowsInit;
}

// Handle adding a clue to a pseudorandom empty cell
const _addClue = (rows) => {
    // This is temp, Need to figure out what to do after it runs out of attempts
    for (let attempts = 0; attempts < 100; attempts++) {
        const { rowIndex, cellIndex } = _getRandEmptyCell(rows);
        console.log(rowIndex, cellIndex)
        console.log(_getRandNumArr())
    }

    return rows;
}

const _isClueValid = (rows, rowIndex, cellIndex, cellValue) => {

}

// Returns the row and cell index of a pseudorandom empty cell
const _getRandEmptyCell = (rows) => {
    // Need to figure out what to do if attempts is greater than 1000
    // Or better yet, just keep track of what coordinates are empty, and just randomly select one of those
    for (let attempts = 0; attempts < 1000; attempts++) {
        const rowIndex = _getRandNum() - 1;
        const cellIndex = _getRandNum() - 1;
        if (rows[rowIndex][cellIndex].value === 0) {
            return { rowIndex, cellIndex };
        }
    }

}

// Returns a pseudorandom number from 1 to 9
const _getRandNum = () => {
    return Math.ceil(Math.random() * 9);
}

// Returns an array of numbers 1 to 9 in a pseudorandom order
const _getRandNumArr = () => {
    const numArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    const numArrShuffled = _shuffleArr(numArr);
    return numArrShuffled;
}

// Randomize array order using Fisher-Yates Shuffle
const _shuffleArr = (arr) => {
    for (let i=arr.length; i > 0; i--) {
        const randI = Math.floor(Math.random() * i);
        [arr[i - 1], arr[randI]] = [
            arr[randI], arr[i - 1]
        ];
    }
    return arr;
}