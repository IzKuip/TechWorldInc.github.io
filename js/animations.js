class animations {
    startLogoAnimation() { this.animate(document.getElementById("mainLogo"), "unset", "", "0", "1", "400px", "-200px", 500); }
    startLogoAltTextAnimation() { this.animate(document.getElementById("mainLogoAltText"), "unset", "", "0", "1", "200px", "80px", 500); }
    startLinksTextAnimation() { this.animate(document.getElementById("navText"), "unset", "", "0", "1", "200px", "240px", 500); }

    animate(obj, preTransition, afterTransition, preOpacity, afterOpacity, preMarginTop, afterMarginTop, delay) {
        obj.style.transition = preTransition;
        obj.style.opacity = preOpacity;
        obj.style.marginTop = preMarginTop;
        setTimeout(() => {
            obj.style.transition = afterTransition;
            obj.style.opacity = afterOpacity;
            obj.style.marginTop = afterMarginTop;
        }, delay);
    }
}