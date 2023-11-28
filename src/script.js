CanvasRenderingContext2D.prototype.cls = function(color){
    this.fillStyle = color;
    this.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

CanvasRenderingContext2D.prototype.circle = function(x,y,r){
    this.beginPath();
    this.arc(x, y, r, 0, 2 * Math.PI);
    this.closePath();
    this.stroke();
}

const WIDTH = 0;
const HEIGHT = 0;

document.addEventListener('DOMContentLoaded',()=>{
    resize();

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    
    ctx.cls("black");
    ctx.strokeStyle = "blue";
    ctx.circle(WIDTH/2,HEIGHT/2,HEIGHT/2);
})



function resize(){
    WIDTH = document.body.clientWidth;
    HEIGHT = document.body.clientHeight;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
}

window.addEventListener("resize",()=>resize());


