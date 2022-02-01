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

// const hover_on_trail_segments = (map) => {
//   ["existing-trail-segments", "future-trail-segments"].forEach((layername) => {
//     map.on("mouseenter", layername, (e) => {
//       let props = e.features[0].properties;
//       let trailname = props.trail_name;
//       let status = props.status;

//       let message = `
//           <h3>${trailname}</h3>
//           <p>Status: ${status}</p>
//         `;

//       // create the popup and add it to the map
//       let popup = new mapboxgl.Popup({
//         closeButton: false,
//         className: "popup-style",
//       });

//       popup.setLngLat(e.lngLat).setHTML(message).addTo(map);
//     });

//     map.on("mouseleave", layername, (e) => {
//       let popup = document.getElementsByClassName("popup-style");

//       // remove all elements with this class name
//       if (popup.length) {
//         popup[0].remove();
//       }
//     });
//   });
// };

export { use_pointer, click_on_trailheads };
