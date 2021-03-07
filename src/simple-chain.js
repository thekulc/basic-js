const CustomError = require("../extensions/custom-error");

const chainMaker = {
  cArr: [],
  finished: { is: false },
  getLength() {
    return this.cArr.length;
  },
  addLink(value) {
    if (this.finished.is) {
      this.cArr = []
      this.finished.is = false
    }
    if (value === null) {
      this.cArr.push("null")
      return this
    }
    if (typeof(value)==="boolean"){
      this.cArr.push(value ? "true" : "false");
      return this
    }
    if (typeof(value) === "number" && isNaN(value)){
      this.cArr.push("NaN");
      return this
    }
    if (value || value === 0)
      this.cArr.push(value.toString())
    else
      this.cArr.push("")
    return this
  },
  removeLink(position) {
    if (!position || !this.cArr.hasOwnProperty(position - 1)) {
      this.finished.is = true
      throw new Error("")
    }
    this.cArr.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.cArr.reverse();
    return this
  },
  finishChain() {
    this.finished.is = true;
    return this.cArr.map(el => `( ${el} )`).join("~~");
  }
};

module.exports = chainMaker;