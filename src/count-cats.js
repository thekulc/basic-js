const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return cc(matrix)
};

function cc(matrix) {
  let cats = 0;
  matrix.forEach(c => c.forEach(el => { if (el === "^^") cats++ }))
  return cats
}