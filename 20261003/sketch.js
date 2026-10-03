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
            return (this.iX * 3) + v;
        }

        this.mY = (v = 0) => {
            return (this.iY * 3) + v;
        }
    }



    drawPattern() {
        const { SIZE } = Pattern;
        const { mX, mY, iX, iY } = this;
        const r = 2000;
        noFill();
        stroke(pColor('cyan'));
        this.drawRandom(this.drawL);
        this.drawRandom(this.drawCircle);
        this.drawRandom(this.drawSquare);
        this.drawRandom(this.drawTriangle);
        this.drawRandom(this.drawSlash);
    }

    drawRandom(func, r) {
        const { SIZE } = Pattern;
        const { mX, mY, iX, iY } = this;
        if (noise(iX, iY, random(r)) > 0.45) {
            func.call(this);
        }
    }

    drawL() {
        const { SIZE } = Pattern;
        const { mX, mY, iX, iY } = this;
        for (let i = 0; i < 3; i++) {
            let vI = random([0, 1, 2]);
            line(mX(i) * SIZE, mY(vI) * SIZE, mX(i) * SIZE, mY(vI) * SIZE + SIZE);
            line(mX(i) * SIZE, mY(vI) * SIZE + SIZE, mX(i) * SIZE + SIZE, mY(vI) * SIZE + SIZE);
        }
    }

    drawCircle() {
        const { SIZE } = Pattern;
        const { mX, mY, iX, iY } = this;
        push();
        for (let i = 0; i < 3; i++) {
            let vI = random([0, 1, 2]);
            circle(mX(i) * SIZE + SIZE / 2, mY(vI) * SIZE + SIZE / 2, SIZE / 2);
        }
        pop();
    }

    drawSquare() {
        const { SIZE } = Pattern;
        const { mX, mY, iX, iY } = this;
        push()

        for (let i = 0; i < 3; i++) {
            let vI = random([0, 1, 2]);
            square(mX(i) * SIZE, mY(vI) * SIZE, SIZE);
        }
        pop();
    }

    drawTriangle() {
        const { SIZE } = Pattern;
        const { mX, mY, iX, iY } = this;
        let points = [];
        for (let i = 0; i < 3; i++) {
            let vI = random([0, 1, 2]);
            points.push([mX(i) * SIZE, mY(vI) * SIZE]);
        }

        push();
        triangle(
            points[0][0], points[0][1],
            points[1][0], points[1][1],
            points[2][0], points[2][1]
        );
        pop();
    }

    drawSlash() {
        const { SIZE } = Pattern;
        const { mX, mY, iX, iY } = this;
        for (let i = 0; i < 3; i++) {
            let vI = random([0, 1, 2]);
            line(mX(i) * SIZE + SIZE, mY(vI) * SIZE, mX(i) * SIZE, mY(vI) * SIZE + SIZE);
        }
    }
}

function init() {
    iAX = Math.floor(width / (Pattern.SIZE * 3)) + 1;
    iAY = Math.floor(height / (Pattern.SIZE * 3)) + 1;

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
    blendMode(EXCLUSION);

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
            square(Pattern.SIZE * (i * 3), Pattern.SIZE * (j * 3), Pattern.SIZE * 4);
        }
    }
}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}