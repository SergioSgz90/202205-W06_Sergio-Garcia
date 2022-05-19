import { CreateGrid } from "./functions/01createGrid.js";
import { addLiveCells } from "./functions/02addLiveCells.js";
import { checkCells} from "./functions/03checkCells.js"
//import {sumNeighbours} from"./functions/05SumNeighbours.js"


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


const cols = 5
const rows = 5
const fill = 0

// 01 Create the Grid A

const gridA = new CreateGrid(cols, rows, fill) 


// 02 Fill the Grid with Live Cells

addLiveCells(gridA, 1, 2, 2, 2, 3, 2, 1, 3, 2, 3 )
console.table(gridA);

// 03 Check Cells and Return new Array

const gridB = checkCells(gridA)
console.table(gridB)
  