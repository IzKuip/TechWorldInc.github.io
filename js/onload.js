onload = function() {
    var ani = new animations();
    ani.startLogoAnimation();
    setTimeout(() => {
        ani.startLogoAltTextAnimation();
        setTimeout(() => {
            ani.startLinksTextAnimation();
        }, 500);
    }, 500);
}