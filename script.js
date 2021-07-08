const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);


// Determine how to pick apart today's date/hours/minutes/seconds
// Determine how to pick apart New Years date/hours/minutes/seconds

// Will need a timer that is recording the changes to today's date every second
    // User setInterval as part of the event listener

// When the second changes, need to recalculate the distance from now until new years
    // seconds is really a countdown until the next minute, so needs to be on a 60 basis
    // minutes is really a countdown until the next hour, so needs to be on a 60 basis
    // hours is really a countdown until the next day, so needs to be on a 24 basis
    // days is really a countdown until the next

// create a function that simply logs the time every second

// setInterval(function() {
//     console.log(new Date())
// }, 1000)




