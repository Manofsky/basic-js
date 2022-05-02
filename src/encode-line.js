const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = '';
  let arr = str.split('');
  let subArr = [];
  subArr.push(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      subArr.push(arr[i]);
      if (i === (arr.length - 1)) {
        encodedStr = encodedStr + subArr.length + subArr[0];
      }
    } else {
      if (subArr.length > 1) {
        encodedStr = encodedStr + subArr.length + subArr[0];
        subArr = [];
        subArr.push(arr[i]);
        if (i === (arr.length - 1)) {
          encodedStr = encodedStr + arr[i];
        }
      }
      else {
        if (arr[i] !== arr[i + 1]) {
          encodedStr = encodedStr + arr[i];
        }
        subArr = [];
        subArr.push(arr[i]);
      }
    }
  }
  return encodedStr;
}

module.exports = {
  encodeLine
};
