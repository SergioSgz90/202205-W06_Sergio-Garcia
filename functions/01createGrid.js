
// 01 Create Grid A

export function CreateGrid(x, y , val) {
  let arr = Array(x).fill().map(() => Array(y).fill(val));
  return arr
}

