const WIDTH = 1080;
const HEIGHT = 1350;
let iAX = 0, iAY = 0;
let ps = [];

class Pattern {
    static SIZE = 40;
    static Q_SIZE = 20;


    constructor(iX, iY) {
        this.iX = iX * 2;
        this.iY = iY * 2;
    }

    drawPattern() {

        let n = noise(this.iX * 0.1, this.iY * 0.1) * 4;
        let g = map(abs(iAX - this.iX), 0, iAX / 2, 0, 255);
        let b = map(abs(iAY - this.iY), 0, iAY / 2, 0, 255);
        let sizeX = map(abs(iAX - this.iX), 0, iAX / 2, 20, 60);
        let sizeY = map(abs(iAY - this.iY), 0, iAY / 2, 20, 60);
        fill(255, g, b);
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                var iXL = this.iX + i;
                var iYL = this.iY + j;
                switch (int(n)) {
                    case 0:
                        //角左上
                        triangle(iXL * sizeX, iYL * sizeY,
                            (iXL + 1) * sizeX, iYL * sizeY,
                            iXL * sizeX, (iYL + 1) * sizeY);
                        break;
                    case 1:
                        //角右上
                        triangle((iXL + 1) * sizeX, iYL * sizeY,
                            (iXL + 0) * sizeX, iYL * sizeY,
                            (iXL + 1) * sizeX, (iYL + 1) * sizeY);
                        break;
                    case 2:
                        //角左下
                        triangle(iXL * sizeX, (iYL + 1) * sizeY,
                            (iXL + 1) * sizeX, (iYL + 1) * sizeY,
                            iXL * sizeX, (iYL + 0) * sizeY);
                        break;
                    default:
                        //角右下
                        triangle((iXL + 1) * sizeX, (iYL + 1) * sizeY,
                            (iXL + 0) * sizeX, (iYL + 1) * sizeY,
                            (iXL + 1) * sizeX, (iYL + 0) * sizeY);
                        break;
                }
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
    fill(70, 70, 100);
    rect(0, 0, width, height);
    //blendMode(OVERLAY);
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