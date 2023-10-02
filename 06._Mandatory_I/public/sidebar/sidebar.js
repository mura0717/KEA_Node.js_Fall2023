// Fetch sidebar
fetch("../../sidebar/sidebar.html")
  .then((response) => response.text())
  .then((result) => {
    document.getElementById("sidebar-container").innerHTML = result;
  })
  .catch((error) => {
    console.error("Error loading sidebar:", error);
  });

//Change Arrow icons
const collapseIcon = document.getElementById("collapse-icon");
const expandIcon = document.getElementById("expand-icon");
const week1Collapse = document.getElementById("week1-collapse")
const week2Collapse = document.getElementById("week2-collapse")
const week3Collapse = document.getElementById("week3-collapse")
const week4Collapse = document.getElementById("week4-collapse")
const week5Collapse = document.getElementById("week5-collapse")
const accountCollapse = document.getElementById("account-collapse")

week1Collapse.addEventListener("show.bs.collapse", () => {
  collapseIcon.style.display = "none";
  expandIcon.style.display = "block";
});

week1Collapse.addEventListener("hide.bs.collapse", () => {
  collapseIcon.style.display = "block";
  expandIcon.style.display = "none";
});
