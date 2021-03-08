const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  isDirect = true;
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  isValidChar(char) {
    return char.charCodeAt(0) <= 90 && char.charCodeAt(0) >= 65
  }
  prepareMsgKey(message, key) {
    message = message.toUpperCase();
    const keyA = key.padEnd(message.length, key).toUpperCase().split("");
    message.split("").forEach((c, i) => !this.isValidChar(c) ? keyA.splice(i, 0, c) : "")
    return {
      keyP: keyA.join(""),
      messageP: message
    };
  }
  getPosition(char) {
    return Math.abs(65 - char.charCodeAt(0))
  }
  getEncryptedChar(char, keyChar) {
    return this.isValidChar(char) ? String.fromCharCode(65 + ((this.getPosition(keyChar) + this.getPosition(char)) % 26)) : char
  }
  getDecryptedChar(char, keyChar) {
    return this.isValidChar(char) ? String.fromCharCode(65 + ((this.getPosition(char) + 26 - this.getPosition(keyChar)) % 26)) : char
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error();
    const { keyP, messageP } = this.prepareMsgKey(message, key)
    const res = messageP.split("").map((c, i) => this.getEncryptedChar(c, keyP[i])).join("")
    return this.isDirect ? res : res.split("").reverse().join("")
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error();
    const { keyP, messageP } = this.prepareMsgKey(encryptedMessage, key)
    const res = messageP.split("").map((c, i) => this.getDecryptedChar(c, keyP[i])).join("")
    return this.isDirect ? res : res.split("").reverse().join("")
  }
}

module.exports = VigenereCipheringMachine;