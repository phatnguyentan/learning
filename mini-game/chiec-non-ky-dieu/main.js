var photoEl;
var nonEl;

function init() {
  photoEl = document.createElement("img");
  photoEl.setAttribute("src", "non.png");

  nonEl = document.getElementById("non-game-non");
  nonEl.appendChild(photoEl);
}

function quay() {
  photoEl.classList.remove("paused");
  photoEl.classList.add("spin");
  setTimeout(() => {
    stop();
  }, 1000);
}

function stop() {
  photoEl.classList.add("paused");
  var st = window.getComputedStyle(photoEl, null);
  var tr =
    st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform");
  var values = tr.split("(")[1],
    values = values.split(")")[0],
    values = values.split(",");
  var a = values[0]; // 0.866025
  var b = values[1]; // 0.5
  var c = values[2]; // -0.5
  var d = values[3]; // 0.866025
  var scale = Math.sqrt(a * a + b * b);
  // First option, don't check for negative result
  // Second, check for the negative result
  /**/
  var radians = Math.atan2(b, a);
  var angle = Math.round(radians * (180 / Math.PI));
  // var angle = Math.round(Math.asin(b) * (180 / Math.PI));
  console.log(angle);
}

init();
