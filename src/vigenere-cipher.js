const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isStraight = true) {
    this.isStraight = isStraight;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let encryptedMessage = '';
    let initialMessage = message.toUpperCase();
    let upKey = key.toUpperCase();
    let countKey = 0;
    // console.log(initialMessage, initialMessage.length)
    for( let i = 0; i < initialMessage.length; i++) {
      const messageChar = initialMessage[i];
      const messageCharIndex = this.alphabet.indexOf(messageChar);
      if (messageCharIndex === -1) {
        encryptedMessage += messageChar;
      } else  {
        const keyChar = upKey[countKey % upKey.length];
        const keyIndex = this.alphabet.indexOf(keyChar);
        encryptedMessage += this.alphabet[(messageCharIndex + keyIndex) % this.alphabet.length];
        countKey++
      }
    }
    if (this.isStraight) {
      return encryptedMessage
    } else {
      return this.reversStr(encryptedMessage);
    }
  }
  reversStr(str) {
    let result = [];
    for(let i = str.length - 1; i >= 0; i--) {
      result += str[i]
    }
    return result
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let decryptedMessage = '';
    let encryptedMessage = message.toUpperCase();
    let upKey = key.toUpperCase();
    let countKey = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage[i];
      const encryptedIndex = this.alphabet.indexOf(encryptedChar);

      if (encryptedIndex === -1) {
        decryptedMessage += encryptedChar
      } else {
        const upKeyChar = upKey[countKey % upKey.length];
        const upKeyIndex = this.alphabet.indexOf(upKeyChar);
        decryptedMessage += this.alphabet[(encryptedIndex - upKeyIndex + this.alphabet.length) % this.alphabet.length];
        countKey++
      }
    }

    if (this.isStraight) {
      return decryptedMessage
    } else {
      return this.reversStr(decryptedMessage);
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
