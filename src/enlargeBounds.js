const tileToLng = require('./tileToLng')
const tileToLat = require('./tileToLat')
const boundsToTiles = require('./boundsToTiles')

module.exports = function (bounds, zoom) {
  const tiles = boundsToTiles(bounds, zoom)
  const lng1 = tileToLng(tiles[0], zoom)
  const lat1 = tileToLat(tiles[1] + 1, zoom)
  const lng2 = tileToLng(tiles[2] + 1, zoom)
  const lat2 = tileToLat(tiles[3], zoom)
  return [lng1, lat1, lng2, lat2]
}
