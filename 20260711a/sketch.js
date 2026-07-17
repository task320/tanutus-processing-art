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
        this.iX = iX;
        this.iY = iY;
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



        let xP = mX(0) % 4;
        let yP = mY(0) % 4;

        let p = (xP + yP) % 4;

        if (noise(mX(), mY(), p) < 0.45) {
            return;
        }

        strokeWeight(2);

        if (mX(0) % 2 === 0) {

            switch (p) {
                case 0:
                    fill(200, 255, 0);
                    stroke(100);
                    triangle(
                        mX(0.75) * SIZE, mY(-0.25) * SIZE,
                        mX(0.75) * SIZE, mY(0.75) * SIZE,
                        mX(-0.25) * SIZE, mY(0.75) * SIZE
                    );
                    break;
                case 1:
                    break;
                case 2:
                    stroke(100);
                    line(mX(-0.5) * SIZE, mY(-0.5) * SIZE, mX(0.5) * SIZE, mY(0.5) * SIZE);
                    fill(0, 255, 200);
                    circle(mX(0) * SIZE, mY(0) * SIZE, SIZE / 2);
                    break;
                default:
                    break;
            }
        } else {
            switch (p) {
                case 0:
                    line(mX(1) * SIZE, mY(-1) * SIZE, mX(-1) * SIZE, mY(1) * SIZE);
                    circle(mX(0) * SIZE, mY(0) * SIZE, SIZE);
                    break;
                case 1:
                    // none
                    break;
                case 2:
                    stroke(100);
                    fill(200, 255, 0);
                    square(mX(-0.25) * SIZE, mY(-0.25) * SIZE, SIZE);
                    fill(0, 200, 255);
                    square(mX(0.0) * SIZE, mY(0.0) * SIZE, SIZE / 2);
                    break;
                default:
                    // none
                    break;
            }

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
    fill(100, 100, 255);
    rect(0, 0, width, height);
    //blendMode(OVERLAY);
    for (let i = 0; i < 1; i++) {
        for (let p of ps) {
            p.drawPattern();
        }
    }

    noFill();
    // drawFullSquare();

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