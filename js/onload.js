onload = function() {
    if (WURFL.is_mobile == true) {
        this.document.getElementById("phoneOverrideLoader").href = "./css/phone.css";
        this.document.getElementById("navText").innerHTML = "<br><a onclick=\"navigateTo('./projects/index.html')\">PROJECTS</a><br><a href=\"./skills/index.html\">SKILLS</a><br><a href=\"./about/index.html\">ABOUT</a><br><a href=\"./contact/index.html\">CONTACT</a><br>"
    }
    var params = new URLSearchParams(window.location.search);
    if (params.get("noAnimation") == 1) {
        this.document.getElementById("mainLogo").style.transition = "unset";
        this.document.getElementById("mainLogoAltText").style.transition = "unset";
        this.document.getElementById("navText").style.transition = "unset";
        this.document.getElementById("mainLogo").style.opacity = "1";
        this.document.getElementById("mainLogoAltText").style.opacity = "1";
        this.document.getElementById("navText").style.opacity = "1";
        this.document.getElementById("mainLogo").style.marginTop = "-200px";
        this.document.getElementById("mainLogoAltText").style.marginTop = "80px";
        this.document.getElementById("navText").style.marginTop = "240px";
    } else {
        var ani = new animations();
        ani.startLogoAnimation();
        setTimeout(() => {
            ani.startLogoAltTextAnimation();
            setTimeout(() => {
                ani.startLinksTextAnimation();
            }, 500);
        }, 500);
    }
}

oncontextmenu = () => {
    return false;
}