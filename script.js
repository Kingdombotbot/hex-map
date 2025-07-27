const imageWidth = 1980;
const imageHeight = 1440;

const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 4,
  zoomControl: true,
});

const bounds = [[0, 0], [imageHeight, imageWidth]];
L.imageOverlay("hexmap.png", bounds).addTo(map);
map.fitBounds(bounds);

// DEBUG: place one visible circle in the middle of the map
L.circle([imageHeight / 2, imageWidth / 2], {
  radius: 50,
  color: "red",
  fillColor: "red",
  fillOpacity: 0.6,
}).addTo(map).bindTooltip("Center Test", { permanent: true, direction: "top" });

// Hex grid settings (we'll re-enable this once debug is confirmed)

