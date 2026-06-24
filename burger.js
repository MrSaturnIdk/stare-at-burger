'use strict';
console.log('Loading :3');
const loadingScreen = document.querySelector('#loading-screen');
const burgerText = document.querySelector('#burger-text');
let time = Number(localStorage.getItem('stareTime'));
if (time === null) {
    time = 0;
    console.log('New user');
} else if (time === NaN) {
    time = 0;
    console.log('Error converting data for some reason');
}
let displayableTime = '';
function wait(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
}
function makeDisplayableTime(seconds) {
    const units = [
        {label: 'second', number: 60},    
        {label: 'minute', number: 60},
        {label: 'hour', number: 24},
        {label: 'day', number: 365},
        {label: 'year', number: 10},
        {label: 'decade', number: 1}
    ];
    let returnable = '';
    let next = seconds;
    for (let i = 0; i < units.length; i++) {
        const {label, number} = units[i];
        const nextModuloed = next % number;
        if (nextModuloed === 1) {
            returnable = `${nextModuloed} ${label}, ` + returnable;
        } else if (nextModuloed === 0) {
            /* does nothing since the value isn't to be added */
        } else {
            returnable = `${nextModuloed} ${label}s, ` + returnable;
        }
        next = Math.floor(next/number);
    }
    returnable = returnable.trim();
    if (returnable.endsWith(',')) {
        returnable = returnable.slice(0,-1);
    }
    const lastComma = returnable.lastIndexOf(',');
    const firstComma = returnable.indexOf(',');
    if (lastComma !== -1) {
        if (lastComma === firstComma) {
            returnable = `${returnable.slice(0, lastComma)} and${returnable.slice(lastComma +1)}`;
        } else {
            returnable = `${returnable.slice(0, lastComma)}, and${returnable.slice(lastComma + 1)}`;
        }
    }
    return returnable;
}
async function main() {
    while (true) {
        displayableTime = makeDisplayableTime(time);
        if (displayableTime === '') { // Fallback
            displayableTime = '0 seconds';
        }
        burgerText.textContent = `You have stared at the cheeseburger for ${displayableTime}.`;
        await wait(1000);
        time++;
        localStorage.setItem('stareTime', String(time));
    }
}
loadingScreen.style.display = 'none';
console.log('Hooray it loaded');
main();