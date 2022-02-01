import { SELECTED_TRAILHEAD_IDS } from "./constants";

const use_pointer = (map) => {
  map.on("mouseenter", "trailheads", (e) => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "trailheads", (e) => {
    map.getCanvas().style.cursor = "";
  });
};

const click_on_trailheads = (map) => {
  map.on("click", "trailheads", (e) => {
    let selected_id = e.features[0].properties.gid;

    let this_id_was_not_yet_selected =
      SELECTED_TRAILHEAD_IDS.indexOf(selected_id) == -1;

    if (SELECTED_TRAILHEAD_IDS.length == 3 && this_id_was_not_yet_selected) {
      document.getElementById("help-text").innerHTML =
        "You can only select three trailheads! <br/>To modify your selection, click one of the yellow trailheads before selecting a new one.";
    } else {
      document.getElementById("help-text").innerHTML = "";
      if (this_id_was_not_yet_selected) {
        SELECTED_TRAILHEAD_IDS.push(selected_id);
      } else {
        SELECTED_TRAILHEAD_IDS.splice(
          SELECTED_TRAILHEAD_IDS.indexOf(selected_id),
          1
        );
      }
    }

    console.log(SELECTED_TRAILHEAD_IDS);
    map.setFilter("selected-trailheads", [
      "in",
      "gid",
      ...SELECTED_TRAILHEAD_IDS,
    ]);
  });
};

export { use_pointer, click_on_trailheads };
