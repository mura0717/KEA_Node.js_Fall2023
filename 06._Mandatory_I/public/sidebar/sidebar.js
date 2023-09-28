// Fetch sidebar
fetch("../../sidebar/sidebar.html")
  .then((response) => response.text())
  .then((result) => {
    document.getElementById("sidebar-container").innerHTML = result;
  })
  .catch((error) => {
    console.error("Error loading sidebar:", error);
  });
