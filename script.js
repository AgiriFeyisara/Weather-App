const weatherApp = document.querySelector(".weather-app");
const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  weatherApp.classList.toggle("active");
});
