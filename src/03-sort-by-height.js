/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filteredAndSorted = arr.filter((item) => (item !== -1))
    .sort((a, b) => a - b);
  const len = arr.length;
  if (arr.indexOf(-1) === -1) return filteredAndSorted;
  for (let i = 0; i < len; i++) {
    if (arr[i] === -1) {
      filteredAndSorted.splice(i, 0, -1);
    }
  }
  return filteredAndSorted;
}
module.exports = sortByHeight;
