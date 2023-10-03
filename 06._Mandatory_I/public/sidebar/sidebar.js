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
const arrrowLeft = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16" id="expand-icon">
<path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
`
const arrowDown = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16" id="collapse-icon">
<path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>
`

//data tag for open and close status

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
