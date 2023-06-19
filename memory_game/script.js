const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
let box1 = null;
let box2 = null;
let boxesFull = 0;
let clickerLock = false;

function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if (clickerLock) return;
  if (event.target.classList.contains("full")) return;

  let currentBox = event.target;
  currentBox.style.backgroundColor = currentBox.classList[0];

  if (!box1 || !box2) {
    currentBox.classList.add("full");
    box1 = box1 || currentBox;
    box2 = currentBox === box1 ? null : currentBox;
  }

  if (box1 && box2) {
    clickerLock = true;
    // debugger
    let first = box1.className;
    let second = box2.className;

    if (first === second) {
      boxesFull += 2;
      box1.removeEventListener("click", handleCardClick);
      box2.removeEventListener("click", handleCardClick);
      box1 = null;
      box2 = null;
      clickerLock = false;
    } else {
      setTimeout(function() {
        box1.style.backgroundColor = "";
        box2.style.backgroundColor = "";
        box1.classList.remove("full");
        box2.classList.remove("full");
        box1 = null;
        box2 = null;
        clickerLock = false;
      }, 2000);
    }
  }

  if (boxesFull === COLORS.length) alert("Done!");
}

// when the DOM loads
createDivsForColors(shuffledColors);
