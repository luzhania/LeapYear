import isLeap from "./isLeap";

const year_input = document.querySelector("#year");
const form = document.querySelector("#leapYear-form");
const div = document.querySelector("#result-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const year = Number.parseInt(year_input.value);

  if (isLeap(year)) {
    div.innerHTML = "<p>" + year + " is a leap year</p>";
  }
  else {
    div.innerHTML = "<p>" + year + " is not a leap year</p>";
  }

});
