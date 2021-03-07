const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  return tf(arr)
};

function tf(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) continue
    switch (arr[i]) {
      case cmds.dn:
        if (arr.hasOwnProperty(i + 1)) {
          i++
          res.push("discarded")
        }
        break;
      case cmds.dp:
        if (arr.hasOwnProperty(i - 1)) {
          if (res[i - 1] !== "discarded")
            res.pop()
        }
        break;
      case cmds.dbn:
        if (arr.hasOwnProperty(i + 1)) {
          res.push(arr[i + 1])
        }
        break;
      case cmds.dbp:
        if (arr.hasOwnProperty(i - 1)) {
          res.push(res[res.length - 1])
        }
        break;
      default: res.push(arr[i])
    }
  }
  return res.filter(el => el !== "discarded")
}

const cmds = {
  "dn": "--discard-next",
  "dp": "--discard-prev",
  "dbn": "--double-next",
  "dbp": "--double-prev"
}
