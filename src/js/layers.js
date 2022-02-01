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
  existingtrailsegments: {
    id: "existing-trail-segments",
    type: "line",
    source: "geojson-trail-segments",
    filter: ["==", "status", "Existing"],
    paint: {
      "line-color": "green",
      "line-width": 10,
      "line-opacity": 0.5,
    },
  },
  futuretrailsegments: {
    id: "future-trail-segments",
    type: "line",
    source: "geojson-trail-segments",
    filter: ["!=", "status", "Existing"],
    paint: {
      "line-opacity": 0.5,
      "line-dasharray": [1, 1],
      "line-color": [
        "case",
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
      "line-width": 2,
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
