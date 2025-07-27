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

// Hex settings
const cols = 11;
const rows = 9;
const hexWidth = 180;
const hexHeight = 160;
const xSpacing = 135; // horizontal spacing between hexes
const ySpacing = 140; // vertical spacing
const xOffset = 90;   // how much odd rows shift right

const letters = "ABCDEFGHIJK".split("");

// Draw hex markers
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const hexId = `${letters[col]}${row + 1}`;
    const y = row * ySpacing + 80; // small top margin
    const x = col * xSpacing + (row % 2 === 1 ? xOffset : 0) + 90;

    const marker = L.circleMarker([y, x], {
      radius: 18,
      color: "#00ffcc",
      fillColor: "#00ffcc",
      fillOpacity: 0.4,
    })
      .addTo(map)
      .bindTooltip(hexId, { permanent: true, direction: "center", className: "hex-label" })
      .on("click", () => {
        alert(`You clicked hex ${hexId}`);
      });
  }
}
