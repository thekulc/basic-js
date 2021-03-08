const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  return rp(str, options);
};

function rp(str, options) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options
  if (str === null) str = "null"
  if (!separator) separator = "+";
  if (!additionSeparator) additionSeparator = "|";
  if (addition) {
    if (addition instanceof String)
      addition = addition.toString();
    if (!additionRepeatTimes) additionRepeatTimes = 1
  }
  else if (addition === null) {
    addition = "null"
  }
  if (!repeatTimes) repeatTimes = 1
  const addA = []
  for (let j = 0; j < additionRepeatTimes; j++) {
    addA.push(addition)
  }
  let resS = str + addA.join(additionSeparator);

  const resA = []
  for (let i = 0; i < repeatTimes; i++) {
    resA.push(resS);
  }
  return resA.join(separator);

}