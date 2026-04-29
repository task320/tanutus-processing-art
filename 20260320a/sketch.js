class Pattern {
    static SIZE = 80;
    static Q_SIZE = 20;


    constructor(iX, iY) {
        this.iX = iX;
        this.iY = iY;
    }

    drawPattern() {
        push();
        let piCfg = random(TWO_PI);
        translate((this.iX * 3) * Pattern.SIZE, (this.iY * 3) * Pattern.SIZE);
        rotate(piCfg);

        fill(100, 200, 255, 50);
        stroke(100, 200, 255, 150);
        strokeWeight(0.5);
        rectMode(CENTER);
        triangle(Pattern.SIZE * 1.5, Pattern.SIZE * 1.5, Pattern.SIZE * 3, 0, 0, Pattern.SIZE * 1.5, Pattern.SIZE * 3.0);
        fill(255, 100, 200, 50);
        square(Pattern.SIZE / 2, Pattern.SIZE / 2, Pattern.SIZE);
        noFill();
        square(0, 0, Pattern.SIZE * 3);

        pop();

        this.iX += random([-1, 0, 1]);
        this.iY += random([-1, 0, 1]);

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
    //blendMode(OVERLAY);
    background(0, 30, 30);
    for (let i = 0; i < 20; i++) {
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