function setDetails(id) {
    var register = projectRegister();
    try {
        document.getElementById("projectImageDisplay").src = register[id].imagesource;
        document.getElementById("projectNameDisplay").innerHTML = register[id].name;
        document.getElementById("projectDescDisplay").innerHTML = register[id].description;
    } catch { console.log(`Invalid id ${id}!`) }
}

function populateProjectsPage() {
    var outp = "";
    for (var i = 0; i < projectRegister().length; i++) {
        var name = projectRegister()[i].name;
        var imgs = projectRegister()[i].imagesource
        var desc = projectRegister()[i].description;
        var shrt = projectRegister()[i].shortdscrpt;
        outp += `<button class="projectDisplay" onclick="window.location.href = '/projects/details/index.html?id=${i}'"><img src="${imgs}"><div class="info"><b>${name}</b><br><i style="opacity:0.5">${shrt}</i></div></button>`
    }
    document.getElementById("projectsSpan").innerHTML = outp;
}

function projectRegister() {
    return [{
            name: "Coin Collector",
            imagesource: "/img/Coin Collector.png",
            description: "A minimal ripoff of the Cookie Clicker game (<a href=\"https://orteil.dashnet.org/cookieclicker/\">Link</a>). Created using vinilla HTML, no extensions what's however. It does utlilize WURFL to detect a phone and modify the page accordingly.",
            shortdscrpt: "Cookie Clicker Ripoff"
        },
        {
            name: "Hang Man",
            imagesource: "/img/hangman.png",
            description: "A digital hangman game created in HTML using the electron framework. Contains key recognition, illegal character checking, and many other comfort features to improve the experience of the program.",
            shortdscrpt: "Hang Man made in Electron"
        },
        {
            name: "TWIx86 (was WebCOSv1)",
            imagesource: "/img/TWIx86.png",
            description: "My own operating system wrote in C# making use of the COSMOS kernel, including a calculator and many different applications. Project development has been going slowly, because COSMOS needs a lot of plugs for unimplemented parts of the C# code base.",
            shortdscrpt: "C# OS made with COSMOS"
        },
        {
            name: "WebOSv3",
            imagesource: "/img/WebOSDesktop.png",
            description: "The most complete HTML \"Operating System\" that I have ever created. It is also made in the Electron framework, running in fullscreen by default, giving an immersive experience as if it is a real operating system.",
            shortdscrpt: "My biggest HTML project yet"
        }
    ]
}