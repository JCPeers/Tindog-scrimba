import Dog from "./Dog.js";
import dogsData from "./data.js";

let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);
document.getElementById("accept-button").addEventListener("click", yes);
document.getElementById("reject-button").addEventListener("click", no);

render();

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}

function getNewDog() {
  currentDogIndex += 1;
  currentDog = new Dog(dogsData[currentDogIndex]);
  render();
}

function yes() {
  const likeBadge = document.getElementsByClassName("like-badge");
  likeBadge.classList.add("like-badge-clicked");
  currentDog.setMatchStatus(true);
  setTimeout(getNewDog, 2000);
}

function no() {
  const nopeBadge = document.getElementsByClassName("nope-badge")[0];
  nopeBadge.classList.add("nope-badge-clicked");
  currentDog.setMatchStatus(false);
  setTimeout(getNewDog, 2000);
}
