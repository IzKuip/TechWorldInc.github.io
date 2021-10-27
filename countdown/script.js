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
        
        cddOut.innerText = rawCountDownDate;

        if (countDownDate - Today > 0) {
            dayOut.innerText = days.toString().padStart(3, "0");
            hourOut.innerText = hours.toString().padStart(2, "0");
            minOut.innerText = minutes.toString().padStart(2, "0");
            secOut.innerText = seconds.toString().padStart(2, "0");
            wwkOut.innerText = weeks.toString().padStart(2, "0");
            
            mscOut.innerText = (countDownDate - Today).toString().padStart(11,"0");
    
            let colons = document.getElementsByClassName("colon");
    
            for (let i = 0; i < colons.length; i++) {
                colons[i].classList.toggle("halfTransparent");
            }
        } else {
            this.document.getElementById("countdown").style.display = "none";
            this.document.getElementById("countdown-done").style.display = "";
            confetti.start();
            this.document.body.style.backgroundColor = "#034"
        }
    }, 500);
}