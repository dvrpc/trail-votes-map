import "./css/style.css";

import { map } from "./js/map";
import { data_sources } from "./js/sources";
import { layers } from "./js/layers";
import "./js/form";

map.on("load", () => {
  for (const src in data_sources) map.addSource(src, data_sources[src]);

  for (const lyr in layers) map.addLayer(layers[lyr]);
});
