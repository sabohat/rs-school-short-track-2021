/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function returnNumberList(array) {
  const list = [];
  const len = array.length;
  for (let i = 0; i < len; i++) {
    const newArray = [...array];

    const filteredArray = Number([...newArray.slice(0, i), ...newArray.slice(i + 1, len)].join(''));
    list.push(filteredArray);
  }
  return list;
}

function deleteDigit(number) {
  const numberToStringArray = number.toString()
    .split('');
  const max = returnNumberList(numberToStringArray);
  max.sort((a, b) => a - b);

  return max[max.length - 1];
}

module.exports = deleteDigit;
