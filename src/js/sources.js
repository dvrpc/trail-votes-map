import { URL_FOR_TRAILHEADS, URL_FOR_TRAIL_SEGMENTS } from "./api";

const data_sources = {
  "geojson-trailheads": {
    type: "geojson",
    data: URL_FOR_TRAILHEADS,
  },
  "geojson-trail-segments": {
    type: "geojson",
    data: URL_FOR_TRAIL_SEGMENTS,
  },
  "tile-bounds": {
    type: "vector",
    url: "https://www.tiles.dvrpc.org/data/census_boundaries.json",
  },
};

export { data_sources };
