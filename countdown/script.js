let dayOut,
    hourOut,
    minOut,
    secOut,
    wwkOut,
    cddOut,
    mscOut,
    countDownDate,
    rawCountDownDate = "Oct 29, 2021 09:30:00";

onload = function() {
    countDownDate = new Date(rawCountDownDate).getTime()
    dayOut = document.getElementById("dayOut");
    hourOut = document.getElementById("hourOut");
    minOut = document.getElementById("minOut");
    secOut = document.getElementById("secOut");
    wwkOut = document.getElementById("weekOut");
    cddOut = document.getElementById("dateOut");
    mscOut = document.getElementById("secondsOut");
    setInterval(() => {
        const Today = new Date()
        let distance = countDownDate - Today;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let weeks = Math.floor(days / 7) + 1;
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dayOut.innerText = days.toString().padStart(3, "0");
        hourOut.innerText = hours.toString().padStart(2, "0");
        minOut.innerText = minutes.toString().padStart(2, "0");
        secOut.innerText = seconds.toString().padStart(2, "0");
        wwkOut.innerText = weeks.toString().padStart(2, "0");
        cddOut.innerText = rawCountDownDate;
        mscOut.innerText = (countDownDate - Today).toString().padStart(11,"0");

        let colons = document.getElementsByClassName("colon");

        for (let i = 0; i < colons.length; i++) {
            colons[i].classList.toggle("halfTransparent");
        }
    }, 500);
}

function toggleEditor() {
    document.getElementById("currentDateSpan").classList.toggle("noDisplay");
    document.getElementById("newDateInputSpan").classList.toggle("noDisplay");
}