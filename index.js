const lngToTile = require('./src/lngToTile')
const latToTile = require('./src/latToTile')
const tileToLng = require('./src/tileToLng')
const tileToLat = require('./src/tileToLat')
const boundsToTiles = require('./src/boundsToTiles')
const enlargeBounds = require('./src/enlargeBounds')
const ddToDms = require('./src/ddToDms')
const dmsToDd = require('./src/dmsToDd')
const isValidCoord = require('./src/isValidCoord')
const latToDms = require('./src/latToDms')
const lngToDms = require('./src/lngToDms')
const tilesToBounds = require('./src/tilesToBounds')
const angleIn90Deg = require('./src/angleIn90Deg')
const latSizeOf = require('./src/latSizeOf')
const lngSizeOf = require('./src/lngSizeOf')
const getTileBounds = require('./src/getTileBounds')
const devideBounds = require('./src/devideBounds')
const isCoordInBounds = require('./src/isCoordInBounds')

module.exports = {
  lngToTile,
  latToTile,
  tileToLng,
  tileToLat,
  boundsToTiles,
  enlargeBounds,
  ddToDms,
  dmsToDd,
  isValidCoord,
  latToDms,
  lngToDms,
  angleIn90Deg,
  tilesToBounds,
  latSizeOf,
  lngSizeOf,
  getTileBounds,
  devideBounds,
  isCoordInBounds
}
