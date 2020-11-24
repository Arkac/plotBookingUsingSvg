document.addEventListener("DOMContentLoaded", function () {
  setBookedPlot();
});

function setBookedPlot() {
  var doc = document.getElementById("plotCount");
  doc.value = localStorage.getItem("count");
  setTimeout(setBookedPlot, 1000);
}
