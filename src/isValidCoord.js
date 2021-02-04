module.exports = function (rec = {}) {
  return rec.lng >= -180 && rec.lng <= 180 && rec.lat >= -90 && rec.lat <= 90
}
