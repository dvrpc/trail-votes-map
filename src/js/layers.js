const layers = {
  delco: {
    id: "delco-outline",
    type: "line",
    source: "tile-bounds",
    "source-layer": "county",
    paint: {
      "line-width": 2.5,
      "line-color": "black",
    },
    filter: ["==", "CNTY_NAME", "Delaware County"],
  },
  trailsegments: {
    id: "trailsegments",
    type: "line",
    source: "geojson-trail-segments",
    paint: {
      "line-color": [
        "case",
        ["==", ["get", "status"], "Existing"],
        "green",
        ["==", ["get", "status"], "Construction"],
        "teal",
        ["==", ["get", "status"], "Design"],
        "blue",
        ["==", ["get", "status"], "Potential"],
        "orange",
        ["==", ["get", "status"], "Proposed"],
        "red",
        "black",
      ],
      "line-width": 5,
    },
  },

  trailheads: {
    id: "trailheads",
    type: "circle",
    source: "geojson-trailheads",
    paint: {
      "circle-radius": 5,
      "circle-color": "green",
      "circle-stroke-color": "black",
      "circle-stroke-width": 2,
    },
  },
};

export { layers };
