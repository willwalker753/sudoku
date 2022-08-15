// Generate a sudoku puzzle

// Returns an array of rows (top to bottom)
//      Each row has an array of cells (left to right)
//      Cells can be clues (int 1 to 9) or empty (int 0)
export const generatePuzzle = () => {
    const clueCount = 81;

    let rows = _getInitRows();
    let cellCoordList = _getCellCoordList();

    for(let c=0; c<clueCount; c++) {
        rows = _addClue(rows, cellCoordList[c]);
    }








    // need to implement backtracking
        // keep track of the numbers tried for a square
        // if 1-9 doesnt work for a cell, go back and change cells to untried numbers














    return rows;
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

// Returns shuffled array of all cell coordinates
const _getCellCoordList = () => {
    const size = 9;
    let cellCoordList = [];
    for (let r=0; r<size; r++) {
        for (let c=0; c<size; c++) {
            cellCoordList.push({
                row: r,
                col: c
            });
        }
    }
    cellCoordList = _shuffleArr(cellCoordList);
    return cellCoordList;
}

// Handle adding a clue to a cell
// Args
//      row array
//      cellCoord => { row: 5, col: 3 }
const _addClue = (rows, cellCoord) => {
    const clueList = _getRandNumArr();
    const rowIndex = cellCoord.row;
    const colIndex = cellCoord.col;

    for (let c=0; c<clueList.length; c++) {
        if (_isClueValid(rows, rowIndex, colIndex, clueList[c])) {
            rows[rowIndex][colIndex].value = clueList[c];
            return rows;
        }
    }

    console.log("Need to backtrack here: ", rows, rowIndex, colIndex, clueList)
    return rows;
    
}

const _isClueValid = (rows, rowIndex, cellIndex, cellValue) => {
    // check column
    for (let r=0; r<rows.length; r++) {
        if (rows[r][cellIndex].value === cellValue) {
            return false;
        }
    }

    // check row
    for (let c=0; c<rows.length; c++) {
        if (rows[rowIndex][c].value === cellValue) {
            return false;
        }
    }

    // check box
    const { startRow, startCol } = _getBoxCoords(rowIndex, cellIndex);
    for (let r=startRow; r<startRow+3; r++) {
        for (let c=startCol; c<startCol+3; c++) {
            if (rows[r][c].value === cellValue) {
                return false;
            }
        }
    }

    return true;
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

// Returns the box coords for a given cell
const _getBoxCoords = (rowIndex, cellIndex) => {
    const size = 9;
    const startRow = rowIndex - (rowIndex % (size/3));
    const startCol = cellIndex - (cellIndex % (size/3));
    return {
        startRow,
        startCol
    }
}