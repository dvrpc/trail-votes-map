// Submit the form
// ---------------
let submit_button = document.getElementById("submit-button");
let help_text = document.getElementById("help-text");

submit_button.addEventListener("click", () => {
  let form = document.getElementById("email-form");

  let email_address = form.elements["emailaddress"].value;

  if (email_address == "") {
    help_text.innerText =
      "Please enter your email address before clicking submit!";
  } else if (!email_address.includes("@") || !email_address.includes(".")) {
    help_text.innerText =
      "Please enter a valid email address before clicking submit!";
  } else {
    help_text.innerText = "Thank you for your input!";
    help_text.style.color = "black";
  }
});
