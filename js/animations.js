class animations {
    startLogoAnimation() {
        var obj = document.getElementById("mainLogo");
        obj.style.transition = "unset";
        obj.style.opacity = "0";
        obj.style.marginTop = "400px";
        setTimeout(() => {
            obj.style.transition = "";
            obj.style.opacity = "1";
            obj.style.marginTop = "-200px";
        }, 500);
    }

    startLogoAltTextAnimation() {
        var textNode = document.getElementById("mainLogoAltText");
        textNode.style.transition = "unset";
        textNode.style.opacity = "0";
        textNode.style.marginTop = "200px";
        setTimeout(() => {
            textNode.style.transition = "";
            textNode.style.opacity = "1";
            textNode.style.marginTop = "80px";
        }, 500);
    }

    startLinksTextAnimation() {
        var textNode1 = document.getElementById("navText");
        textNode1.style.transition = "unset";
        textNode1.style.opacity = "0";
        textNode1.style.marginTop = "200px";
        setTimeout(() => {
            textNode1.style.transition = "";
            textNode1.style.opacity = "1";
            textNode1.style.marginTop = "240px";
        }, 500);
    }
}