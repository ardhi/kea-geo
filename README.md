# kea-geo
Collection of geo related utility

## Usage

```
npm install kea-geo
...
const { lngToDms, latToDms,... } = require(kea-geo)

console.log('Longitude:', lngToDms(106.8456))
console.log('Latitude:', latToDms(-6.2))
```

## Functions

### lngToTile(<longitude>, <zoom>)
### latToTile(<latitude>, <zoom>)
### tileToLng(<x>, <zoom>)
### tileToLat(<y>, <zoom>)
...

## License

MIT

