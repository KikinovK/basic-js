const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  preChain: [],
  getLength() {
    return this.preChain.length
  },
  addLink(value) {
    this.preChain.push(value)
    return this
  },
  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position) && position > 0 && position < this.preChain.length) {
      this.preChain.splice(position - 1, 1)
      return this
    } else {
      this.preChain=[];
      throw new Error ('You can\'t remove incorrect link!')
    }
  },
  reverseChain() {
    this.preChain.reverse()
    return this
  },
  finishChain() {
    let result = this.preChain.map(elem => `( ${elem} )`).join('~~');
    this.preChain=[];
    return result
  }
};

module.exports = {
  chainMaker
};
