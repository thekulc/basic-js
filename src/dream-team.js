const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return cd(members)
};

function cd(members) {
  try {
    if (!members || !Array.isArray(members) || members.length <= 0) throw new Error()
    const res = members.map(m => {
      if (typeof (m) !== "string" || !m.trim()) return "";
      return m.trim()[0];
    }).sort((a, b) => a.localeCompare(b)).join("").toUpperCase();
    return res ? res : false
  } catch (error) {
    return false
  }
}