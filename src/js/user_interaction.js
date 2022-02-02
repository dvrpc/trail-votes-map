import { SELECTED_TRAILHEAD_IDS } from "./constants";

const use_pointer = (map) => {
  // when hovering over the 'trailheads' layer, show a pointer mouse
  map.on("mouseenter", "trailheads", (e) => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "trailheads", (e) => {
    map.getCanvas().style.cursor = "";
  });
};

const click_on_trailheads = (map) => {
  map.on("click", "trailheads", (e) => {
    // Let the user select up to three distinct trailheads

    let selected_id = e.features[0].properties.gid;

    let this_id_was_not_yet_selected =
      SELECTED_TRAILHEAD_IDS.indexOf(selected_id) == -1;

    // If 3 are already selected and this is a 4th selection,
    // tell the user that they can only select three
    if (SELECTED_TRAILHEAD_IDS.length == 3 && this_id_was_not_yet_selected) {
      document.getElementById("help-text").innerHTML =
        "You can only select three trailheads! <br/>To modify your selection, click one of the yellow trailheads before selecting a new one.";
    } else {
      document.getElementById("help-text").innerHTML = "";
      // If less than 3 are selected and this one is new, add it to the selection
      if (this_id_was_not_yet_selected) {
        SELECTED_TRAILHEAD_IDS.push(selected_id);
      }
      // If this trailhead was already selected, remove it from the selection
      else {
        SELECTED_TRAILHEAD_IDS.splice(
          SELECTED_TRAILHEAD_IDS.indexOf(selected_id),
          1
        );
      }
    }

    // Update the 'selected-trailheads' layer to show what has been selected by the user
    map.setFilter("selected-trailheads", [
      "in",
      "gid",
      ...SELECTED_TRAILHEAD_IDS,
    ]);
  });
};

export { use_pointer, click_on_trailheads };
