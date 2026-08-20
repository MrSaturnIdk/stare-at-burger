/// The entire timer basically

"use strict";

console.log("[INFO] Loading");
let lastTime = performance.now();

const LOADING_SCREEN = document.getElementById("loading-screen");
const BURGER_TEXT = document.getElementById("burger-text");

let time = Number(localStorage.getItem("stareTime"));
let timeNaN = false;
if (time === 0) {
    time = 0;
    console.log("[INFO] New user");
} else if (Number.isNaN(time)) {
    timeNaN = true;
    console.log("[ERROR] Error converting local data");
}

function makeDisplayableTime(seconds) {
    const units = [
        {label: "second", number: 60},
        {label: "minute", number: 60},
        {label: "hour", number: 24},
        {label: "day", number: 365},
        {label: "year", number: 10},
        {label: "decade", number: 1}
    ];
    let returnable = "";
    let next = Math.round(seconds);

    for (let i = 0; i < units.length; i++) {
        const {label, number} = units[i];
        const nextModuloed = next % number;
        if (nextModuloed === 1) {
            returnable = `${nextModuloed} ${label}, ${returnable}`;
        } else if (nextModuloed === 0) {
            // Does nothing since the value isn't to be added
        } else {
            returnable = `${nextModuloed} ${label}s, ${returnable}`;
        }
        next = Math.floor(next/number);
    }

    returnable = returnable.trim();
    // Trim extra comma
    if (returnable.endsWith(",")) {
        returnable = returnable.slice(0,-1);
    }

    // Oxford comma
    const lastComma = returnable.lastIndexOf(",");
    const firstComma = returnable.indexOf(",");
    if (lastComma !== -1) {
        if (lastComma === firstComma) {
            returnable = `${returnable.slice(0, lastComma)} and ${returnable.slice(lastComma + 1)}`;
        } else {
            returnable = `${returnable.slice(0, lastComma)}, and ${returnable.slice(lastComma + 1)}`;
        }
    }
    if (returnable === "") {
        returnable = "0 seconds";
    }
    return returnable;
}

function main(currentTime) {
    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    time += deltaTime;

    BURGER_TEXT.textContent = `You have stared at the cheeseburger for ${makeDisplayableTime(time)}`;

    localStorage.setItem("stareTime", String(time));
    requestAnimationFrame(main);
}

LOADING_SCREEN.style.display = "none";
console.log("[INFO] Loaded");
if (timeNaN) {
    BURGER_TEXT.textContent = "Error loading data. If you manually modified site data, this may be the reason.";
} else {
    requestAnimationFrame(main);
}
