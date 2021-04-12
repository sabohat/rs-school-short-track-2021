/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const lenOfMatrix = matrix.length;
  const lenOfLines = matrix[0].length;
  let sum = 0;
  for (let i = 0; i < lenOfMatrix; i++) {
    for (let j = 0; j < lenOfLines; j++) {
      if (matrix[i - 1]) {
        if (matrix[i - 1][j] === 0) sum += 0;
        else sum += matrix[i][j];
      } else sum += matrix[i][j];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
