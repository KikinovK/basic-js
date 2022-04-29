const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

   for (let domain of domains) {
     let namesArray = domain.split('.').reverse();
     let domainName = '';
     for (let name of namesArray) {
      domainName += `.${name}`;
      if(result[domainName]) {
        result[domainName] += 1;
      } else {
        result[domainName] = 1
      }
     }
   }
   return result;
}

module.exports = {
  getDNSStats
};
