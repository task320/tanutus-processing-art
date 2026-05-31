const WIDTH = 1080;
const HEIGHT = 1350;
let iAX = 0, iAY = 0;
let ps = [];

class Pattern {
    static get SIZE() {
        return 40;
    }

    static get H_SIZE() {
        return this.SIZE / 2;
    }

    constructor(iX, iY) {
        this.iX = iX * 2;
        this.iY = iY * 2;
        this.mX = (v = 0) => {
            return this.iX + v;
        }

        this.mY = (v = 0) => {
            return this.iY + v;
        }
    }



    drawPattern() {
        const { SIZE } = Pattern;
        const { mX, mY } = this;

        stroke(255, 255, 255);
        strokeWeight(3);
        fill(255, 200, 0);

        circle(mX(1) * SIZE, mY(0) * SIZE, SIZE);

        circle(mX(1.25) * SIZE, mY(-0.25) * SIZE, SIZE / 4);
        circle(mX(1.25) * SIZE, mY(0.25) * SIZE, SIZE / 4);
        circle(mX(0.75) * SIZE, mY(0.25) * SIZE, SIZE / 4);
        circle(mX(0.75) * SIZE, mY(-0.25) * SIZE, SIZE / 4);

        let nI = (mX(0) / 2 - 1) + (mY(0) / 2 - 1);
        if (nI > 10) {
            nI = nI % 10;
        }
        if (nI > 8) {
            triangle(
                mX(0) * SIZE, mY(0) * SIZE,
                mX(1) * SIZE, mY(1) * SIZE,
                mX(0) * SIZE, mY(1) * SIZE
            );
            triangle(
                mX(1) * SIZE, mY(1) * SIZE,
                mX(2) * SIZE, mY(2) * SIZE,
                mX(2) * SIZE, mY(1) * SIZE
            );
            line(mX(2) * SIZE, mY(0) * SIZE, mX(0) * SIZE, mY(2) * SIZE);

            triangle(
                mX(0) * SIZE, mY(1.5) * SIZE,
                mX(0.5) * SIZE, mY(1.5) * SIZE,
                mX(0) * SIZE, mY(2) * SIZE
            );
            triangle(
                mX(2) * SIZE, mY(0) * SIZE,
                mX(2) * SIZE, mY(0.5) * SIZE,
                mX(1.5) * SIZE, mY(0.5) * SIZE)
        } else if (nI > 6) {
            triangle(
                mX(0) * SIZE, mY(0) * SIZE,
                mX(1) * SIZE, mY(1) * SIZE,
                mX(0) * SIZE, mY(1) * SIZE
            );
            triangle(
                mX(1) * SIZE, mY(1) * SIZE,
                mX(2) * SIZE, mY(2) * SIZE,
                mX(2) * SIZE, mY(1) * SIZE
            );
        } else if (nI > 4) {
            line(mX(2) * SIZE, mY(0) * SIZE, mX(0) * SIZE, mY(2) * SIZE);
        } else if (nI > 2) {


        } else if (nI >= 0) {
            triangle(
                mX(0) * SIZE, mY(1.5) * SIZE,
                mX(0.5) * SIZE, mY(1.5) * SIZE,
                mX(0) * SIZE, mY(2) * SIZE
            );
            triangle(
                mX(2) * SIZE, mY(0) * SIZE,
                mX(2) * SIZE, mY(0.5) * SIZE,
                mX(1.5) * SIZE, mY(0.5) * SIZE
            );
        }
    }
}

function init() {
    iAX = Math.floor(width / Pattern.SIZE) + 1;
    iAY = Math.floor(height / Pattern.SIZE) + 6;

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
    fill(0, 200, 255);
    rect(0, 0, width, height);
    //blendMode(OVERLAY);
    for (let i = 0; i < 1; i++) {
        for (let p of ps) {
            p.drawPattern();
        }
    }

    noFill();
    drawFullSquare();

}

drawFullSquare = () => {
    for (let i = 0; i < iAX; i++) {
        for (let j = 0; j < iAY; j++) {
            square(Pattern.SIZE * i, Pattern.SIZE * j, Pattern.SIZE);
        }
    }
}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}