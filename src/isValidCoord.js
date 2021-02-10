module.exports = function (lng, lat) {
  return lng >= -180 && lng <= 180 && lat >= -90 && lat <= 90
}
