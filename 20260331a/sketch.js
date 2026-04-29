const WIDTH = 1080;
const HEIGHT = 1350;
let iAX = 0, iAY = 0;
let ps = [];

class Pattern {
    static SIZE = 20;
    static Q_SIZE = 20;


    constructor(iX, iY) {
        this.iX = iX;
        this.iY = iY;
    }

    drawPattern() {
        rectMode(CENTER);
        stroke(255, 255, 255, 20);
        strokeWeight(3);
        if (this.iY % 2 == 0) {
            if (this.iX % 2 == 0) {
                if (HEIGHT / WIDTH * this.iX * Pattern.SIZE >=
                    this.iY * Pattern.SIZE) {
                    line(
                        this.iX * Pattern.SIZE,
                        this.iY * Pattern.SIZE,
                        (this.iX + 1) * Pattern.SIZE,
                        (this.iY + 1) * Pattern.SIZE);
                } else {
                    noStroke();
                    square(
                        this.iX * Pattern.SIZE + Pattern.SIZE / 2,
                        this.iY * Pattern.SIZE + Pattern.SIZE / 2,
                        Pattern.SIZE);
                }
            }
        } else {
            if (this.iX % 2 != 0) {

                line(
                    (this.iX + 1) * Pattern.SIZE,
                    this.iY * Pattern.SIZE,
                    this.iX * Pattern.SIZE,
                    (this.iY + 1) * Pattern.SIZE);

            }
        }
    }
}

function init() {
    iAX = Math.floor(width / Pattern.SIZE) + 1;
    iAY = Math.floor(height / Pattern.SIZE) + 1;

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
    //blendMode(OVERLAY);
    background(0, 30, 30);
    for (let i = 0; i < 20; i++) {
        for (let p of ps) {
            p.drawPattern();
        }
    }



}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}