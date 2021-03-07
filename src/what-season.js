const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  return gs(date)
};

function gs(date) {
  if (!date) return "Unable to determine the time of year!";
  if (!(date instanceof Date) || isNaN(date.getTime())) throw new Error("");
  let mNum = date.getMonth()
  return seasondDict[mNum.toString()]
}

const seasondDict = {
  "0": 'winter',
  "1": 'winter',
  "2": 'spring',
  "3": 'spring',
  "4": 'spring',
  "5": 'summer',
  "6": 'summer',
  "7": 'summer',
  "8": 'autumn',
  "9": 'autumn',
  "10": 'autumn',
  "11": 'winter',
}