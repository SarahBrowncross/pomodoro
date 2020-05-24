let currentTime = new Date();
let startTime = new Date();
let work = true;

let h2 = document.getElementById("state");
let display = document.getElementById("display")
let start = document.getElementById("start");

function lengthOfTime (startTime) {
    const currentTime = new Date();
    return currentTime - startTime;
}


if (work) {
    if (lengthOfTime(startTime) >= 25 * 60e3) {
        startTime = new Date();
        work = false;
    }
    h2.textContent = "Work";
} else {
    if (lengthOfTime(startTime) >= 5 * 60e3) {
        startTime = new Date();
        work = true;
    }
    h2.textContent = "Break";
}

setInterval(update, 1000);

function update () {
    display.textContent = Math.floor(lengthOfTime(startTime)/60e3) + ":" + Math.round(lengthOfTime(startTime)/1e3)%60
}

start.addEventListener("click", function () {
    let startTime = new Date();
});