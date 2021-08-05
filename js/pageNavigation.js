function navigateTo(url, fromHome = true) {
    if (fromHome) {
        var obj = document.getElementById("mainLogo");
        obj.style.transition = "margin-top 1.0s, opacity 0.75s";
        obj.style.opacity = "1";
        setTimeout(() => {
            obj.style.transition = "";
            obj.style.opacity = "0";
        }, 100);
        var textNode = document.getElementById("mainLogoAltText");
        textNode.style.transition = "margin-top 1.0s, opacity 0.75s";
        textNode.style.opacity = "1";
        setTimeout(() => {
            textNode.style.transition = "";
            textNode.style.opacity = "0";
        }, 500);
        var textNode1 = document.getElementById("navText");
        textNode1.style.transition = "margin-top 1.0s, opacity 0.75s";
        textNode1.style.opacity = "1";
        setTimeout(() => {
            textNode1.style.transition = "";
            textNode1.style.opacity = "0";
        }, 900);
        setTimeout(() => {
            window.location.href = url;
        }, 2000);
    }
}