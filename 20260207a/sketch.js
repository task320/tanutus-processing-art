class Pattern {
    static SIZE = 60;
    static HALF_SIZE = 30;


    constructor(iX, iY) {
        this.iX = iX * 1.2 - 1;
        this.iY = iY * 2;
    }

    drawPattern() {
        strokeWeight(random(1, 3));
        noFill();
        if (noise(this.iX * 0.2, this.iY * 0.2) > 0.4) {
            stroke(255, 100, 255);
            line(
                (this.iX + 0) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE,
                (this.iX + 0) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE
            );
            line(
                (this.iX + 0) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE,
                (this.iX + 1) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE
            );
            line(
                (this.iX + 1) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE,
                (this.iX + 2) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE
            );
            line(
                (this.iX + 1) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE,
                (this.iX + 2) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE
            );
            line(
                (this.iX + 2) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE,
                (this.iX + 2) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE
            );
            circle((this.iX + 2) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE, Pattern.SIZE * 0.2);
        }

        if (noise(this.iX * 0.5, this.iY * 0.5) > 0.4) {
            stroke(255, 0, 150);
            line(
                (this.iX + 0.5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                (this.iX + 0.5) * Pattern.SIZE, (this.iY + 1.5) * Pattern.SIZE
            );
            line(
                (this.iX + 0.5) * Pattern.SIZE, (this.iY + 1.5) * Pattern.SIZE,
                (this.iX + 1.5) * Pattern.SIZE, (this.iY + 1.5) * Pattern.SIZE
            );
            line(
                (this.iX + 1.5) * Pattern.SIZE, (this.iY + 1.5) * Pattern.SIZE,
                (this.iX + 2.5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE
            );
            line(
                (this.iX + 1.5) * Pattern.SIZE, (this.iY + 1.5) * Pattern.SIZE,
                (this.iX + 2.5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE
            );
            line(
                (this.iX + 2.5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                (this.iX + 2.5) * Pattern.SIZE, (this.iY + 1.5) * Pattern.SIZE
            );
            circle((this.iX + 2.5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE, Pattern.SIZE * 0.2);
        }

        stroke(150, 150, 255);
        line(
            (this.iX + 2.5) * Pattern.SIZE, (this.iY + 1.5) * Pattern.SIZE,
            (this.iX + 1.0) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE
        );
        line(
            (this.iX + 1.0) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE,
            (this.iX + 1.0) * Pattern.SIZE, (this.iY + 1.25) * Pattern.SIZE
        );



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
    blendMode(ADD);
    background(0);
    drawGrid();
    for (let p of ps) {
        p.drawPattern();
    }



}

function drawGrid() {
    fill(0);
    strokeWeight(1);
    stroke(255, 100);
    let rX = 0;
    let rY = 0;
    for (let p = 0; p < 30; p++) {
        rY += Pattern.SIZE * 0.5 + random(20, 60);
        rect(
            0,
            rY,
            width,
            random(5, 20)
        );

        rX += Pattern.SIZE * 0.5 + random(20, 100);
        rect(
            rX,
            0,
            random(20, 40),
            height

        );

    }
}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}