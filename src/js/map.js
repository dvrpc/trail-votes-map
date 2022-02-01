mapboxgl.accessToken =
  "pk.eyJ1IjoiZHZycGNvbWFkIiwiYSI6ImNrczZlNDBkZzFnOG0ydm50bXR0dTJ4cGYifQ.VaJDo9EtH2JyzKm3cC0ypA";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/dvrpcomad/ckz2y2ww2002714qmlx8k1q99",
  center: [-75.3987737375343, 39.91659678130318],
  zoom: 10.5,
});

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
);

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, "bottom-left");

export { map };
