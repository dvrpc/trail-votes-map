import { URL_TO_SAVE_VOTE } from "./api";
import { SELECTED_TRAILHEAD_IDS } from "./constants";

const assign_form_logic = (map) => {
  document.getElementById("submit-button").addEventListener("click", () => {
    // get the email address provided by the user
    let form = document.getElementById("email-form");
    let supplied_email_address = form.elements["emailaddress"].value;

    // connect to the "help-text" div
    let help_text = document.getElementById("help-text");

    // check if the user provided an acceptable email address
    // if not, provide help text to clarify what's wrong
    if (supplied_email_address == "") {
      help_text.innerText =
        "Please enter your email address before clicking submit!";
    } else if (
      !supplied_email_address.includes("@") ||
      !supplied_email_address.includes(".")
    ) {
      help_text.innerText =
        "Please enter a valid email address before clicking submit!";
    }
    // if the email address is good, send a POST request to the API
    else {
      let data = {
        email_address: supplied_email_address,
        trailheads: SELECTED_TRAILHEAD_IDS,
      };

      console.log("SUBMITTING:");
      console.log(data);

      if (SELECTED_TRAILHEAD_IDS.length == 0) {
        help_text.innerText =
          "You must select at least one trailhead in order to vote.";
      } else {
        fetch(URL_TO_SAVE_VOTE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            help_text.innerText = "Thank you for your input!";
            help_text.style.color = "black";
            map.setFilter("selected-trailheads", ["in", "gid", "-1"]);
            SELECTED_TRAILHEAD_IDS.length = 0;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  });
};

export { assign_form_logic };
