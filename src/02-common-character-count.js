/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// Press Ctrl+Enter to run the highlighted action
// Press Ctrl+Shift+Enter for debug.
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let sum = 0;
  arr1.forEach((char) => {
    const index = arr2.indexOf(char);
    if (index !== -1) {
      sum++;
      arr2.splice(index, 1);
    }
  });
  return sum;
}

module.exports = getCommonCharacterCount;
