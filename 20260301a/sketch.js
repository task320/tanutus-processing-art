class Pattern {
    static SIZE = 80;
    static Q_SIZE = 20;


    constructor(iX, iY) {
        this.iX = iX;
        this.iY = iY;
    }

    drawPattern() {
        push();
        let mConfig = random([
            { "rotate": 0, "translateX": 0, "translateY": 0 },
            { "rotate": HALF_PI, "translateX": Pattern.SIZE, "translateY": 0 },
            { "rotate": PI, "translateX": Pattern.SIZE, "translateY": Pattern.SIZE },
            { "rotate": PI + HALF_PI, "translateX": 0, "translateY": Pattern.SIZE }
        ]);
        console.log(mConfig);
        translate(
            this.iX * Pattern.SIZE + mConfig.translateX,
            this.iY * Pattern.SIZE + mConfig.translateY
        );
        rotate(mConfig.rotate);
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (i % 2 == 0) {
                    if (j % 2 == 0) {
                        fill(0, 100, 250);
                    } else {
                        fill(0, 200, 250);
                    }
                    triangle(
                        (0.0 + j) * Pattern.Q_SIZE,
                        (1.0 + i) * Pattern.Q_SIZE,
                        (1.0 + j) * Pattern.Q_SIZE,
                        (0.0 + i) * Pattern.Q_SIZE,
                        (2.0 + j) * Pattern.Q_SIZE,
                        (1.0 + i) * Pattern.Q_SIZE
                    );

                } else {
                    if (j % 2 == 0) {
                        fill(0, 100, 250);
                    } else {
                        fill(0, 200, 250);
                    }
                    arc(
                        (1.0 + j) * Pattern.Q_SIZE,
                        (1.0 + i) * Pattern.Q_SIZE,
                        Pattern.Q_SIZE * 2,
                        Pattern.Q_SIZE * 2,
                        PI,
                        TWO_PI
                    );

                }
            }
        }
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
    blendMode(ADD);
    background(30, 0, 30);
    for (let p of ps) {
        p.drawPattern();
    }



}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}