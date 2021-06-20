function setDetails(id) {
    var register = projectRegister();

    document.getElementById("projectImageDisplay").src = register[id].imagesource;
    document.getElementById("projectNameDisplay").innerHTML = register[id].name;
    document.getElementById("projectDescDisplay").innerHTML = register[id].description;
}

function projectRegister() {
    return {
        "coincoll": {
            name: "Coin Collector",
            imagesource: "/img/Coin Collector.png",
            description: "A minimal ripoff of the Cookie Clicker game (<a href=\"https://orteil.dashnet.org/cookieclicker/\">Link</a>)"
        },
        "hangman": {
            name: "Hang Man",
            imagesource: "/img/hangman.png",
            description: "A digital hangman game created in HTML using the electron framework."
        },
        "twix86": {
            name: "TWIx86 (was WebCOSv1)",
            imagesource: "/img/TWIx86.png",
            description: "My own operating system wrote in C# making use of the COSMOS kernel, including a calculator and many different applications."
        },
        "wosv3": {
            name: "WebOSv3",
            imagesource: "/img/WebOSDesktop.png",
            description: "The most complete HTML \"Operating System\" that I have ever created. It is also made in the Electron framework, running in fullscreen by default, giving an immersive experience as if it is a real operating system."
        }
    }
}