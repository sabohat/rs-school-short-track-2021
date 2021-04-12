/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function calculateMines(i, j, matrix) {
  let sum = 0;
  if (matrix[i][j] === true) sum--;
  for (let k = i - 1; k <= i + 1; k++) {
    for (let l = j - 1; l <= j + 1; l++) {
      if (matrix[k] !== undefined && matrix[k][l] !== undefined && matrix[k][l] === true) sum++;
    }
  }
  return sum;
}

function minesweeper(matrix) {
  const linesLength = matrix.length;
  const charsLength = matrix[0].length;
  const newMatrix = [];

  for (let i = 0; i < linesLength; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < charsLength; j++) {
      newMatrix[i].push(calculateMines(i, j, matrix));
    }
  }
  return newMatrix;
}

minesweeper([[true, false, false], [false, true, false], [false, false, false]]);
module.exports = minesweeper;
