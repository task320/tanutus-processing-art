class Pattern {
    static SIZE = 60;

    constructor(iX, iY) {
        this.iX = iX;
        this.iY = iY;
    }

    drawPattern() {
        if (this.iY % 2 == 0) {
            fill(0, 150, 205);
            square(
                (this.iX * 2) * Pattern.SIZE,
                (this.iY) * Pattern.SIZE,
                Pattern.SIZE
            );
            fill(0, 200, 255);
            square(
                (this.iX * 2 + 0.25) * Pattern.SIZE,
                (this.iY + 0.25) * Pattern.SIZE,
                Pattern.SIZE / 2
            );
            fill(0, 100, 155);
            beginShape();
            vertex(
                (this.iX * 2 + 0.5) * Pattern.SIZE,
                (this.iY + 0.5) * Pattern.SIZE
            );
            vertex(
                (this.iX * 2 + 0.5) * Pattern.SIZE,
                (this.iY - 0.5) * Pattern.SIZE
            );
            vertex(
                (this.iX * 2 + 1.5) * Pattern.SIZE,
                (this.iY - 0.5) * Pattern.SIZE
            );
            quadraticVertex(
                (this.iX * 2 + 0.25) * Pattern.SIZE,
                (this.iY - 0.25) * Pattern.SIZE,
                (this.iX * 2 + 0.5) * Pattern.SIZE,
                (this.iY + 0.5) * Pattern.SIZE
            );
            endShape();
        } else {
            this.iY -= 0.5;
            fill(205, 150, 0);
            square(
                (this.iX * 2 + 1) * Pattern.SIZE,
                (this.iY) * Pattern.SIZE,
                Pattern.SIZE
            );
            
            fill(255, 200, 0);
            circle(
                (this.iX * 2 + 1 + 0.5) * Pattern.SIZE,
                (this.iY + 0.5) * Pattern.SIZE,
                Pattern.SIZE / 2
            );
            
            fill(155, 100, 0);
            beginShape();
            vertex(
                (this.iX * 2 + 1 + 0.5) * Pattern.SIZE,
                (this.iY + 0.5) * Pattern.SIZE
            );
            vertex(
                (this.iX * 2 + 1 + 0.5) * Pattern.SIZE,
                (this.iY + 1.5) * Pattern.SIZE
            );
            vertex(
                (this.iX * 2 + 1 - 0.5) * Pattern.SIZE,
                (this.iY + 1.5) * Pattern.SIZE
            );
            quadraticVertex(
                (this.iX * 2 + 1 + 0.75) * Pattern.SIZE,
                (this.iY + 1 + 0.25) * Pattern.SIZE,
                (this.iX * 2 + 1 + 0.5) * Pattern.SIZE,
                (this.iY + 0.5) * Pattern.SIZE
            );
            endShape();
            line(
                (this.iX * 2 + 1 + 0.5) * Pattern.SIZE,
                (this.iY + 0.5) * Pattern.SIZE,
                (this.iX * 2 + 1 - 0.5) * Pattern.SIZE,
                (this.iY) * Pattern.SIZE
            );
        }
    }
}


const WIDTH = 1080;
const HEIGHT = 1350;
let iAX = 0, iAY = 0;
let ps = [];

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