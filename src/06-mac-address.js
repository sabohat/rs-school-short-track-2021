/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 01-1B-6m-84-4l-E6, the output should be true.
 *
 */
function validateValue(pair) {
  try {
    parseInt(pair, 16);
  } catch (e) {
    console.log(e);
  }
  console.log();
  return parseInt(pair, 16) === pair;
}

function isMAC48Address(n) {
  const arrayOfPairs = n.split('-');
  arrayOfPairs.forEach((pair) => validateValue(pair));
  console.log(arrayOfPairs);
}

isMAC48Address('01-1L-6m-84-4l-E6');
module.exports = isMAC48Address;
