// source: https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#ECMAScript_.28JavaScript.2FActionScript.2C_etc..29

module.exports = function (x, zoom) {
  return (x / Math.pow(2, zoom) * 360 - 180)
}
