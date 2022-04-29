const {NotImplementedError} = require('../extensions/index.js');

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

  function repeat(str = '', separator = '', repeatTimes = 1) {
    let result = '';
    for (let i = 1; i <= repeatTimes; i++) {
      result += str + (i === repeatTimes
        ? ''
        : separator)
    }
    return result
  }

  return repeat((str + repeat(options.addition,
    options.additionSeparator
      ? options.additionSeparator
      : '|', options.additionRepeatTimes)), options.separator
      ? options.separator
      : '+', options.repeatTimes)
}

module.exports = {
  repeater
};
