module.exports = function (lng, lat, bounds) {
  if (lng.length) {
    bounds = lat
    lat = lng[1]
    lng = lng[0]
  }
  return lng >= bounds[0] && lng <= bounds[2] && lat >= bounds[1] && lat <= bounds[3]
}
