// Conway's Game of Life
//
// Rules:
//
// a Dead cell with 3 neighbours Becomes alive
// 0 ---> 3 neighbours ---> 1
//
// a Live cell dies if there is less than 2 neighbours
// and more than 3 neighbours.
// 1 ---> <2 ---> 0
//       >3

// Function for (Two Dimensional Array)

function createGrid(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

let cols = 5;
let rows = 5;
let grid;

// create and fill with 0 the array
function setup() {
    grid = createGrid(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
        }
    }
}
setup();

// add live cells on the array
function addLiveCells(arr, x, y, x1, y1, x2, y2) {
    arr[x][y] = 1;
    arr[x1][y1] = 1;
    arr[x2][y2] = 1;
    console.log(arr);
}
addLiveCells(grid, 1, 1, 0, 1, 2, 1);

// check cells
function checkCells() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j] === 1) {
                /*grid.forEach( element =>
                    console.log(element + " it's alive"))*/
                console.log(grid[i][j] + " it's alive");
            } else if (grid[i][j] === 0) {
                /*grid.forEach((element) => console.log(element + " it's death"));*/
                console.log(grid[i][j] + " it's dead");
            }
        }
    }
    return;
}

checkCells();
