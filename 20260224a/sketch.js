class Pattern {
    static SIZE = 20;
    static HALF_SIZE = 30;


    constructor(iX, iY) {
        this.iX = iX * 3;
        this.iY = (iY - 1) * 3;
    }

    drawPattern() {

        noFill();
        strokeWeight(1);

        stroke(255, 100);
        line(
            (this.iX + 0.5) * Pattern.SIZE,
            (this.iY + 1.0) * Pattern.SIZE,
            (this.iX + 0.5) * Pattern.SIZE,
            (this.iY + 3.0) * Pattern.SIZE
        );
        line(
            (this.iX + 3.0) * Pattern.SIZE,
            (this.iY + 1.0) * Pattern.SIZE,
            (this.iX + 1.0) * Pattern.SIZE,
            (this.iY + 3.0) * Pattern.SIZE
        );
        line(
            (this.iX + 3.5) * Pattern.SIZE,
            (this.iY + 1.0) * Pattern.SIZE,
            (this.iX + 3.5) * Pattern.SIZE,
            (this.iY + 3.0) * Pattern.SIZE
        );

        square(
            (this.iX + 0.0) * Pattern.SIZE,
            (this.iY + 3.0) * Pattern.SIZE,
            Pattern.SIZE
        );
        square(
            (this.iX + 3.0) * Pattern.SIZE,
            (this.iY + 3.0) * Pattern.SIZE,
            Pattern.SIZE
        );
        if (noise(this.iX, this.iY, 100) > 0.3) {
            fill(255, 50, 50, 100);

            if (noise(this.iX, this.iY, 1) > 0.5) {
                fill(255, 50, 50, 100);
            } else {
                fill(50, 50, 255, 100);
            }
            square(
                (this.iX + 1.0) * Pattern.SIZE,
                (this.iY + 1.0) * Pattern.SIZE,
                Pattern.SIZE
            );
            square(
                (this.iX + 2.0) * Pattern.SIZE,
                (this.iY + 2.0) * Pattern.SIZE,
                Pattern.SIZE
            );
        }
        let t = noise(this.iX, this.iY, 10);
        if (t > 0.7) {
            triangle(
                (this.iX + 1.5) * Pattern.SIZE, (this.iY + 0.0) * Pattern.SIZE,
                (this.iX + 2.0) * Pattern.SIZE, (this.iY + 0.75) * Pattern.SIZE,
                (this.iX + 1) * Pattern.SIZE, (this.iY + 0.75) * Pattern.SIZE
            );
            triangle(
                (this.iX + 2.5) * Pattern.SIZE, (this.iY + 0.0) * Pattern.SIZE,
                (this.iX + 3.0) * Pattern.SIZE, (this.iY + 0.75) * Pattern.SIZE,
                (this.iX + 2.0) * Pattern.SIZE, (this.iY + 0.75) * Pattern.SIZE
            );
        } else if (t > 0.4) {
            triangle(
                (this.iX + 1.5) * Pattern.SIZE, (this.iY + 1.0) * Pattern.SIZE,
                (this.iX + 2.0) * Pattern.SIZE, (this.iY + 0.25) * Pattern.SIZE,
                (this.iX + 1) * Pattern.SIZE, (this.iY + 0.25) * Pattern.SIZE
            );
            triangle(
                (this.iX + 2.5) * Pattern.SIZE, (this.iY + 1.0) * Pattern.SIZE,
                (this.iX + 3.0) * Pattern.SIZE, (this.iY + 0.25) * Pattern.SIZE,
                (this.iX + 2.0) * Pattern.SIZE, (this.iY + 0.25) * Pattern.SIZE
            );
        }
        circle((this.iX + 0.5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE, Pattern.SIZE * 3 / 4);
        circle((this.iX + 3.5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE, Pattern.SIZE * 3 / 4);



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
    background(30, 0, 30);
    for (let p of ps) {
        p.drawPattern();
    }



}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}