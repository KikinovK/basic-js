const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date) {
    if (!(date instanceof Date)
      || date.getDay !== Date.prototype.getDay
      || Object.keys(date).length > 0) {
      throw new Error ('Invalid date!')
    } else {
      const month = date.getMonth();
      let result
      switch (true) {
        case month === 11 || month === 0 || month === 1 :
          result = 'winter';
          break;
        case month === 2 || month === 3 || month === 4 :
          result = 'spring';
          break;
        case month === 5 || month === 6 || month === 7 :
          result = 'summer';
          break;
        case month === 8 || month === 9 || month === 10 :
          result = 'autumn';
          break;
      }
      return result;
    }
  } else {
    return 'Unable to determine the time of year!'
  }
}

module.exports = {
  getSeason
};
