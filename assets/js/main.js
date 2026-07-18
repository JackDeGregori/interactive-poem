// main.js

// Random Number Funct
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define divs var as all divs in grid container
let divs = document.querySelectorAll(".grid-container div");

// Randomize Function
function randomize() {
    console.log(divs.length, "Randomize!");

    divs.forEach(function (div){
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0,50);
        let translateY = randomNumber(0,20);
        let rotate = randomNumber(0, 360);

        if (Math.random() > 0.5) {
            scale = 1;
            translateX = randomNumber(0,80);
            translateY = randomNumber(0,80);   
        }

        div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });
}

// Add event listener for randomize
document.addEventListener("click", randomize);