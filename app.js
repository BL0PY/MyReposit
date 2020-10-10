var canvas = document.getElementById("app");
var ctx = canvas.getContext("2d");

var rect = (x, y, w, h) => {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    function move(x, y) {
        this.x += x;
        this.y += y;
    }
}

var player1 = rect(0, 0, 10, 60);
var player2 = rect(0, 0, 10, 60);

var joystick = new VirtualJoystick({
    mouseSupport: true,
    limitStickTravel: true,
    stickRadius: 50
});

function affichage() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 1600, 900);
    ctx.fillStyle = 'white';
    ctx.fillRect(player1.x, player1.y, player1.w, player1.h);
    ctx.fillRect(player2.x, player2.y, player2.w, player2.h);
}

window.main = function () {
    window.requestAnimationFrame(main);
    affichage();
};

main();