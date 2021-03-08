const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  lvl = []
  
  calculateDepth(arr, depth = 0) {
    if (depth === 0) this.lvl = []
    if (Array.isArray(arr)) {
      depth++
      this.lvl.push(depth)
      arr.forEach(el => this.calculateDepth(el, depth))
    }
    depth--
    return Math.max(...this.lvl)
  }

};
