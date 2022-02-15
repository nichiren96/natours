const locations = JSON.parse(document.getElementById("map").dataset.locations);

mapboxgl.accessToken =
  "pk.eyJ1IjoibmljaGlyZW4iLCJhIjoiY2t6bnM2dXBvMzFxOTJvb2N3bTh4bTBudCJ9.xHm_EXo_HMrhGDgAnpjbzw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
});
