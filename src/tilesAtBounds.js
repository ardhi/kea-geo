const lngToTile = require('./lngToTile')
const latToTile = require('./latToTile')

module.exports = function (bounds, zoom, asArray) {
  if ([undefined, null].includes(asArray)) asArray = true
  const x1 = lngToTile(bounds[0], zoom)
  const y1 = latToTile(bounds[1], zoom)
  const x2 = lngToTile(bounds[2], zoom)
  const y2 = latToTile(bounds[3], zoom)
  if (asArray) return [x1, y1, x2, y2]
  return { sw: `${zoom}/${x1}/${y1}`, ne: `${zoom}/${x2}/${y2}` }
}
