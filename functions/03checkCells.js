/* eslint-disable import/prefer-default-export */

export function checkCells(grid) {

    //COPY grid A to grid B
    const gridB = grid.map((x) => [...x])
    

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            /*let myNewCells = new Cell(grid, x, y);*/
            /*console.log(myNewCells);*/

                const state = stateIs(grid, x, y);
                const position = whereIs(x, y);
                const neighbours = neighboursAre(grid, x, y);
                const nextState = whatIsNextState(neighbours,state,x, y,)
                gridB[x][y] = nextState
                /*console.log("state: " + state +" position: "+ position + " neighbours: " + neighbours + " next state: " + nextState)*/
        }
    }


    // (CELL) STATE IS?
    function stateIs(grid, x, y) {
        if (grid[x][y] === 0) {
            return 0;
        } else if (grid[x][y] === 1) {
            return 1;
        }
        return;
    }

    // (CELL) WHERE IS IT?
    function whereIs(x, y) {
        const indexIs = [x, y];
        return indexIs;
    }

    // (CELL) NEIGHBOURS ARE?
    function neighboursAre(grid, x, y) {
        //const SumNeigh = SumLeftRight + SumTop + SumBottom
        const Sum = SumNeighbours(grid, x, y);
        return Sum;
    }

    function SumNeighbours(grid, x, y) {
        let result = 0;

        if (
            x === 0 ||
            x === grid.length - 1 ||
            y === 0 ||
            y === grid[x].length - 1
        ) {
            return (result = grid[x][y]);
        } 
            result =
    
                grid[x - 1][y - 1] +
                grid[x - 1][y] +
                grid[x - 1][y + 1] +
                grid[x][y - 1] +
                grid[x][y + 1] +
                grid[x + 1][y - 1] +
                grid[x + 1][y] +
                grid[x + 1][y + 1];

        return result;
    }

    // (CELL) WHAT WILL BE THE NEXT STATE OF THE CELL?
    function whatIsNextState(neighbours, state) {
        if (state === 0 && neighbours === 3) {

            return 1
        }

        if (state === 1 && (neighbours < 2 || neighbours > 3 )) {

            return 0
        } 


        return state
      
    }


     return gridB;
}
