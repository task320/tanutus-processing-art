const WIDTH = 1080;
const HEIGHT = 1350;
let iAX = 0, iAY = 0;
let ps = [];

class Pattern {
    static get SIZE() {
        return 10;
    }

    static get H_SIZE() {
        return this.SIZE / 2;
    }

    constructor(iX, iY) {
        this.iX = iX * 6;
        this.iY = iY * 5;
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

        if ((iX / 6 + iY / 5) % 2 === 0) {
            stroke(255, 200, 0);
        } else {
            stroke(0, 200, 255);
        }
        strokeWeight(2);

        //　左
        line(mX(0.5) * SIZE, mY(0.5) * SIZE, mX(1.0) * SIZE, mY(0.0) * SIZE);
        line(mX(1.0) * SIZE, mY(0.0) * SIZE, mX(1.5) * SIZE, mY(0.5) * SIZE,);

        line(mX(1.0) * SIZE, mY(0.5) * SIZE, mX(1.0) * SIZE, mY(2.0) * SIZE);
        line(mX(1.0) * SIZE, mY(2.0) * SIZE, mX(2.5) * SIZE, mY(2.0) * SIZE);

        line(mX(1.5) * SIZE, mY(1.5) * SIZE, mX(2.5) * SIZE, mY(0.5) * SIZE);

        circle(mX(3.0) * SIZE, mY(0.0) * SIZE, SIZE * 10);

        // 十字
        line(mX(2.75) * SIZE, mY(1.0) * SIZE, mX(3.25) * SIZE, mY(1.0) * SIZE);
        line(mX(3.0) * SIZE, mY(0.75) * SIZE, mX(3.0) * SIZE, mY(1.25) * SIZE);

        // バツ
        line(mX(2.5) * SIZE, mY(1.5) * SIZE, mX(3.5) * SIZE, mY(2.5) * SIZE);
        line(mX(3.5) * SIZE, mY(1.5) * SIZE, mX(2.5) * SIZE, mY(2.5) * SIZE);

        // 右
        line(mX(3.5) * SIZE, mY(0.5) * SIZE, mX(4.5) * SIZE, mY(1.5) * SIZE);

        line(mX(4.5) * SIZE, mY(0.5) * SIZE, mX(5.0) * SIZE, mY(0.0) * SIZE);
        line(mX(5.0) * SIZE, mY(0.0) * SIZE, mX(5.5) * SIZE, mY(0.5) * SIZE);

        line(mX(5.0) * SIZE, mY(0.5) * SIZE, mX(5.0) * SIZE, mY(2.0) * SIZE);
        line(mX(5.0) * SIZE, mY(2.0) * SIZE, mX(3.5) * SIZE, mY(2.0) * SIZE);

        // 上下反対　T
        line(mX(3.0) * SIZE, mY(3.0) * SIZE, mX(3.0) * SIZE, mY(4.0) * SIZE);
        line(mX(1.5) * SIZE, mY(4.0) * SIZE, mX(4.5) * SIZE, mY(4.0) * SIZE);

        // 左＜
        line(mX(1.5) * SIZE, mY(3.5) * SIZE, mX(1.0) * SIZE, mY(4.0) * SIZE);
        line(mX(1.0) * SIZE, mY(4.0) * SIZE, mX(1.5) * SIZE, mY(4.5) * SIZE);

        // 右＞
        line(mX(4.5) * SIZE, mY(3.5) * SIZE, mX(5.0) * SIZE, mY(4.0) * SIZE);
        line(mX(5.0) * SIZE, mY(4.0) * SIZE, mX(4.5) * SIZE, mY(4.5) * SIZE);



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
    fill(0, 0, 0);
    rect(0, 0, width, height);
    blendMode(EXCLUSION);

    // noFill();
    drawFullSquare();

    for (let i = 0; i < 1; i++) {
        for (let p of ps) {
            p.drawPattern();
        }
    }



}

drawFullSquare = () => {
    strokeWeight(2);
    for (let i = 0; i < iAX; i++) {
        for (let j = 0; j < iAY; j++) {
            if (noise(i, j) > 0.55) {
                stroke(0, 100, 255);
            } else {
                stroke(255, 0, 100);
                fill(255, 0, 100);
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