class Pattern {
    static SIZE = 80;
    static Q_SIZE = 20;


    constructor(iX, iY) {
        this.iX = iX;
        this.iY = iY;
    }

    drawPattern() {
        push();
        let centerPoint = random([
            { "p": 0, "cX": Pattern.SIZE / 2, "cY": 0 },
            { "p": 1, "cX": Pattern.SIZE, "cY": Pattern.SIZE / 2 },
            { "p": 0, "cX": Pattern.SIZE / 2, "cY": Pattern.SIZE },
            { "p": 1, "cX": 0, "cY": Pattern.SIZE / 2 }
        ]);
        translate(this.iX * Pattern.SIZE, this.iY * Pattern.SIZE);
        let piCfg = {};
        if (centerPoint.p == 1) {
            piCfg = random([
                { "piS": 0, "piE": PI },
                { "piS": PI, "piE": TWO_PI },
            ]);
        } else {
            piCfg = random([
                { "piS": -HALF_PI, "piE": HALF_PI },
                { "piS": HALF_PI, "piE": 3 * HALF_PI },
            ]);
        }

        fill(255, 100, 200, 50);
        stroke(255, 100, 200, 150);
        strokeWeight(0.5);
        square(0, 0, Pattern.SIZE);
        arc(
            centerPoint.cX,
            centerPoint.cY,
            Pattern.SIZE,
            Pattern.SIZE,
            piCfg.piS,
            piCfg.piE
        );

        pop();

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
    blendMode(OVERLAY);
    background(30, 0, 30);
    for (let p of ps) {
        p.drawPattern();
        p.drawPattern();
        p.drawPattern();
    }



}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}