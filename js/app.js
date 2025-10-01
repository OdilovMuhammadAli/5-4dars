const elCardTemp = document.getElementById("cardTemp");
const elParent = document.getElementById("parent");
const elLoader = document.getElementById("loader");
const elErrorUi = document.getElementById("error");
const elFooter = document.getElementById("footer");

function init() {
  elLoader.classList.remove("hidden");
  fetch("https://json-api.uz/api/project/fn43/cars")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      ui(res.data);
    })
    .catch(() => {
      elErrorUi.classList.remove("hidden");
    })
    .finally(() => {
      elLoader.classList.add("hidden");
    });
}
init();
function ui(cars) {
  elParent.innerHTML = "";
  cars.forEach((element) => {
    const clone = elCardTemp.cloneNode(true).content;
    const elTitle = (clone.querySelector("h2").innerText = element.name);
    const elDescription = (clone.querySelector(".description").innerText =
      element.description);
    const elTrim = (clone.querySelector(".trim").innerHTML = element.trim);
    const elColorName = (clone.querySelector(".colorName").innerHTML =
      element.colorName);
    const elCategory = (clone.querySelector(".category").innerHTML =
      element.category);
    const elAcceleration = (clone.querySelector(".acceleration").innerHTML =
      element.acceleration);

    const elMaxSpeed = (clone.querySelector(".maxSpeed").innerHTML =
      element.maxSpeed);

    const elYear = (clone.querySelector(".year").innerHTML = element.year);

    const elFuelType = (clone.querySelector(".fuelType").innerHTML =
      element.fuelType);

    const elGeneration = (clone.querySelector(".generation").innerHTML =
      element.generation);

    const elCountry = (clone.querySelector(".country").innerHTML =
      element.country);

    const elEngine = (clone.querySelector(".engine").innerHTML =
      element.engine);
    elParent.append(clone);
  });
}
