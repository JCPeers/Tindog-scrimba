import Dog from "./Dog.js";
import { dogs } from "./data.js";

let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex]);
document.getElementById("accept-button").addEventListener("click", yes);
document.getElementById("reject-button").addEventListener("click", no);

render();

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}

function getNewDog() {
  if (currentDogIndex === dogs.length - 1) {
    return alert(" There are no more dogs. Come back again soon! Woof!");
  }

  document.getElementById("reject-button").disabled = false;
  document.getElementById("accept-button").disabled = false;

  currentDogIndex += 1;
  currentDog = new Dog(dogs[currentDogIndex]);
  render();
}

function yes() {
  document.getElementById("reject-button").disabled = true;
  const likeBadge = document.getElementsByClassName("like-badge")[0];
  likeBadge.classList.add("like-badge-clicked");
  currentDog.setMatchStatus(true);
  setTimeout(getNewDog, 2000);
}

function no() {
  document.getElementById("accept-button").disabled = true;
  const nopeBadge = document.getElementsByClassName("nope-badge")[0];
  nopeBadge.classList.add("nope-badge-clicked");
  currentDog.setMatchStatus(false);
  setTimeout(getNewDog, 2000);
}
