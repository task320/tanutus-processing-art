// p5.js 用カラーパレット定義
// 用途: ベースカラー / 発光配線カラー
const COLORS = {
    // ベース
    darkGray: { hex: '#1E1E24', rgb: [30, 30, 36] },
    midnightBlue: { hex: '#0A1128', rgb: [10, 17, 40] },
    deepPurpleBase: { hex: '#2D1B4E', rgb: [45, 27, 78] },

    // 発光配線（寒色系）
    cyan: { hex: '#00F0FF', rgb: [0, 240, 255] },
    neonBlue: { hex: '#1F51FF', rgb: [31, 81, 255] },
    skyBlue: { hex: '#00B8FF', rgb: [0, 184, 255] },
    emeraldGreen: { hex: '#00FF9F', rgb: [0, 255, 159] },
    limeGreen: { hex: '#B4FF00', rgb: [180, 255, 0] },

    // 発光配線（暖色系）
    neonYellow: { hex: '#FFE800', rgb: [255, 232, 0] },
    neonOrange: { hex: '#FF6B00', rgb: [255, 107, 0] },
    neonRed: { hex: '#FF003C', rgb: [255, 0, 60] },

    // 発光配線（紫〜ピンク系）
    electricPurple: { hex: '#9D00FF', rgb: [157, 0, 255] },
    magenta: { hex: '#FF00E5', rgb: [255, 0, 229] },
    hotPink: { hex: '#FF2E9F', rgb: [255, 46, 159] },

    // アクセント（ニュートラル）
    chromeSilver: { hex: '#C7D3DC', rgb: [199, 211, 220] },
};

// p5.Color を取得（setup() 以降、p5 初期化後に呼び出すこと）
function pColor(name) {
    const c = COLORS[name];
    return color(...c.rgb);
}
