let dayOut,
    hourOut,
    minOut,
    secOut,
    wwkOut,
    cddOut,
    mscOut,
    countDownDate,
    rawCountDownDate = "Nov 20, 2021 00:00:00";

onload = function() {
    countDownDate = new Date(rawCountDownDate).getTime()
    dayOut = document.getElementById("dayOut");
    hourOut = document.getElementById("hourOut");
    minOut = document.getElementById("minOut");
    secOut = document.getElementById("secOut");

    setInterval(() => {
        const Today = new Date()
        let distance = countDownDate - Today;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(3,"0");
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2,"0");
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,"0");
        let seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2,"0");

        if (countDownDate - Today > 0) {
            this.document.getElementById("out").innerText = `${days} : ${hours} : ${minutes} : ${seconds}`
            this.document.getElementById("bg").innerText = `888 : 88 : 88 : 88`
        } else {
            this.document.getElementById("countdown").style.display = "none";
            this.document.getElementById("countdown-done").style.display = "";
            confetti.start();
            this.document.body.style.backgroundColor = "#034";
            this.document.body.style.color = "#0f0";
            this.document.body.style.fontFamily = "monospace"
        }
    }, 500);
}