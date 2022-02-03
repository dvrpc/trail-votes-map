import "./css/style.css";

import { map } from "./js/map";
import { data_sources } from "./js/sources";
import { layers } from "./js/layers";
import { use_pointer, click_on_trailheads } from "./js/user_interaction";
import { assign_form_logic } from "./js/form";
import "./js/accordion";

map.on("load", () => {
  for (const src in data_sources) map.addSource(src, data_sources[src]);

  for (const lyr in layers) map.addLayer(layers[lyr]);

  use_pointer(map);
  click_on_trailheads(map);

  assign_form_logic(map);
});
