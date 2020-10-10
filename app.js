var canvas = document.getElementById("app");
var ctx = canvas.getContext("2d");

class rect{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vitess = 10;
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    event(x, y, w, h){
        if(joystick.left()){
            if(this.x > x){
                this.x -= this.vitess;
            }
        }
        if(joystick.right()){
            if(this.x < w-this.w){
                this.x += this.vitess;
            }
        }
        if(joystick.up()){
            if(this.y > y){
                this.y -= this.vitess;
            }
        }
        if(joystick.down()){
            if(this.y < h-this.h){
                this.y += this.vitess;
            }
        }
    }
}

var player1 = new rect(400, 450, 10, 60);
var player2 = new rect(1200, 450, 10, 60);
var line = new rect(800, 0, 1, 900);

var joystick = new VirtualJoystick({
    mouseSupport: true,
    limitStickTravel: true,
    stickRadius: 50
});

function affichage() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 1600, 900);
    ctx.fillStyle = 'white';
    player1.draw();
    player2.draw();
    line.draw();
}

window.main = function () {
    window.requestAnimationFrame(main);
    affichage();
    player1.event(0, 0, 800, 900);
};

main();