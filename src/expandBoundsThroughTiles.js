const tileToLng = require('./tileToLng')
const tileToLat = require('./tileToLat')
const tilesAtBounds = require('./tilesAtBounds')

module.exports = function (bounds, zoom, asArray) {
  if ([undefined, null].includes(asArray)) asArray = true
  const tiles = tilesAtBounds(bounds, zoom)
  const lng1 = tileToLng(tiles[0], zoom)
  const lat1 = tileToLat(tiles[1] + 1, zoom)
  const lng2 = tileToLng(tiles[2] + 1, zoom)
  const lat2 = tileToLat(tiles[3], zoom)
  if (asArray) return [lng1, lat1, lng2, lat2]
  return { sw: [lng1, lat1], ne: [lng2, lat2] }
}
