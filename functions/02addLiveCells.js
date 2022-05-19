// 02 add live cells on the array

export function addLiveCells(arr, x, y, x1, y1, x2, y2, x3, y3, x4, y4) {
    arr[x][y] = 1;
    arr[x1][y1] = 1;
    arr[x2][y2] = 1;
    arr[x3][y3] = 0
    arr[x4][y4] = 0;
    return arr;
}
