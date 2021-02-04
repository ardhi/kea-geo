const lngToTile = require('./src/lngToTile')
const latToTile = require('./src/latToTile')
const tileToLng = require('./src/tileToLng')
const tileToLat = require('./src/tileToLat')
const tilesAtBounds = require('./src/tilesAtBounds')
const enlargeBoundsByTiles = require('./src/enlargeBoundsByTiles')
const ddToDms = require('./src/ddToDms')
const dmsToDd = require('./src/dmsToDd')
const isValidCoord = require('./src/isValidCoord')
const latToDms = require('./src/latToDms')
const lngToDms = require('./src/lngToDms')
const angleIn90Deg = require('./src/angleIn90Deg')
const latSizeOf = require('./src/latSizeOf')
const lngSizeOf = require('./src/lngSizeOf')

module.exports = {
  lngToTile,
  latToTile,
  tileToLng,
  tileToLat,
  tilesAtBounds,
  enlargeBoundsByTiles,
  ddToDms,
  dmsToDd,
  isValidCoord,
  latToDms,
  lngToDms,
  angleIn90Deg,
  latSizeOf,
  lngSizeOf
}
