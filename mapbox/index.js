mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVubnl0cm92YXRvIiwiYSI6ImNrZDcwdTVwbTE4amEyem8yZWdkNHN3ZmoifQ.r3Llqtnwfqqju2zfzE-fvA"

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [37.47857, -1.35373],
  zoom: 9,
  pitch: 0,
  bearing: 21,
  antialias: true,
})

var rootElement = document.createElement("div")
rootElement.classList.add("route-marker")
var positionMarker = new mapboxgl.Marker({ element: rootElement })

const geolocateControl = new mapboxgl.GeolocateControl({
  showAccuracyCircle: true,
  positionOptions: {
    enableHighAccuracy: true,
  },
  // When active the map will receive updates to the device's location as it changes.
  trackUserLocation: true,
  // Draw an arrow next to the location dot to indicate which direction the device is heading.
  showUserHeading: true,
})

map.addControl(geolocateControl)

geolocateControl.on("geolocate", function ({ coords }) {
  let { latitude, longitude } = e.coords
  console.log(latitude, longitude)
})

// Direction control
var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: "metric",
  profile: "mapbox/driving",
})

map.addControl(directions, "top-left")

map.on("click", "kiambu", (e) => {
  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(e.features[0].properties.CONSTITUEN)
    .addTo(map)
})

// Change the cursor to a pointer when
// the mouse is over the states layer.
map.on("mouseenter", "states-layer", () => {
  map.getCanvas().style.cursor = "pointer"
})

map.on("load", function () {
  map.addSource("machakos", {
    type: "geojson",
    data: "https://raw.githubusercontent.com/eduuh/mapboxsearch/master/mapbox/machashapefile.json?token=AHTOOWXSQ6VTV3YTLLXKJL3BNNBAU",
  })

  map.addSource("hospitals", {
    type: "geojson",
    data: "https://mapboxsearch.azurewebsites.net/datasource/hospitals?distance=10000&longitude=37.26&latitude=-1.51543",
  })
  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      localGeocoder: coordinatesGeocoder,
      zoom: 15,
      placeholder: "Search by Location",
      marker: false,
      mapboxgl: mapboxgl,
      reverseGeocode: true,
    })
  )

  map.addLayer({
    id: "machakos",
    type: "fill",
    source: "machakos",
    layout: {},
    paint: {
      "fill-outline-color": "#FF0000",
      "fill-color": "#088",
      "fill-opacity": 0.2,
    },
  })

  map.addLayer({
    id: "hospitallayer",
    type: "circle",
    source: "hospitals",
  })
})

const coordinatesGeocoder = function (query) {
  const matches = query.match(
    /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
  )
  if (!matches) {
    return null
  }

  function coordinateFeature(lng, lat) {
    return {
      center: [lng, lat],
      geometry: {
        type: "Point",
        coordinates: [lng, lat],
      },
      place_name: "Lat: " + lat + " Lng: " + lng,
      place_type: ["coordinate"],
      properties: {},
      type: "Feature",
    }
  }

  const coord1 = Number(matches[1])
  const coord2 = Number(matches[2])
  const geocodes = []

  if (coord1 < -90 || coord1 > 90) {
    // must be lng, lat
    geocodes.push(coordinateFeature(coord1, coord2))
  }

  if (coord2 < -90 || coord2 > 90) {
    // must be lat, lng
    geocodes.push(coordinateFeature(coord2, coord1))
  }

  if (geocodes.length === 0) {
    // else could be either lng, lat or lat, lng
    geocodes.push(coordinateFeature(coord1, coord2))
    geocodes.push(coordinateFeature(coord2, coord1))
  }

  return geocodes
}
