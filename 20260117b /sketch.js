class Pattern {
    static SIZE = 40;

    constructor(iX, iY) {
        this.iX = (iX - 1) * 2;
        this.iY = iY * 2;
    }

    drawPattern() {
        if(noise(this.iX, this.iY) < 0.4){
            return;
        }
        rectMode(CENTER);

        fill(255, 0, 0)
        strokeWeight(2);
        stroke(200, 100, 0);
        line(
            (this.iX + 0.25) * Pattern.SIZE,
            this.iY * Pattern.SIZE,
            (this.iX + 0.25) * Pattern.SIZE,
            (this.iY + 0.5) * Pattern.SIZE
        );
        line(
            (this.iX + 0.25) * Pattern.SIZE,
            (this.iY + 0.5) * Pattern.SIZE,
            (this.iX + 1.5) * Pattern.SIZE,
            (this.iY + 0.5) * Pattern.SIZE
        );
        arc((this.iX + 1.5) * Pattern.SIZE,
            (this.iY + 0.5) * Pattern.SIZE,
            Pattern.SIZE,
            Pattern.SIZE,
            PI,
            PI + HALF_PI + QUARTER_PI
        );
        line(
            (this.iX + 1.5) * Pattern.SIZE,
            (this.iY + 0.5) * Pattern.SIZE,
            (this.iX + 3.0) * Pattern.SIZE,
            (this.iY - 1.0) * Pattern.SIZE
        );

        rect(
            (this.iX + 2.75) * Pattern.SIZE,
            (this.iY - 0.75) * Pattern.SIZE,
            Pattern.SIZE,
            Pattern.SIZE * 0.25
        );

        square(
            (this.iX + 2) * Pattern.SIZE,
            (this.iY + 0.5) * Pattern.SIZE,
            Pattern.SIZE * 0.25
        );


        arc((this.iX + 2.5) * Pattern.SIZE,
            (this.iY + 0.5) * Pattern.SIZE,
            Pattern.SIZE,
            Pattern.SIZE,
            0,
            HALF_PI + QUARTER_PI,
        );
        line(
            (this.iX + 2.5) * Pattern.SIZE,
            (this.iY + 0.5) * Pattern.SIZE,
            (this.iX + 1.0) * Pattern.SIZE,
            (this.iY + 2.0) * Pattern.SIZE
        );
        rect(
            (this.iX + 1.25) * Pattern.SIZE,
            (this.iY + 1.75) * Pattern.SIZE,
            Pattern.SIZE,
            Pattern.SIZE * 0.25
        );


        line(
            (this.iX + 2.5) * Pattern.SIZE,
            (this.iY + 0.5) * Pattern.SIZE,
            (this.iX + 3.75) * Pattern.SIZE,
            (this.iY + 0.5) * Pattern.SIZE
        );
        line(
            (this.iX + 3.75) * Pattern.SIZE,
            (this.iY + 0.5) * Pattern.SIZE,
            (this.iX + 3.75) * Pattern.SIZE,
            (this.iY + 1.0) * Pattern.SIZE
        );
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
    background(255,230,230);

    for (let p of ps) {
        p.drawPattern();
    }

}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}