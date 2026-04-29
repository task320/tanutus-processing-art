class Pattern {
    static SIZE = 40;

    constructor(iX, iY) {
        this.iX = iX;
        this.iY = iY;
    }

    drawPattern() {
        if (noise(this.iX, this.iY) > 0.55) {
            rectMode(CENTER);
        
        noFill();
            square(
                (this.iX + 0.5) * Pattern.SIZE,
                (this.iY + 0.5) * Pattern.SIZE,
                Pattern.SIZE * 0.5
            );
            return;
        }

        strokeWeight(2);
        switch (random([0, 1, 2, 3])) {
            case 0:
                stroke(255, 100, 0);
                line(
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE,
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 1.5) * Pattern.SIZE

                );
                fill(255, 0, 0);
                circle((this.iX + 0.5) * Pattern.SIZE, (this.iY + 1.5) * Pattern.SIZE, Pattern.SIZE / 5);
                line(
                    this.iX * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE
                );
                line(
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE,
                    (this.iX + 1) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE

                );
                line(
                    (this.iX + 1) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE
                );
                break;
            case 1:
                stroke(0, 100, 255);
                fill(0, 100, 255);
                line(
                    (this.iX + 0) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                    (this.iX - 0.5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE

                );
                circle((this.iX - 0.5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE, Pattern.SIZE / 5);
                line(
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE,
                    (this.iX + 0) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE
                );
                line(
                    (this.iX + 0) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE

                );
                line(
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE,
                    (this.iX + 1) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE
                );

                break
            case 2:
                stroke(0, 255, 100);
                line(
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE,
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY - 0.5
                    ) * Pattern.SIZE
                );
                line(
                    (this.iX + 1) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE
                );
                line(
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE,
                    (this.iX + 0) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE

                );
                line(
                    (this.iX + 0) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE
                );
                break;
            default:
                stroke(250, 0, 250);
                line(
                    (this.iX + 1) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                    (this.iX + 1.5) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE
                );

                line(
                    (this.iX + 0) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE
                );
                line(
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE,
                    (this.iX + 1) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE

                );
                line(
                    (this.iX + 1) * Pattern.SIZE, (this.iY + 0.5) * Pattern.SIZE,
                    (this.iX + 0.5) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE
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
    background(0, 0, 70);

    for (let p of ps) {
        p.drawPattern();
    }

}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}