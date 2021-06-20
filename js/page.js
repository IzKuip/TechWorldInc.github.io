onload = function() {
    try {
        setDetails(new URLSearchParams(window.location.search).get('prid'));
    } catch {

    }
    if (WURFL.is_mobile == true) {
        this.document.getElementById("phoneOverrideLoader").href = "/css/phonepage.css";
    }
    var args = new URLSearchParams(window.location.search);
    this.document.getElementById("headerBar").style.opacity = "0";
    this.document.getElementById("headerBar").style.marginTop = "-70px";
    this.document.getElementsByClassName("pageContent")[0].style.opacity = "0";
    var inactives = this.document.getElementsByClassName("transparent underlineinactive");
    var actives = this.document.getElementsByClassName("transparent underlineactive");
    if (args.get("noAnimation") != 1) {
        setTimeout(() => {
            this.document.getElementById("headerBar").style.transition = "opacity 1s,margin-top 1s"
            this.document.getElementsByClassName("pageContent")[0].style.transition = "opacity 2s";
        }, 100);
    }
    setTimeout(() => {
        this.document.getElementById("headerBar").style.opacity = "1";
        this.document.getElementById("headerBar").style.marginTop = "";
        this.document.getElementsByClassName("pageContent")[0].style.opacity = "1";
    }, 100);
    for (var i = 0; i < inactives.length; i++) {
        inactives[i].style.transition = "color 0.25s, border-bottom 0.25s";
    }
    for (var i = 0; i < actives.length; i++) {
        actives[i].style.transition = "color 0.25s, border-bottom 0.25s";
    }
}