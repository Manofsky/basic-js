const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let strAddition = '';
  let arrAddition = [];
  let arrResult = [];

  if (options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      arrAddition.push(String(options.addition));
    }
    if (options.additionSeparator) strAddition = arrAddition.join(options.additionSeparator);
    else strAddition = arrAddition.join('|');
  } else if (options.addition) strAddition = String(options.addition);


  if (options.repeatTimes) {
    for (let j = 0; j < options.repeatTimes; j++) {
      arrResult.push(str + strAddition);
    }
    if (options.separator) result = arrResult.join(options.separator);
    else result = arrResult.join('+');
  } else result = str + strAddition;

  return result
}

module.exports = {
  repeater
};
