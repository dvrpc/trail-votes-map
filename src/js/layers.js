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
      "line-color": "#00ae12",
      "line-width": 8,
      "line-opacity": 0.7,
    },
  },
  futuretrailsegments: {
    id: "future-trail-segments",
    type: "line",
    source: "geojson-trail-segments",
    filter: ["!=", "status", "Existing"],
    paint: {
      "line-opacity": 0.7,
      "line-dasharray": [1, 1],
      "line-color": [
        "case",
        ["==", ["get", "status"], "Construction"],
        "#a416ff",
        ["==", ["get", "status"], "Design"],
        "#511aff",
        ["==", ["get", "status"], "Potential"],
        "#ff9f3d",
        ["==", ["get", "status"], "Proposed"],
        "#e60000",
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
      "circle-opacity": 0.8,
      "circle-color": "white",
      "circle-stroke-color": "black",
      "circle-stroke-width": 2,
    },
  },
  selectedtrailheads: {
    id: "selected-trailheads",
    type: "circle",
    source: "geojson-trailheads",
    paint: {
      "circle-radius": 10,
      "circle-color": "yellow",
      "circle-stroke-color": "black",
      "circle-stroke-width": 2,
    },
    filter: ["==", "gid", "-1"],
  },
};

export { layers };
