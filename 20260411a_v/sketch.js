const WIDTH = 1080;
const HEIGHT = 1350;
let iAX = 0, iAY = 0;
let ps = [];

class Pattern {
    static SIZE = 40;
    static Q_SIZE = 20;


    constructor(iX, iY) {
        this.iX = iX;
        this.iY = iY;
    }

    drawPattern() {
        //rectMode(CENTER);
        let n = noise(this.iX * 0.1, this.iY * 0.1);
        fill(0);
        noStroke();
        if (this.iY % 2 == 0) {

            square((this.iX * 4) * Pattern.SIZE, this.iY * Pattern.SIZE, Pattern.SIZE);
            //fill(255, 0, 200);
            if (n < 0.55) {
                triangle(
                    (this.iX * 4 + 1) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                    (this.iX * 4 + 2) * Pattern.SIZE, this.iY * Pattern.SIZE,
                    (this.iX * 4 + 2) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE);

                strokeWeight(2);
                stroke(0);
                line((this.iX * 4 + 1) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE, (this.iX * 4 + 3) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE);
                circle((this.iX * 4 + 3) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE, Pattern.SIZE / 2);
            } else {
                strokeWeight(2);
                stroke(0);
                line((this.iX * 4 + 1) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE, (this.iX * 4 + 7) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE);

            }
        } else {

            square((this.iX * 4 + 2) * Pattern.SIZE, this.iY * Pattern.SIZE, Pattern.SIZE);
            //fill(0, 255, 200);
            if (n < 0.55) {
                triangle(
                    (this.iX * 4 + 3) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                    (this.iX * 4 + 4) * Pattern.SIZE, this.iY * Pattern.SIZE,
                    (this.iX * 4 + 4) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE);

                strokeWeight(2);
                stroke(0);
                line((this.iX * 4 + 3) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE, (this.iX * 4 + 5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE);
                circle((this.iX * 4 + 5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE, Pattern.SIZE / 2);

            } else {
                strokeWeight(2);
                stroke(0);
                line((this.iX * 4 + 3) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE, (this.iX * 4 + 7) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE);
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
    fill(30, 0, 90);
    rect(0, 0, width, height / 2);
    fill(90, 0, 30);
    rect(0, height / 2, width, height);
    for (let i = 0; i < 1; i++) {
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