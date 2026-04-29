class Pattern {
    static SIZE = 40;

    constructor(iX, iY) {
        this.iX = iX;
        this.iY = iY;
    }

    drawPattern() {
        let pN = 1;

        strokeWeight(2);

        if (noise(this.iX, this.iY) > 0.5) {
            if ((this.iX % 2 === 0 && this.iY % 2 === 1) || (this.iX % 2 === 1 && this.iY % 2 === 0)) {
                pN = 0;
            }
        }
        
        if (noise(this.iX + 100, this.iY + 100) > 0.5) {


            noFill();
            stroke(200, 100, 0, 150);
            pN==0;
        } else {
            stroke(255);
            fill(200, 100, 0);
        }
        
        square(this.iX * Pattern.SIZE,
            this.iY * Pattern.SIZE,
            Pattern.SIZE);
            if (pN === 0) {
            }
        else {


            if (random([0, 1]) === 0) {
                line(this.iX * Pattern.SIZE, this.iY * Pattern.SIZE,
                    (this.iX + 1) * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE);
            } else {
                line((this.iX + 1) * Pattern.SIZE, this.iY * Pattern.SIZE,
                    this.iX * Pattern.SIZE, (this.iY + 1) * Pattern.SIZE);

            }
        }


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
    background(0);

    for (let p of ps) {
        p.drawPattern();
    }

    noFill();
    stroke(255, 200, 200);
    strokeWeight(50);
    circle(width/2, height/2, width*0.9);
    fill(255, 0, 0, 140);
    circle(width/2 + width/8, height/2 - width/8, width/2);
}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('sketch', 'png');
    }
}