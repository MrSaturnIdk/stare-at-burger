const LOADING_SCREEN = document.querySelector('#loading-screen');
const BURGER_TEXT = document.querySelector('#burger-text');
// browsing data oooh
let time = Number(localStorage.getItem('stareTime'));
if (time == null) {
    time = 0;
    console.log('New user');
}
else if (time == NaN) {
    time = 0;
    console.log('Error converting data for some reason');
}
let displayableTime = '';
function wait(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
}
function makeDisplayableTime(seconds) {
    const UNITS = [
    {label: 'second', modulo: 60, divide: 60},    
    {label: 'minute', modulo: 60, divide: 60},
    {label: 'hour', modulo: 24, divide: 24},
    {label: 'day', modulo: 365, divide: 365}, //how the fuck do you get past days
    {label: 'year', modulo: 10, divide: 10},
    {label: 'decade', modulo: 1, divide: 1}
    ];
    let returnable = '';
    let next = seconds;
    for (let i = 0; i < UNITS.length; i++) {
        const {label, modulo, divide} = UNITS[i];
        const NEXT_MODUED = next % modulo;
        if (NEXT_MODUED == 1) {
            returnable = `${NEXT_MODUED} ${label}, ` + returnable;
        } else if (NEXT_MODUED == 0) {
            /* does nothing since the value isn't to be added */
        } else {
            returnable = `${NEXT_MODUED} ${label}s, ` + returnable;
        }
        next = Math.floor(next/divide);
    }
    returnable = returnable.trim();
    if (returnable.endsWith(',')) {
        returnable = returnable.slice(0,-1);
    }
    const LAST_COMMA = returnable.lastIndexOf(',');
    const FIRST_COMMA = returnable.indexOf(',');
    if (LAST_COMMA !== -1) {
        if (LAST_COMMA == FIRST_COMMA) {
            returnable = `${returnable.slice(0, LAST_COMMA)} and${returnable.slice(LAST_COMMA +1)}`;
        } else {
            returnable = `${returnable.slice(0, LAST_COMMA)}, and${returnable.slice(LAST_COMMA + 1)}`;
        }
    }
    return returnable;
}
// epic loop trust
async function timeLoop() {
    while (true) {
        displayableTime = makeDisplayableTime(time);
        if (displayableTime === '') {
            displayableTime = '0 seconds';
        }
        BURGER_TEXT.textContent = `You have stared at the cheeseburger for ${displayableTime}.`;
        await wait(1000);
        time++;
        localStorage.setItem('stareTime', String(time));
    }
}
LOADING_SCREEN.style.display = 'none';
console.log('Hooray it loaded');
timeLoop();
