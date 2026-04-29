const WIDTH = 1080;
const HEIGHT = 1350;
const BPM = 140;
const BEAT = 60 / BPM;
let startTime;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    angleMode(DEGREES);
    rectMode(CENTER);
    noStroke();
    startTime = millis();
}

function draw() {
    const t = (millis() - startTime) / 1000;
    drawBackground(t);
    drawPulseGrid(t);
    drawFastBars(t);
    drawTriangleCluster(t);
    drawFloatingOrbs(t);
}

function drawBackground(time) {
    const top = color(12, 20, 70);
    const mid = color(18, 60, 160);
    const bot = color(30, 90, 220);
    for (let y = 0; y < height; y++) {
        const amt = y / height;
        const c = lerpColor(lerpColor(top, mid, amt * 0.7), bot, amt * 0.9);
        stroke(c);
        line(0, y, width, y);
    }
}

function drawPulseGrid(time) {
    const cols = 7;
    const rows = 8;
    const gridW = width * 0.85;
    const gridH = height * 0.52;
    const offsetX = width * 0.08;
    const offsetY = height * 0.12;

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            const px = offsetX + (i + 0.5) * (gridW / cols);
            const py = offsetY + (j + 0.5) * (gridH / rows);
            const phase = (time / BEAT + i * 0.15 + j * 0.23) % 1;
            const beat = pow(sin(phase * 180), 2);
            const slow = pow(sin((time + i * 0.7 + j * 1.1) * 0.9), 2);
            const size = lerp(40, 180, beat);
            const drift = sin((time * 0.6 + i * 0.5 + j * 0.7) * 90) * 16;

            // Blue square base
            fill(26, 65, 180, 220);
            push();
            translate(px + drift, py + drift * 0.2);
            rotate(15 * slow);
            square(0, 0, size);
            pop();

            // Triangle accent
            fill(120, 190, 255, 200);
            push();
            translate(px + drift * 0.4, py - size * 0.25);
            rotate(time * 35 * ((i % 2) ? 1 : -1));
            triangle(
                -size * 0.25, size * 0.18,
                size * 0.25, size * 0.18,
                0, -size * 0.4
            );
            pop();

            // Circle pulse
            const circleSize = size * 0.35 * (0.6 + 0.4 * beat);
            fill(180, 230, 255, 180);
            circle(px - drift * 0.5, py + size * 0.35, circleSize);
        }
    }
}

function drawFastBars(time) {
    const barCount = 6;
    for (let i = 0; i < barCount; i++) {
        const y = height * 0.18 + i * 120;
        const phase = (time / BEAT + i * 0.4) % 1;
        const pulse = easeOutQuad(sin(phase * 180));
        const barW = width * 0.5 + pulse * width * 0.35;
        const x = width * 0.5 + sin(time * 2.7 + i) * 80;
        fill(40, 130, 220, 120 + pulse * 80);
        rect(x, y, barW, 22 + pulse * 18, 12);
        fill(90, 190, 255, 100);
        rect(x - pulse * 70, y + 18, barW * 0.8, 12, 12);
    }
}

function drawTriangleCluster(time) {
    const cx = width * 0.5;
    const cy = height * 0.7;
    const base = 240;
    const spin = time * 30;
    for (let k = 0; k < 8; k++) {
        const angle = k * 45 + spin * (1 + k * 0.08);
        const radius = base + sin(time * 2 + k) * 30;
        const x = cx + cos(angle) * radius;
        const y = cy + sin(angle) * radius * 0.9;
        const s = 90 + sin(time * 2.4 + k * 0.7) * 20;

        fill(80, 170, 255, 190);
        push();
        translate(x, y);
        rotate(angle + time * 12);
        triangle(-s * 0.35, s * 0.3, s * 0.35, s * 0.3, 0, -s * 0.45);
        pop();
    }

    fill(10, 40, 110, 220);
    circle(cx, cy, 220 + sin(time * 0.7) * 30);
    fill(170, 220, 255, 200);
    circle(cx, cy, 90 + sin(time * 1.8) * 18);
}

function drawFloatingOrbs(time) {
    const orbCount = 12;
    for (let i = 0; i < orbCount; i++) {
        const phase = (time * 0.8 + i * 0.9) % 1;
        const speed = 0.4 + (i % 3) * 0.2;
        const x = width * (0.1 + (i / orbCount) * 0.8) + sin(time * 4 * speed + i) * 45;
        const y = height * (0.3 + sin(time * 1.1 + i * 0.8) * 0.18) + cos(time * 3 * speed + i * 0.5) * 30;
        const s = 18 + sin(phase * 360) * 10;

        fill(100, 200, 255, 140);
        circle(x, y, s * 1.4);
        fill(30, 120, 220, 180);
        circle(x, y, s * 0.8);
    }
}

function easeOutQuad(t) {
    return t * (2 - t);
}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('20260413vj', 'png');
    }
}
