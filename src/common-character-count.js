const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let arr = s1.split('');
  arr.forEach(function (item, index) {
    let match = s2.indexOf(item);
    if (match >= 0) {
      ++result;
      s2 = s2.replace(arr[index], '')
    }
  }
  )
  return result;
}

module.exports = {
  getCommonCharacterCount
};