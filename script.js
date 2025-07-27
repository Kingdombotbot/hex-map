// Define the image dimensions (replace with your actual image dimensions in pixels)
const imageWidth = 1980; // ← adjust if needed
const imageHeight = 1440; // ← adjust if needed

// Create Leaflet map
const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 4,
  zoomControl: true,
});

// Set map bounds using image dimensions
const bounds = [[0, 0], [imageHeight, imageWidth]];
const image = L.imageOverlay("hexmap.png", bounds).addTo(map);
map.fitBounds(bounds);
