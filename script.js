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

// DEBUG: still show center marker
L.circle([imageHeight / 2, imageWidth / 2], {
  radius: 50,
  color: "red",
  fillColor: "red",
  fillOpacity: 0.6,
}).addTo(map).bindTooltip("Center Test", { permanent: true, direction: "top" });

// Updated Hex settings
const cols = 11;
const rows = 9;
const hexWidth = 160;
const hexHeight = 140;
const xSpacing = 125; // tighter horizontal spacing
const ySpacing = 120; // tighter vertical spacing
const xOffset = 62;   // half of hexWidth * ~0.75

const letters = "ABCDEFGHIJK".split("");

// Draw hex markers (now centered properly)
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const hexId = `${letters[col]}${row + 1}`;

    // Center grid around middle of map
    const xStart = (imageWidth - (cols * xSpacing)) / 2;
    const yStart = (imageHeight - (rows * ySpacing)) / 2;

    const y = yStart + row * ySpacing;
    const x = xStart + col * xSpacing + (row % 2 === 1 ? xOffset : 0);

    const marker = L.circle([y, x], {
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
