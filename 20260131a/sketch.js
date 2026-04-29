class Pattern {
    static SIZE = 60;
    static HALF_SIZE = 30;


    constructor(iX, iY) {
        this.iX = iX;
        this.iY = iY;
    }

    drawPattern() {
        if(noise(this.iX, this.iY) < 0.5){
            return;
        }
        push();
        translate(this.iX * Pattern.HALF_SIZE,
            this.iY * Pattern.HALF_SIZE);
        rotate(random([-QUARTER_PI, 0, QUARTER_PI]));
        stroke(0);
        strokeWeight(random(1,5));
        if(this.iX % 2 == 0){
            if(this.iY % 2 == 0){
            fill(0, 150, 205);
            }else{
            fill(255, 100, 100);
            }
        }else{
            noFill();
        }
        square(
            0,
            0,
            Pattern.SIZE
        );
        pop();
    }
}


const WIDTH = 1080;
const HEIGHT = 1350;
let iAX = 0, iAY = 0;
let ps = [];

function init() {
    iAX = Math.floor(width / Pattern.HALF_SIZE) + 1;
    iAY = Math.floor(height / Pattern.HALF_SIZE) + 1;

    for (let i = 0; i < iAX; i++) {
        for (let j = 0; j < iAY; j++) {
            ps.push(new Pattern(i, j));
        }
    }

}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    init();
}

function draw() {
    noLoop();
    background(255, 230, 230);

    for (let p of ps) {
        p.drawPattern();
    }

}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}