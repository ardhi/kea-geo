const ddToDms = require('./ddToDms')

module.exports = function (val, secPrecision) {
  const dms = ddToDms(val, secPrecision)
  if (dms.substr(0, 1) === '-') return dms.substr(1) + ' S'
  return dms + ' N'
}
