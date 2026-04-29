class Pattern {
    static SIZE = 60;

    constructor(iX, iY) {
        this.iX = iX;
        this.iY = iY;
    }

    drawPattern() {
        rectMode(CENTER);
        if (noise(this.iX, this.iY) < 0.4) {
            switch (random([0, 1])) {
                case 0:
                    fill(0, 200, 255);
                    square(
                        this.iX * Pattern.SIZE + Pattern.SIZE,
                        this.iY * Pattern.SIZE,
                        Pattern.SIZE / 2
                    );
                    square(
                        this.iX * Pattern.SIZE,
                        this.iY * Pattern.SIZE + Pattern.SIZE,
                        Pattern.SIZE / 2
                    );
                    break;
                default:
                    fill(255, 200, 0);
                    square(
                        this.iX * Pattern.SIZE + Pattern.SIZE,
                        this.iY * Pattern.SIZE + Pattern.SIZE,
                        Pattern.SIZE / 2
                    );
                    square(
                        this.iX * Pattern.SIZE,
                        this.iY * Pattern.SIZE,
                        Pattern.SIZE / 2
                    );
                    break;
            }
        } else {

            noFill();
            stroke(0);
            strokeWeight(2);
            switch (random([0, 1])) {
                case 0:
                    fill(0, 200, 255);
                    arc(
                        this.iX * Pattern.SIZE + Pattern.SIZE,
                        this.iY * Pattern.SIZE,
                        Pattern.SIZE, Pattern.SIZE,
                        HALF_PI, PI, OPEN
                    );
                    arc(
                        this.iX * Pattern.SIZE,
                        this.iY * Pattern.SIZE + Pattern.SIZE,
                        Pattern.SIZE, Pattern.SIZE,
                        PI + HALF_PI, TWO_PI, OPEN
                    );
                    break;
                default:
                    fill(255, 200, 0);
                    arc(
                        this.iX * Pattern.SIZE + Pattern.SIZE,
                        this.iY * Pattern.SIZE + Pattern.SIZE,
                        Pattern.SIZE, Pattern.SIZE,
                        PI, PI + HALF_PI
                    );
                    arc(
                        this.iX * Pattern.SIZE,
                        this.iY * Pattern.SIZE,
                        Pattern.SIZE, Pattern.SIZE,
                        0, HALF_PI);
                    break;
            }
        }
        
        noFill();
        stroke(0, 10);
        square(this.iX * Pattern.SIZE + Pattern.SIZE / 2,
            this.iY * Pattern.SIZE + Pattern.SIZE / 2,
            Pattern.SIZE
        );

        noFill();
        stroke(0, 70);
        square(this.iX * Pattern.SIZE + Pattern.SIZE / 2,
            this.iY * Pattern.SIZE + Pattern.SIZE / 2,
            Pattern.SIZE / 2
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
    background(220);

    for (let p of ps) {
        p.drawPattern();
    }
}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}