const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  return ds(sampleActivity)
};

function ds(sampleActivity) {
  try {
    sampleActivity = sampleActivity.trim();
    if (!sampleActivity || typeof (sampleActivity) !== "string" || sampleActivity === "NaN") throw new Error();
    sampleActivity = parseFloat(sampleActivity);
    if (sampleActivity <= 0 || sampleActivity >= 9000 || isNaN(sampleActivity)) throw new Error();
    const t = Math.log(MODERN_ACTIVITY / sampleActivity) / ( 0.693 / HALF_LIFE_PERIOD )
    if (t <= 0 ) throw new Error()
    return Math.ceil(t)
  } catch (error) {
    return false
  }
}
