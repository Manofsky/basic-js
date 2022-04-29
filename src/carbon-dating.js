const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let natLog = Math.log(sampleActivity / MODERN_ACTIVITY);
  let result = Math.ceil(Math.abs((natLog * HALF_LIFE_PERIOD) / 0.693));
  if (typeof sampleActivity === 'string' && sampleActivity > 0 && sampleActivity <= 15 && arguments.length > 0) {
    return result
  } else return false
}

module.exports = {
  dateSample
};
