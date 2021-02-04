const lngToTile = require('./lngToTile')
const latToTile = require('./latToTile')

module.exports = function (bounds, zoom, allTiles) {
  const x1 = lngToTile(bounds[0], zoom)
  const y1 = latToTile(bounds[1], zoom)
  const x2 = lngToTile(bounds[2], zoom)
  const y2 = latToTile(bounds[3], zoom)
  if (allTiles) {
    const all = []
    for (let i = x1; i <= x2; i++) {
      for (let j = y2; j <= y1; j++) {
        let item
        switch (allTiles) {
          case 'array': item = [i, j]; break
          case 'object': item = { x: i, y: j }; break
          default: item = `${i}/${j}`
        }
        all.push(item)
      }
    }
    return all
  }
  return [x1, y1, x2, y2]
}
