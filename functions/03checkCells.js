/* eslint-disable import/prefer-default-export */

export function checkCells(grid) {
    const beforeGrid = [...grid];
    const nextGrid = [];

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid.length; y++) {
            let myNewCells = new Cell(beforeGrid, x, y, nextGrid);
            console.log(myNewCells);
        }
    }

    // CELL CONSTRUCTOR
    function Cell(array, x, y, newGrid) {
        this.state = stateIs(array, x, y);
        this.position = whereIs(x, y);
        this.neighbours = neighboursAre(array, x, y);
        this.nextState = whatIsNextState(
            this.neighbours,
            this.state,
            this.x,
            this.y,
            
        );
        this.newRender = RenderNext(this.nextState, array, x, y ) 

    }

    // STATE IS?
    function stateIs(array, x, y) {
        if (array[x][y] === 0) {
            return 0;
        } else if (array[x][y] === 1) {
            return 1;
        }
        return;
    }

    //WHERE IS IT?
    function whereIs(x, y) {
        const indexIs = [x, y];
        return indexIs;
    }

    // NEIGHBOURS ARE?
    function neighboursAre(array, x, y) {
        //const SumNeigh = SumLeftRight + SumTop + SumBottom
        const Sum = SumNeighbours(array, x, y);
        return Sum;
    }

    function SumNeighbours(array, x, y) {
        let result = 0;

        if (
            x === 0 ||
            x === array.length - 1 ||
            y === 0 ||
            y === array[x].length - 1
        ) {
            return (result = array[x][y]);
        } else
            result =
                /* array[x][y + 1] +
                array[x][y - 1] +
                array[x + 1][y] +
                array[x - 1][y] +
                array[x - 1][y - 1] +
                array[x + 1][y - 1] +
                array[x - 1][y + 1] +
                array[x + 1][y + 1];*/

                array[x - 1][y - 1] +
                array[x - 1][y] +
                array[x - 1][y + 1] +
                array[x][y - 1] +
                array[x][y + 1] +
                array[x + 1][y - 1] +
                array[x + 1][y] +
                array[x + 1][y + 1];

        return result;
    }

    // WHAT WILL BE THE NEXT STATE OF THE
    function whatIsNextState(neighbours, state, x, y) {
        if (state === 0 && neighbours === 3) {

            return 1
        }

        if (state === 1 && (neighbours < 2 || neighbours > 3 )) {

            return 0
        } 


        return state
      
    }



//RENDER NEXT 
function RenderNext(nextState, x, y, array) {

    
    nextGrid
   
}

    return nextGrid;
}
