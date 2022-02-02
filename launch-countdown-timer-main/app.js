function countdown() {
    const today = new Date();
    var offerDate = new Date('12 nov 2022');
    //offerTime will have the total millseconds
    const offerTime = offerDate - today;
    // 1 sec= 1000 ms
    // 1 min = 60 sec
    // 1 hour = 60 mins
    // 1 day = 24 hours
    const offerDays = Math.floor(offerTime / (1000 * 60 * 60 * 24));
    const offerHours = Math.floor((offerTime / (1000 * 60 * 60) % 24));
    const offerMins = Math.floor((offerTime / (1000 * 60) % 60));
    const offerSecs = Math.floor((offerTime / 1000) % 60);
    const days_el = document.getElementById("day");
    days_el.innerHTML = offerDays;
    const hours_el = document.getElementById("hours");
    hours_el.innerHTML = offerHours;
    const mins_el = document.getElementById("minutes");
    mins_el.innerHTML = offerMins;
    const secs_el = document.getElementById("seconds");
    secs_el.innerHTML = offerSecs;
    }
    setInterval(countdown, 1000);