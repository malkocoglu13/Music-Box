for (var i = 0; i < document.querySelectorAll(".box").length; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", function () {
        var e = this.innerHTML;
        makaSound(e);
        buttonAnmation(e);
    });
}

function makaSound(e) {
    switch (e) {
        case 'w':
            new Audio("sounds/djairhorn.mp3").play();
            break;
        case 'a':
            new Audio("sounds/freedrop.mp3").play();
            break;
        case 's':
            new Audio("sounds/rockthehouse.mp3").play();
            break;
        case 'd':
            new Audio("sounds/numberone.mp3").play();
            break;
        case 'j':
            new Audio("sounds/introresponder.mp3").play();
            break;
        case 'k':
            new Audio("sounds/hiphopdance.mp3").play();
            break;
        case 'l':
            new Audio("sounds/sydance.mp3").play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnmation(e) {
    var n = document.querySelector("." + e);
    n.classList.add("pressed");
    setTimeout(function () {
        n.classList.remove("pressed");
    }, 100);
}

document.addEventListener("keydown", e => {
    makaSound(e.key);
    buttonAnmation(e.key);
});
