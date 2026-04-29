const WIDTH = 1080;
const HEIGHT = 1350;
let iAX = 0, iAY = 0;
let ps = [];

class Pattern {
    static SIZE = 20;
    static Q_SIZE = 20;


    constructor(iX, iY) {
        this.iX = iX * 6;
        this.iY = iY * 2;
    }

    drawPattern() {
        push();
        noFill();
        triangle(
            (this.iX + 3) * Pattern.SIZE, this.iY * Pattern.SIZE,
            (this.iX + 2) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE,
            (this.iX + 4) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE
        );
        triangle(
            (this.iX + 2) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE,
            (this.iX + 0) * Pattern.SIZE, (this.iY + 2) * Pattern.SIZE,
            (this.iX + 3) * Pattern.SIZE, (this.iY + 2) * Pattern.SIZE
        );
        triangle(
            (this.iX + 4) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE,
            (this.iX + 3) * Pattern.SIZE, (this.iY + 2) * Pattern.SIZE,
            (this.iX + 6) * Pattern.SIZE, (this.iY + 2) * Pattern.SIZE
        );
        triangle(
            (this.iX + 1) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE,
            (this.iX - 1) * Pattern.SIZE, (this.iY + 0) * Pattern.SIZE,
            (this.iX + 0) * Pattern.SIZE, (this.iY + 2) * Pattern.SIZE
        );
        pop();

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
    push();
    translate(width / 2, 0);
    rotate(45);
    blendMode(DARKEST);
    fill(200, 0, 0);
    for (let i = 0; i < iAX; i++) {
        for (let j = 0; j < iAY; j++) {
            square(i * Pattern.SIZE, j * Pattern.SIZE, Pattern.SIZE);
        }
    }
    pop();

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