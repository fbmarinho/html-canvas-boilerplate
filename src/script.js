const canvas = document.getElementsByClassName('canvas')[0];
const ctx = canvas.getContext("2d");

const WIDTH = 0;
const HEIGHT = 0;

function resize(){
    WIDTH = document.body.clientWidth;
    HEIGHT = document.body.clientHeight;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
}

resize();

CanvasRenderingContext2D.prototype.cls = function(){
    this.fillRect(0, 0, WIDTH, HEIGHT);
}

window.addEventListener("resize",()=>resize());


