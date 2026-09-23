const WIDTH = 1080;
const HEIGHT = 1350;
let iAX = 0, iAY = 0;
let ps = [];

class Pattern {
    static get SIZE() {
        return 20;
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
        const { mX, mY, iX, iY } = this;

        if (noise(iX, iY) > 0.2) {
            return;
        }

        fill(pColor("limeGreen"));
        strokeWeight(2);
        stroke(pColor("limeGreen"));

        push();
        translate(mX(0.5) * SIZE, mY(0.5) * SIZE);
        rotate(PI / 4);
        circle(0, 0, SIZE / 2);

        for (let i = 0; i < 2; i++) {
            triangle(
                (-0.5 - i) * SIZE, (-0.5 - i) * SIZE,
                (-0.5 - i) * SIZE, (-1.5 - i) * SIZE,
                (-1.5 - i) * SIZE, (-0.5 - i) * SIZE
            );
            line(
                (-1.5 - i) * SIZE, (-0.5 - i) * SIZE,
                (-1.5 - i) * SIZE, (1.5 - i) * SIZE
            );
            line(
                (-1.5 - i) * SIZE, (-0.5 - i) * SIZE,
                (-3.5 - i) * SIZE, (-0.5 - i) * SIZE
            );
            line(
                (-0.5 - i) * SIZE, (-1.5 - i) * SIZE,
                (1.5 - i) * SIZE, (-1.5 - i) * SIZE,
            );
            line(
                (-0.5 - i) * SIZE, (-1.5 - i) * SIZE,
                (-0.5 - i) * SIZE, (-3.5 - i) * SIZE,
            );

            triangle(
                (0.5 + i) * SIZE, (0.5 + i) * SIZE,
                (0.5 + i) * SIZE, (1.5 + i) * SIZE,
                (1.5 + i) * SIZE, (0.5 + i) * SIZE
            );
            line(
                (1.5 + i) * SIZE, (0.5 + i) * SIZE,
                (1.5 + i) * SIZE, (-1.5 + i) * SIZE
            );
            line(
                (1.5 + i) * SIZE, (0.5 + i) * SIZE,
                (3.5 + i) * SIZE, (0.5 + i) * SIZE
            );
            line(
                (0.5 + i) * SIZE, (1.5 + i) * SIZE,
                (-1.5 + i) * SIZE, (1.5 + i) * SIZE,
            );
            line(
                (0.5 + i) * SIZE, (1.5 + i) * SIZE,
                (0.5 + i) * SIZE, (3.5 + i) * SIZE,
            );
        }

        pop();


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
    fill(pColor("darkGray"));
    rect(0, 0, width, height);
    // blendMode(EXCLUSION);

    for (let i = 0; i < 1; i++) {
        for (let p of ps) {
            p.drawPattern();
        }
    }

    noFill();
    drawFullSquare();
}

drawFullSquare = () => {
    strokeWeight(2);
    for (let i = 0; i < iAX; i++) {
        for (let j = 0; j < iAY; j++) {
            if (noise(i, j) > 0.5) {
                stroke(pColor("deepPurpleBase"));
            } else {
                stroke(pColor("magenta"));
            }
            square(Pattern.SIZE * i, Pattern.SIZE * j, Pattern.SIZE * 4);
        }
    }
}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}