// set up the click to expand interactivity of each 'accordion'
document.querySelectorAll(".accordion").forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
    var panel = el.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

document.getElementById("directions").style.display = "block";
document.getElementById("direction-accordion").classList.toggle("active");
