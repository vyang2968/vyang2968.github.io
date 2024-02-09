
var loaded = false;

window.addEventListener('load', () => {
    window.setTimeout(() => {
        document.querySelector(".first-msg").style.display = "none";
        document.querySelector(".second-msg").style.display = "flex";
        window.setTimeout(() => {
            loaded = true;
            window.location.replace("/animation/animation.html");
        }, 3000)
    }, 4000)
});

onbeforeunload = () => {
    if (!loaded) {
        window.setTimeout(function () { 
            window.location = '../index.html';
        }, 0); 
        window.onbeforeunload = null;
    }
}
