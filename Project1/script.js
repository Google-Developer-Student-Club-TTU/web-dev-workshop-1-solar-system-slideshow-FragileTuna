import planets from './planets.js'

const image = document.getElementById("image-container");
const name = document.getElementById("planet-name");
const mass = document.getElementById("planet-mass");
const rings = document.getElementById("rings");
const description = document.getElementById("description");

const btnPrevious = document.querySelector(".btn.previous"); //btn and previous are 2 different classes
const btnNext = document.querySelector(".btn.next");

let counter = 0;

function showItem() {
    const item = planets[counter];
    image.src = item.image; //replaces "const image" above with planets.js info
    name.textContent = item.name;
    mass.textContent = "Mass: " + item.mass;
    rings.textContent = "Rings: " + item.hasRings;
    description.textContent = item.description;
}

// eventListener waits for something to happen. DOMContentLoader is when webpage starts up.
document.addEventListener('DOMContentLoaded', () => {
    showItem();
})

// Waits for previous button to be clicked
btnPrevious.addEventListener('click', () => {
    counter--;
    if (counter < 0){
        counter = planets.length - 1;
    }
    showItem();
})

// Waits for next button to be clicked
btnNext.addEventListener('click', () => {
    counter++;
    if (counter > planets.length - 1){
        counter = 0;
    }
    showItem();
})