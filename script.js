function randomMovement(element) {
    var i = Math.floor(Math.random()* (window.screen.width - element.offsetWidth))+1;
    var j = Math.floor(Math.random()* (window.screen.height - 150 - element.offsetHeight))+1;
    element.style.position = "absolute";
    element.style.left = i+"px";
    element.style.top = j+"px";
}