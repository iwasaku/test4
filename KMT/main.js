phina.globalize();

console.log = function () { };  // ログを出す時にはコメントアウトする

const SCREEN_WIDTH = 640;                   // スクリーン幅
const SCREEN_HEIGHT = 1136;                 // スクリーン高さ
const SCREEN_CENTER_X = SCREEN_WIDTH / 2;   // スクリーン幅の半分
const SCREEN_CENTER_Y = SCREEN_HEIGHT / 2;  // スクリーン高さの半分

const FONT_FAMILY = "'misaki_gothic','Meiryo',sans-serif";
const ASSETS = {
    font: {
        misaki_gothic: "https://cdn.leafscape.be/misaki/misaki_gothic_web.woff2"
    },
    image: {
        "fade_in": "./resource/fadein_8_amin.png",

        "frame_256_288_w": "./resource/frame_256_288_w.png",
        "frame_256_288_g": "./resource/frame_256_288_g.png",
        "frame_256_288_o": "./resource/frame_256_288_o.png",
        "frame_256_288_r": "./resource/frame_256_288_r.png",
        "frame_256_288_p": "./resource/frame_256_288_p.png",
        "frame_576_192_w": "./resource/frame_576_192_w.png",
        "frame_576_192_g": "./resource/frame_576_192_g.png",
        "frame_576_192_o": "./resource/frame_576_192_o.png",
        "frame_576_192_r": "./resource/frame_576_192_r.png",
        "frame_576_192_p": "./resource/frame_576_192_p.png",
        "frame_320_96_w": "./resource/frame_320_96_w.png",
        "frame_320_96_g": "./resource/frame_320_96_g.png",
        "frame_320_96_o": "./resource/frame_320_96_o.png",
        "frame_320_96_r": "./resource/frame_320_96_r.png",
        "frame_320_96_p": "./resource/frame_320_96_p.png",

        "rip": "./resource/rip.png?20190831",
        "maria": "./resource/maria.png?20190831",

        "pizzza": "./resource/pizzza.png?20190831",
        "negi": "./resource/negi.png?20190831",
        "gohan": "./resource/gohan.png?20190831",
        "meat": "./resource/meat.png?20190831",
        "small": "./resource/small.png?20190831",
        "tissue": "./resource/tissue.png?20190831",
        "ika": "./resource/ika.png?20190831",
        "assassin": "./resource/assassin.png?20190831",
        "cheese": "./resource/cheese.png?20190831",
        "meso": "./resource/meso.png?20190831",
        "nasa": "./resource/nasa.png?20190831",
        "femo": "./resource/femo.png?20190831",
        "perfect": "./resource/perfect.png?20190831",
        "denden": "./resource/denden.png?20190831",
        "baby": "./resource/baby.png?20190831",
        "girl": "./resource/girl.png?20190831",
        "kakin": "./resource/kakin.png?20190831",
        "brachio": "./resource/brachio.png?20190831",
        "ninja": "./resource/ninja.png?20190831",
        "saint": "./resource/saint.png?20190831",
        "champ": "./resource/champ.png?20190831",
        "party": "./resource/party.png?20190831",
        "glutton": "./resource/glutton.png?20190831",
        "anger": "./resource/anger.png?20190831",
        "comp": "./resource/comp.png?20190831",

        "negikko": "./resource/negikko.png?20190831",
        "ice": "./resource/ice.png?20190831",
        "kedama": "./resource/kedama.png?20190831",
        "yurusan": "./resource/yurusan.png?20190831",
        "stress": "./resource/stress.png?20190831",
        "vibes": "./resource/vibes.png?20190831",
        "maane": "./resource/maane.png?20190831",
        "kikumimi": "./resource/kikumimi.png?20190831",
        "nemimi": "./resource/nemimi.png?20190831",
        "runaway": "./resource/runaway.png?20190831",
        "ikacos": "./resource/ikacos.png?20190831",
        "sad": "./resource/sad.png?20190831",

        "last": "./resource/last.png?20191205",
    },
    spritesheet: {
        "fade_in_ss":
        {
            // フレーム情報
            "frame": {
                "width": 8, // 1フレームの画像サイズ（横）
                "height": 8, // 1フレームの画像サイズ（縦）
                "cols": 16, // フレーム数（横）
                "rows": 1, // フレーム数（縦）
            },
            // アニメーション情報
            "animations": {
                "start": {
                    "frames": Array.range(16),
                    "next": "stop",
                    "frequency": 3,
                },
                "stop": {
                    "frames": [15],
                    "next": "stop",
                    "frequency": 1,
                },
            }
        },
    }
};

// 定義
const GAME_SUB_MODE = defineEnum({
    INIT: {
        id: 0,
    },
    MAIN: {
        id: 1,
    },
    FINISH: {
        id: 2,
    },
});

const GAME_MODE = defineEnum({
    FADE_IN: {
        func: function () { GameFadeIn(); },
    },
    INTRO: {
        func: function () { GameIntro(); },
    },
    BATTLE_START: {
        func: function () { GameBattleStart(); },
    },
    CMD_PRE_SELECTOR: {
        func: function () { CmdPreSelector(); },
    },
    CMD_SELECTOR: {
        func: function () { CmdSelector(); },
    },
    CMD_ATTACK: {
        func: function () { CmdAttack(); },
    },
    CMD_DEFENSE: {
        func: function () { CmdDefense(); },
    },
    CMD_ITEM: {
        func: function () { CmdItem(); },
    },
    CMD_ESCAPE: {
        func: function () { CmdEscape(); },
    },
    CMD_SLEEP: {
        func: function () { CmdSleep(); },
    },
    CMD_SNATCH: {
        func: function () { CmdSnatch(); },
    },
    BATTLE_FINISH: {
        func: function () { GameBattleFinish(); },
    },
    CMD_ITEM_USE: {
        func: function () { CmdItemUse(); },
    },
    ITEM_DROP: {
        func: function () { ItemDrop(); },
    },
    ITEM_DROP_RESULT: {
        func: function () { ItemDropResult(); },
    },
    WIN: {
        func: function () { GameWin(); },
    },
    LOOSE: {
        func: function () { GameLoose(); },
    },
    ENDING: {
        func: function () { GameEnding(); },
    },
});

const TEXT_BUFFER_CMD = defineEnum({
    DISP: {
        id: 0,
    },
    DISP_NO_CHK: {
        id: 0,
    },
    ADD_HP: {
        id: 1,
    },
    LEVEL_UP: {
        id: 1,
    },
    TOXIN: {
        id: 1,
    },
    ANTIDOTE: {
        id: 1,
    },
    SHAKE: {
        id: 3,
    },
    SPRITE_ON: {
        id: 3,
    },
    SPRITE_OFF: {
        id: 3,
    },
    FINISH: {
        id: 9999,
    },
});

// 成長タイプテーブル
// プレイヤー用テーブル
const myGrowthTypeTable = [
    { atk: 1.00, agi: 0.90, hp: 0.80, bonus: 2.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.90, agi: 1.00, hp: 0.80, bonus: 2.0, attr: ITEM_ATTR.WATER },
    { atk: 0.90, agi: 0.80, hp: 1.00, bonus: 2.0, attr: ITEM_ATTR.FIRE },
    { atk: 1.00, agi: 0.80, hp: 0.90, bonus: 2.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.80, agi: 1.00, hp: 0.90, bonus: 2.0, attr: ITEM_ATTR.WATER },
    { atk: 0.80, agi: 0.90, hp: 1.00, bonus: 2.0, attr: ITEM_ATTR.FIRE },

    { atk: 1.00, agi: 0.90, hp: 0.80, bonus: 2.5, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.90, agi: 1.00, hp: 0.80, bonus: 2.5, attr: ITEM_ATTR.WATER },
    { atk: 0.90, agi: 0.80, hp: 1.00, bonus: 2.5, attr: ITEM_ATTR.FIRE },
    { atk: 1.00, agi: 0.80, hp: 0.90, bonus: 2.5, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.80, agi: 1.00, hp: 0.90, bonus: 2.5, attr: ITEM_ATTR.WATER },
    { atk: 0.80, agi: 0.90, hp: 1.00, bonus: 2.5, attr: ITEM_ATTR.FIRE },

    { atk: 1.00, agi: 0.90, hp: 0.80, bonus: 3.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.90, agi: 1.00, hp: 0.80, bonus: 3.0, attr: ITEM_ATTR.WATER },
    { atk: 0.90, agi: 0.80, hp: 1.00, bonus: 3.0, attr: ITEM_ATTR.FIRE },
    { atk: 1.00, agi: 0.80, hp: 0.90, bonus: 3.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.80, agi: 1.00, hp: 0.90, bonus: 3.0, attr: ITEM_ATTR.WATER },
    { atk: 0.80, agi: 0.90, hp: 1.00, bonus: 3.0, attr: ITEM_ATTR.FIRE },

    { atk: 1.00, agi: 0.90, hp: 0.80, bonus: 3.5, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.90, agi: 1.00, hp: 0.80, bonus: 3.5, attr: ITEM_ATTR.WATER },
    { atk: 0.90, agi: 0.80, hp: 1.00, bonus: 3.5, attr: ITEM_ATTR.FIRE },
    { atk: 1.00, agi: 0.80, hp: 0.90, bonus: 3.5, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.80, agi: 1.00, hp: 0.90, bonus: 3.5, attr: ITEM_ATTR.WATER },
    { atk: 0.80, agi: 0.90, hp: 1.00, bonus: 3.5, attr: ITEM_ATTR.FIRE },

    { atk: 1.00, agi: 1.00, hp: 1.00, bonus: 4.0, attr: ITEM_ATTR.ALL_P },
];

// 敵用テーブル
const eneGrowthTypeTable = [
    { atk: 1.0, agi: 0.9, hp: 0.8, bonus: 0.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.9, agi: 1.0, hp: 0.8, bonus: 0.0, attr: ITEM_ATTR.WATER },
    { atk: 0.9, agi: 0.8, hp: 1.0, bonus: 0.0, attr: ITEM_ATTR.FIRE },
    { atk: 1.0, agi: 0.8, hp: 0.9, bonus: 0.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.8, agi: 1.0, hp: 0.9, bonus: 0.0, attr: ITEM_ATTR.WATER },
    { atk: 0.8, agi: 0.9, hp: 1.0, bonus: 0.0, attr: ITEM_ATTR.FIRE },

    { atk: 1.0, agi: 0.9, hp: 0.8, bonus: 1.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.9, agi: 1.0, hp: 0.8, bonus: 1.0, attr: ITEM_ATTR.WATER },
    { atk: 0.9, agi: 0.8, hp: 1.0, bonus: 1.0, attr: ITEM_ATTR.FIRE },
    { atk: 1.0, agi: 0.8, hp: 0.9, bonus: 1.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.8, agi: 1.0, hp: 0.9, bonus: 1.0, attr: ITEM_ATTR.WATER },
    { atk: 0.8, agi: 0.9, hp: 1.0, bonus: 1.0, attr: ITEM_ATTR.FIRE },

    { atk: 1.0, agi: 0.9, hp: 0.8, bonus: 2.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.9, agi: 1.0, hp: 0.8, bonus: 2.0, attr: ITEM_ATTR.WATER },
    { atk: 0.9, agi: 0.8, hp: 1.0, bonus: 2.0, attr: ITEM_ATTR.FIRE },
    { atk: 1.0, agi: 0.8, hp: 0.9, bonus: 2.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.8, agi: 1.0, hp: 0.9, bonus: 2.0, attr: ITEM_ATTR.WATER },
    { atk: 0.8, agi: 0.9, hp: 1.0, bonus: 2.0, attr: ITEM_ATTR.FIRE },

    { atk: 1.0, agi: 0.9, hp: 0.8, bonus: 3.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.9, agi: 1.0, hp: 0.8, bonus: 3.0, attr: ITEM_ATTR.WATER },
    { atk: 0.9, agi: 0.8, hp: 1.0, bonus: 3.0, attr: ITEM_ATTR.FIRE },
    { atk: 1.0, agi: 0.8, hp: 0.9, bonus: 3.0, attr: ITEM_ATTR.NEUTRAL },
    { atk: 0.8, agi: 1.0, hp: 0.9, bonus: 3.0, attr: ITEM_ATTR.WATER },
    { atk: 0.8, agi: 0.9, hp: 1.0, bonus: 3.0, attr: ITEM_ATTR.FIRE },

    { atk: 1.0, agi: 1.0, hp: 1.0, bonus: 4.0, attr: ITEM_ATTR.ALL_P },
];

// 経験値テーブル
const expTable = [
    { lv: 0, atk: 2, agi: 2, hp: 7, exp: -32767 },
    { lv: 1, atk: 4, agi: 4, hp: 15, exp: 0 },
    { lv: 2, atk: 5, agi: 4, hp: 22, exp: 7 },
    { lv: 3, atk: 7, agi: 6, hp: 24, exp: 23 },
    { lv: 4, atk: 7, agi: 8, hp: 31, exp: 47 },
    { lv: 5, atk: 12, agi: 10, hp: 35, exp: 110 },

    { lv: 6, atk: 16, agi: 10, hp: 38, exp: 220 },
    { lv: 7, atk: 18, agi: 17, hp: 40, exp: 450 },
    { lv: 8, atk: 22, agi: 20, hp: 46, exp: 800 },
    { lv: 9, atk: 30, agi: 22, hp: 50, exp: 1300 },
    { lv: 10, atk: 35, agi: 31, hp: 54, exp: 2000 },

    { lv: 11, atk: 40, agi: 35, hp: 62, exp: 2900 },
    { lv: 12, atk: 48, agi: 40, hp: 63, exp: 4000 },
    { lv: 13, atk: 52, agi: 48, hp: 70, exp: 5500 },
    { lv: 14, atk: 60, agi: 55, hp: 78, exp: 7500 },
    { lv: 15, atk: 68, agi: 64, hp: 86, exp: 10000 },

    { lv: 16, atk: 72, agi: 70, hp: 92, exp: 13000 },
    { lv: 17, atk: 72, agi: 78, hp: 110, exp: 17000 },
    { lv: 18, atk: 85, agi: 84, hp: 115, exp: 21000 },
    { lv: 19, atk: 87, agi: 86, hp: 130, exp: 25000 },
    { lv: 20, atk: 92, agi: 88, hp: 138, exp: 29000 },

    { lv: 21, atk: 95, agi: 90, hp: 149, exp: 33000 },
    { lv: 22, atk: 97, agi: 90, hp: 158, exp: 37000 },
    { lv: 23, atk: 99, agi: 94, hp: 165, exp: 41000 },
    { lv: 24, atk: 103, agi: 98, hp: 170, exp: 45000 },
    { lv: 25, atk: 113, agi: 100, hp: 174, exp: 49000 },

    { lv: 26, atk: 117, agi: 105, hp: 180, exp: 53000 },
    { lv: 27, atk: 125, agi: 107, hp: 189, exp: 57000 },
    { lv: 28, atk: 130, agi: 115, hp: 195, exp: 61000 },
    { lv: 29, atk: 135, agi: 120, hp: 200, exp: 65000 },
    { lv: 30, atk: 140, agi: 130, hp: 210, exp: 65535 },

    { lv: -1, atk: -1, agi: -1, hp: -1, exp: 2147483647 },
];

// 敵出現テーブル
// ratioは足して100になるようにする
const enemyAppearTable = [
    [{ ene: ENEMY_DEF.ENEMY_0_BS, ratio: 100 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_2, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_2, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_1, ratio: 20 }, { ene: ENEMY_DEF.ENEMY_2, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_3, ratio: 40 }, { ene: ENEMY_DEF.ENEMY_2_P, ratio: 10 },],
    [{ ene: ENEMY_DEF.ENEMY_1, ratio: 20 }, { ene: ENEMY_DEF.ENEMY_2, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_3, ratio: 40 }, { ene: ENEMY_DEF.ENEMY_2_P, ratio: 10 },],
    [{ ene: ENEMY_DEF.ENEMY_2, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_3, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_2_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_2, ratio: 20 }, { ene: ENEMY_DEF.ENEMY_3, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_2_P, ratio: 40 }, { ene: ENEMY_DEF.ENEMY_3_P, ratio: 10 },],
    [{ ene: ENEMY_DEF.ENEMY_2, ratio: 20 }, { ene: ENEMY_DEF.ENEMY_3, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_2_P, ratio: 40 }, { ene: ENEMY_DEF.ENEMY_3_P, ratio: 10 },],
    [{ ene: ENEMY_DEF.ENEMY_4_BS, ratio: 100 },],

    [{ ene: ENEMY_DEF.ENEMY_3, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_4, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_4, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_4, ratio: 20 }, { ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 40 }, { ene: ENEMY_DEF.ENEMY_5_P, ratio: 10 },],
    [{ ene: ENEMY_DEF.ENEMY_4, ratio: 20 }, { ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 40 }, { ene: ENEMY_DEF.ENEMY_5_P, ratio: 10 },],
    [{ ene: ENEMY_DEF.ENEMY_4, ratio: 20 }, { ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 40 }, { ene: ENEMY_DEF.ENEMY_5_P, ratio: 10 },],
    [{ ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_5, ratio: 20 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5_P, ratio: 40 }, { ene: ENEMY_DEF.ENEMY_6_P, ratio: 10 },],
    [{ ene: ENEMY_DEF.ENEMY_5, ratio: 20 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5_P, ratio: 40 }, { ene: ENEMY_DEF.ENEMY_6_P, ratio: 10 },],
    [{ ene: ENEMY_DEF.ENEMY_5, ratio: 20 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5_P, ratio: 40 }, { ene: ENEMY_DEF.ENEMY_6_P, ratio: 10 },],
    [{ ene: ENEMY_DEF.ENEMY_8_BS, ratio: 100 },],

    [{ ene: ENEMY_DEF.ENEMY_6, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_6_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_6, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_6_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_6, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_6_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_6, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_6_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_9_BS, ratio: 100 },],

    [{ ene: ENEMY_DEF.ENEMY_8, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_8_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_8, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_8_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_8, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_8_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_8, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_8_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_11_BS, ratio: 100 },],

    [{ ene: ENEMY_DEF.ENEMY_10, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_10_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_10, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_10_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_10, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_10_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_10, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_10_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12_P, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_13_BS, ratio: 100 },],

    [{ ene: ENEMY_DEF.ENEMY_12, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_12_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_12, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_12_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_12, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_12_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_12, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_12_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_12_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_12_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_12_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_12_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_12_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_15_BS, ratio: 100 },],

    [{ ene: ENEMY_DEF.ENEMY_14, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_14_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_14, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_14_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_14, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_14_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_14, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_14_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_14_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_14_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_14_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_14_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_14_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_17_BS, ratio: 100 },],

    [{ ene: ENEMY_DEF.ENEMY_16, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_16_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_16, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_16_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_16, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_16_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_16, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_16_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_16_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_16_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_16_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_16_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_16_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_19_BS, ratio: 100 },],

    [{ ene: ENEMY_DEF.ENEMY_18, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_18_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_18, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_18_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_18, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_18_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_18, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_18_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_18_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_18_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_18_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_18_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_18_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20_P, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_21_BS, ratio: 100 },],

    [{ ene: ENEMY_DEF.ENEMY_20, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_20_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_20, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_20_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_20, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_20_P, ratio: 15 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_20_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_23, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_20_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_23, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_20_P, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_23, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_22, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_23, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_24, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_25, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_22, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_23, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_24, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_25, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_22, ratio: 10 }, { ene: ENEMY_DEF.ENEMY_23, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_24, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_25, ratio: 30 },],
    [{ ene: ENEMY_DEF.ENEMY_26, ratio: 100 },],
];

// 名前リール
const nameCharaReel = [
    'ネ', 'ム', 'レ', 'ス', 'う', 'て', 'な', '★',
];

//
class CharaStatus {
    constructor() {
        this.eneDef = null;   // my:未使用
        this.growthType = null;
        this.name = "";
        this.exp = 0;     // my:現在の経験値 ene:獲得経験値
        this.lv = 1;
        this.maxHpLv = 0;   // Lvから求めた最大値
        this.maxHpOfs = 0;  // 『いのちのみ』による上昇分
        this.nowHp = 0;     // 現在値
        this.nowAtk = 0;       // Lvから求めた値
        this.tmpAtk = 0;    // 1ターンだけ上昇
        this.tmpAtkScf = 1;    // 1ターンだけn倍
        this.nowAgi = 0;       // Lvから求めた値
        this.tmpAgi = 0;    // 1ターンだけ上昇
        this.tmpAgiScf = 1;    // 1ターンだけn倍
        this.krt = 16;     // クリティカル確率（1000分率）。16なら約1.6%=約1/64の確率で、31なら約3.1%=約1/32の確率で『会心の一撃』が発生
        this.sleepStat = 0;     // ねむり状態（1:睡眠 0:通常 2:起床時）
        this.sleepCnt = 0;     // ねむり状態の経過ターン数
        this.statToxic = false;     // どく状態（false:通常 true:どく）
        this.statCurse = false;     // のろい状態（false:通常 true:のろい）
        this.statDarkness = 0;     // くらやみ状態（0:通常 1:くらやみ 2:まっくらやみ）
        this.cntDarkness = 0;     // くらやみ状態の経過ターン数
        this.useHealingHerbCount = 0;   // やくそう使用回数 my:未使用
        this.useMagicCount = 0;          // 巻物使用回数 my:未使用
        this.weapon = ITEM_DEF.EMPTY;
        this.shield = ITEM_DEF.EMPTY;
        this.gavasss = 0;
        this.itemList = [];
    }
    initPlayer() {
        //前提：this.name は設定済み
        this.growthType = decideGrowthType(this.name);
        this.exp = 0;
        this.lv = 1;
        let li = getLevelInfo(this.lv);
        this.maxHpLv = Math.round((li.hp * this.growthType.hp) + this.growthType.bonus);
        this.maxHpOfs = 0;
        this.nowHp = this.maxHpLv + this.maxHpOfs;
        this.nowAtk = Math.round((li.atk * this.growthType.atk) + this.growthType.bonus);
        this.tmpAtk = 0;
        this.nowAgi = Math.round((li.agi * this.growthType.agi) + this.growthType.bonus);
        this.tmpAgi = 0;
        this.krt = 16;
        this.sleepStat = 0;
        this.sleepCnt = 0;
        this.statToxic = false;
        this.statCurse = false;
        this.statDarkness = 0;
        this.cntDarkness = 0;
        this.useHealingHerbCount = 0;
        this.useMagicCount = 0;
        this.weapon = ITEM_DEF.EMPTY;
        this.shield = ITEM_DEF.EMPTY;
        this.gavasss = 0;
        this.itemList = [
            { eqp: false, def: ITEM_DEF.HERB_00 },
            { eqp: false, def: ITEM_DEF.HERB_00 },
        ];
    }
    initEnemy(enemyDef) {
        this.eneDef = enemyDef;
        this.growthType = eneGrowthTypeTable[Math.floor(Math.random() * (this.eneDef.growthTypeIdx.max - this.eneDef.growthTypeIdx.min) + this.eneDef.growthTypeIdx.min)];
        this.name = this.eneDef.name;
        this.exp = this.eneDef.exp;
        this.lv = this.eneDef.lv;
        let li = getLevelInfo(this.lv);
        if (this.eneDef.hp >= 1) {
            this.maxHpLv = this.eneDef.hp;
        } else {
            this.maxHpLv = Math.round((li.hp * this.growthType.hp) + (this.growthType.bonus));
        }
        this.maxHpOfs = 0;
        this.nowHp = this.maxHpLv + this.maxHpOfs;
        this.nowAtk = Math.round((li.atk * this.growthType.atk) + (this.growthType.bonus));
        this.tmpAtk = 0;
        this.nowAgi = Math.round((li.agi * this.growthType.agi) + (this.growthType.bonus));
        this.tmpAgi = 0;
        this.krt = this.eneDef.krtRatio;
        this.sleepStat = 0;
        this.sleepCnt = 0;
        this.statToxic = false;
        this.statCurse = false;
        this.statDarkness = 0;
        this.cntDarkness = 0;
        this.useHealingHerbCount = 0;
        this.useMagicCount = 0;
        this.weapon = ITEM_DEF.EMPTY;
        this.shield = ITEM_DEF.EMPTY;
        this.gavasss = this.eneDef.gavasss.base + Math.floor(Math.random() * this.eneDef.gavasss.ofs);
        this.itemList = [];
    }

    /* setter/getter */
    getName() {
        return this.name;
    }

    setExp(exp) {
        this.exp = exp;
    }
    addExp(exp) {
        this.exp += exp;
    }
    getExp() {
        return this.exp;
    }

    setLv(lv) {
        this.lv = lv;
    }
    getLv() {
        return this.lv;
    }

    addNowHp(addVal) {
        this.nowHp += addVal;
        if (this.nowHp > this.getMaxHp()) {
            this.nowHp = this.getMaxHp();
        } else if (this.nowHp < 0) {
            this.nowHp = 0;
        }
    }
    getNowHp() {
        return this.nowHp;
    }
    setMaxHpLv(maxHpLv) {
        this.maxHpLv = maxHpLv;
    }
    getMaxHpLv() {
        return this.maxHpLv;
    }
    addMaxHpOfs(addVal) {
        this.maxHpOfs += addVal;
    }
    getMaxHpOfs() {
        return this.maxHpOfs;
    }
    getMaxHp() {
        return this.maxHpLv + this.maxHpOfs;
    }

    getAtk() {
        return this.nowAtk + this.tmpAtk;
    }
    setNowAtk(nowAtk) {
        this.nowAtk = nowAtk;
    }
    getNowAtk() {
        return this.nowAtk;
    }
    setTmpAtk(tmpAtk) {
        this.tmpAtk = tmpAtk;
    }
    getTmpAtk() {
        return this.tmpAtk;
    }
    setTmpAtkScf(tmpAtkScf) {
        this.tmpAtkScf = tmpAtkScf;
    }
    addTmpAtkScf(tmpAtkScf) {
        this.tmpAtkScf += tmpAtkScf;
        if (this.tmpAtkScf > 2) {
            this.tmpAtkScf = 2;
        }
    }
    getTmpAtkScf() {
        return this.tmpAtkScf;
    }

    calcAttack() {
        let weaponValue = this.weapon.value;
        if (this.weapon === ITEM_DEF.WEAPON_06) {
            if (eneStatus.eneDef != null) {
                if (eneStatus.eneDef === ENEMY_DEF.ENEMY_26) {
                    weaponValue = weaponValue * 2;
                }
            }
        }
        let ret = (this.getAtk() * this.tmpAtkScf) + weaponValue;
        console.log("calcAttack=" + ret);
        return ret;
    }

    getAgi() {
        return this.nowAgi + this.tmpAgi;
    }
    setNowAgi(nowAgi) {
        this.nowAgi = nowAgi;
    }
    getNowAgi() {
        return this.nowAgi;
    }
    setTmpAgi(tmpAgi) {
        this.tmpAgi = tmpAgi;
    }
    addTmpAgi(tmpAgi) {
        this.tmpAgi += tmpAgi;
        if (this.tmpAgi > this.nowAgi) {
            this.tmpAgi = this.nowAgi;
        }
    }
    getTmpAgi() {
        return this.tmpAgi;
    }
    setTmpAgiScf(tmpAgiScf) {
        this.tmpAgiScf = tmpAgiScf;
    }
    addTmpAgiScf(tmpAgiScf) {
        this.tmpAgiScf += tmpAgiScf;
        if (this.tmpAgiScf > 1.5) {
            this.tmpAgiScf = 1.5;
        }
    }
    getTmpAgiScf() {
        return this.tmpAgiScf;
    }

    setKrt(krt) {
        this.krt = krt;
    }
    getKrt() {
        return this.krt;
    }

    setSleepStat(stat) {
        this.sleepStat = stat;
    }
    getSleepStat() {
        return this.sleepStat;
    }
    setSleepCnt(cnt) {
        this.sleepCnt = cnt;
    }
    getSleepCnt() {
        return this.sleepCnt;
    }

    calcDefence() {
        let shieldValue = this.shield.value;
        if (this.shield === ITEM_DEF.SHIELD_06) {
            if (eneStatus.eneDef != null) {
                if (eneStatus.eneDef === ENEMY_DEF.ENEMY_26) {
                    shieldValue = shieldValue * 2;
                }
            }
        }
        let ret = ((this.getAgi() / 2) * this.tmpAgiScf) + shieldValue;
        console.log("calcDefense=" + ret);
        return ret;
    }

    setWeapon(weapon) {
        this.weapon = weapon;
    }
    getWeapon() {
        return this.weapon;
    }

    setShield(shield) {
        this.shield = shield;
    }
    getShield() {
        return this.shield;
    }

    setGavasss(gavasss) {
        this.gavasss = gavasss;
    }
    addGavasss(gavasss) {
        this.gavasss += gavasss;
    }
    getGavasss() {
        return this.gavasss;
    }

    setGrowthType(growthType) {
        this.growthType = growthType;
    }
    getGrowthType() {
        return this.growthType;
    }
    addItemList(item) {
        return this.itemList.push({ eqp: false, def: item });
    }
    delItemList(idx) {
        return this.itemList.splice(idx, 1);    // idxは0オリジン
    }
    getItemList() {
        return this.itemList;
    }
}

let mkNameIdx = [0, 2, 4, 6];
let mkNameCnt = 0;
let group0 = null;
let group1 = null;
let group2 = null;
let group3 = null;
let myStatus = null;
let eneStatus = null;
let gameMode = GAME_MODE.FADE_IN;
let gameModeReq = null;
let gameSubMode = GAME_SUB_MODE.INIT;
let gameCounter = 0;
let battleCtrl = {
    initTurnCnt: -1, // 初期化用
    initTurnOwner: -1,  //初期化用
    turnCnt: 0,
    turnOwner: -1,  //0:自分 1:敵
    textBuff: [],
    isDead: false,
    isEscape: false,
    isWin: false,   // true:自分の勝利 false:敵の勝利
    isItemFull: false,  // true:持ち物がいっぱい false:まだ持てる
    gameModeOld: null,
    useItemIdx: -1,
    getItemName: "",
    dropItemName: "",
}
let enemyCount = 0;
let fadeInSprite = null;
let fadeInAnimation = null;
let statusWindowSprite = null;
let statusWindowNameLabel = null;
let statusWindowHpLabel = null;
let statusWindowMpLabel = null;
let statusWindowLvLabel = null;
let statusWindowGavasssLabel = null;
let cmdWindowSprite = null;
let cmdWindowAtkButton = null;
let cmdWindowEscButton = null;
let cmdWindowDefButton = null;
let cmdWindowItemButton = null;
let messageWindowSprite = null;
let messageWindowLabel = null;
let enemyWindowSprite = null;
let enemyWindowLabel = null;
let enemyGraphicSprite = null;
let itemWindowSprite = null;
let itemWindowLabel = null;
let itemWindowItemButton = [];
let itemWindowItemLabel = [];
let itemWindowReturnButton = null;
let itemWindowItemIdx = -1;
let restartButton = null;
let snsButtonSwitch = false;
let tweetStr = null;
let endingGraphicSprite = null;
let endingNameLabel = null;

// 共有ボタン用
let postText = null;
const postURL = "https://iwasaku.github.io/test4/KMT/";
const postTags = "#ネムレス #NEMLESSS #NMLS100";

phina.main(function () {
    var app = GameApp({
        startLabel: 'logo',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        assets: ASSETS,
        fps: 30,
        backgroundColor: 'black',

        // シーンのリストを引数で渡す
        scenes: [
            {
                className: 'LogoScene',
                label: 'logo',
                nextLabel: 'title',
            },
            {
                className: 'TitleScene',
                label: 'title',
                nextLabel: 'game',
            },
            {
                className: 'GameScene',
                label: 'game',
                nextLabel: 'title',
            },
        ]
    });

    // 実行
    app.run();
});


phina.define('LoadingScene', {
    superClass: 'DisplayScene',

    init: function (options) {
        this.superInit(options);
        // 背景色
        var self = this;
        var loader = phina.asset.AssetLoader();

        // 明滅するラベル
        let label = phina.display.Label({
            text: "",
            fontSize: 64,
            fill: 'white',
        }).addChildTo(this).setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y);

        // ロードが進行したときの処理
        loader.onprogress = function (e) {
            // 進捗具合を％で表示する
            label.text = "{0}%".format((e.progress * 100).toFixed(0));
        };

        // ローダーによるロード完了ハンドラ
        loader.onload = function () {
            // Appコアにロード完了を伝える（==次のSceneへ移行）
            self.flare('loaded');
        };

        // ロード開始
        loader.load(options.assets);
    },

});


/*
 * ロゴ
 */
phina.define("LogoScene", {
    superClass: "DisplayScene",

    init: function (option) {
        console.log("LogoScene");
        this.superInit(option);
        this.localTimer = 0;
        this.font1 = false;
        this.font2 = false;
    },

    update: function (app) {
        // フォント読み込み待ち
        var self = this;
        document.fonts.load('12px "misaki_gothic"').then(function () {
            self.font1 = true;
        });
        document.fonts.load('10pt "icomoon"').then(function () {
            self.font2 = true;
        });
        if (this.font1 && this.font2) {
            self.exit();
        }
    }
});

/*
 * タイトル
 */
phina.define("TitleScene", {
    superClass: "DisplayScene",
    init: function (option) {
        console.log("TitleScene");
        this.superInit(option);

        titleLabel = Label({
            text: 'NMLS ONE HUNDRED\nβ1.4 ver.',
            fontSize: 64,
            fontFamily: FONT_FAMILY,
            align: "center",
            fill: '#fff',
            x: SCREEN_CENTER_X,
            y: 320,
        }).addChildTo(this);
        nameLabel = Label({
            text: '',
            fontSize: 32,
            fontFamily: FONT_FAMILY,
            align: "center",
            fill: '#fff',
            x: SCREEN_CENTER_X,
            y: SCREEN_CENTER_Y + (32 * 0),
        }).addChildTo(this);
        startButton = Button({
            text: "はじめる",
            fontSize: 32,
            fontFamily: FONT_FAMILY,
            fill: "#444",
            x: SCREEN_CENTER_X,
            y: SCREEN_CENTER_Y + (SCREEN_CENTER_Y / 2),
        }).addChildTo(this)

        this.localTimer = 0;
        mkNameCnt = 0;
        let self = this;
        myStatus = new CharaStatus();

        if (endingGraphicSprite != null) {
            endingGraphicSprite.remove();
        }

        if (endingNameLabel != null) {
            endingNameLabel.remove();
        }

        startButton.onpush = function () {
            if (mkNameCnt < 3) {
                mkNameCnt++;
            }
        };
    },

    update: function (app) {
        for (let ii = mkNameCnt; ii < 4; ii++) {
            mkNameIdx[ii]++;
            if (mkNameIdx[ii] > 7) mkNameIdx[ii] = 0;
        }
        app.background = "rgba(0, 0, 0, 1.0)"; // 背景色
        let tmpName = "";
        for (let ii = 0; ii < 4; ii++) {
            tmpName += nameCharaReel[mkNameIdx[ii]];
        }
        nameLabel.text = "ゆうしゃ：" + tmpName;
        myStatus.name = tmpName;
        if (mkNameCnt >= 3) {
            myStatus.initPlayer();
            this.exit();
        }
    }
});

/*
 * ゲーム
 */
phina.define("GameScene", {
    superClass: "DisplayScene",

    init: function (option) {
        console.log("GameScene");
        this.superInit(option);

        // 表示プライオリティは 0：奥 → 3：手前 の順番
        group0 = DisplayElement().addChildTo(this);   // status,cmd,message,enemy
        group1 = DisplayElement().addChildTo(this);   // item
        group2 = DisplayElement().addChildTo(this);   // itemcmd
        group3 = DisplayElement().addChildTo(this);   // fadeIn

        // ゲーム中のウィンドウやメニューはここで定義しておく
        // フェードイン
        fadeInSprite = new FadeInSprite().addChildTo(group3);
        fadeInAnimation = FrameAnimation("fade_in_ss").attachTo(fadeInSprite);
        fadeInAnimation.fit = false;
        fadeInAnimation.gotoAndPlay("stop");

        // ステータスウインドウ
        statusWindowSprite = new FrameSprite("frame_256_288_w", 256 / 2 + 32, 288 / 2 + 32, 1, 1).addChildTo(group0);

        statusWindowNameLabel = Label({
            text: "",
            fontSize: 32,
            fontFamily: FONT_FAMILY,
            align: "left",
            baseline: "bottom",
            fill: '#fff',
            shadow: "#000",
            shadowBlur: 0,
            x: 256 / 2 - 32 * 1,
            y: 288 / 2 - 32 * 2,
        }).addChildTo(group0);
        statusWindowNameLabel.alpha = 0.0;
        statusWindowNameLabel.text = myStatus.getName();

        statusWindowHpLabel = Label({
            text: "",
            fontSize: 32,
            fontFamily: FONT_FAMILY,
            align: "left",
            baseline: "bottom",
            fill: '#fff',
            shadow: "#000",
            shadowBlur: 0,
            x: 256 / 2 - 32 * 2.5,
            y: 288 / 2 - 32 * 0,
        }).addChildTo(group0);
        statusWindowHpLabel.alpha = 0.0;
        statusWindowHpLabel.text = "ＨＰ：" + toZenkaku(0, 4);

        statusWindowMpLabel = Label({
            text: "",
            fontSize: 32,
            fontFamily: FONT_FAMILY,
            align: "left",
            baseline: "bottom",
            fill: '#fff',
            shadow: "#000",
            shadowBlur: 0,
            x: 256 / 2 - 32 * 2.5,
            y: 288 / 2 - 32 * -1.5,
        }).addChildTo(group0);
        statusWindowMpLabel.alpha = 0.0;
        statusWindowMpLabel.text = "ＭＰ：" + toZenkaku(0, 4);

        statusWindowLvLabel = Label({
            text: "",
            fontSize: 32,
            fontFamily: FONT_FAMILY,
            align: "left",
            baseline: "bottom",
            fill: '#fff',
            shadow: "#000",
            shadowBlur: 0,
            x: 256 / 2 - 32 * 2.5,
            y: 288 / 2 - 32 * -3,
        }).addChildTo(group0);
        statusWindowLvLabel.alpha = 0.0;
        statusWindowLvLabel.text = "ＬＶ：" + toZenkaku(1, 4);

        statusWindowGavasssLabel = Label({
            text: "",
            fontSize: 32,
            fontFamily: FONT_FAMILY,
            align: "left",
            baseline: "bottom",
            fill: '#fff',
            shadow: "#000",
            shadowBlur: 0,
            x: 256 / 2 - 32 * 2.5,
            y: 288 / 2 - 32 * -4.5,
        }).addChildTo(group0);
        statusWindowGavasssLabel.alpha = 0.0;
        statusWindowGavasssLabel.text = "Ｇ　" + toZenkaku(10000, 5);

        // コマンドウィンドウ
        cmdWindowSprite = new FrameSprite("frame_256_288_w", 256 / 2 + 32, SCREEN_HEIGHT - (288 / 2 + 160), 1, 1).addChildTo(group1);
        cmdWindowAtkButton = Button({
            width: 160,
            height: 60,
            text: "こうげき",
            fontFamily: FONT_FAMILY,
            fontSize: 32,
            fill: "#444",
        }).addChildTo(group1);
        cmdWindowAtkButton.setPosition(256 / 2 + 32, SCREEN_HEIGHT - (288 / 2 + 160) - 105);
        cmdWindowAtkButton.onpush = function () {
            gameModeReq = GAME_MODE.CMD_ATTACK;
        };
        cmdWindowAtkButton.alpha = 0.0;
        cmdWindowAtkButton.sleep();
        cmdWindowEscButton = Button({
            width: 160,
            height: 60,
            text: "にげる",
            fontFamily: FONT_FAMILY,
            fontSize: 32,
            fill: "#444",
        }).addChildTo(group1);
        cmdWindowEscButton.setPosition(256 / 2 + 32, SCREEN_HEIGHT - (288 / 2 + 160) - 35);
        cmdWindowEscButton.onpush = function () {
            gameModeReq = GAME_MODE.CMD_ESCAPE;
        };
        cmdWindowEscButton.alpha = 0.0;
        cmdWindowEscButton.sleep();
        cmdWindowDefButton = Button({
            width: 160,
            height: 60,
            text: "ぼうぎょ",
            fontFamily: FONT_FAMILY,
            fontSize: 32,
            fill: "#444",
        }).addChildTo(group1);
        cmdWindowDefButton.setPosition(256 / 2 + 32, SCREEN_HEIGHT - (288 / 2 + 160) + 35);
        cmdWindowDefButton.onpush = function () {
            gameModeReq = GAME_MODE.CMD_DEFENSE;
        };
        cmdWindowDefButton.alpha = 0.0;
        cmdWindowDefButton.sleep();
        cmdWindowItemButton = Button({
            width: 160,
            height: 60,
            text: "どうぐ",
            fontFamily: FONT_FAMILY,
            fontSize: 32,
            fill: "#444",
        }).addChildTo(group1);
        cmdWindowItemButton.setPosition(256 / 2 + 32, SCREEN_HEIGHT - (288 / 2 + 160) + 105);
        cmdWindowItemButton.onpush = function () {
            gameModeReq = GAME_MODE.CMD_ITEM;
        };
        cmdWindowItemButton.alpha = 0.0;
        cmdWindowItemButton.sleep();

        // メッセージウィンドウ
        messageWindowSprite = new FrameSprite("frame_576_192_w", SCREEN_CENTER_X, SCREEN_CENTER_Y + 256, 1, 1).addChildTo(group0);
        messageWindowLabel = LabelArea({
            width: 576 - 20,
            height: 192 - 20,
            text: "",
            fontSize: 32,
            fontFamily: FONT_FAMILY,
            align: "left",
            fill: '#fff',
            //backgroundColor: "orange",
            padding: 8,
            shadow: "#000",
            shadowBlur: 0,
            x: SCREEN_CENTER_X,
            y: SCREEN_CENTER_Y + 264 - 8,
        }).addChildTo(group0);
        messageWindowLabel.alpha = 0.0;

        // 敵ウィンドウ
        enemyWindowSprite = new FrameSprite("frame_320_96_w", SCREEN_CENTER_X + 160 - 32, SCREEN_CENTER_Y + (32 * 4), 1, 1).addChildTo(group0);
        enemyWindowLabel = Label({
            text: "",
            fontSize: 32,
            fontFamily: FONT_FAMILY,
            align: "left",
            baseline: "bottom",
            fill: '#fff',
            shadow: "#000",
            shadowBlur: 0,
            x: SCREEN_CENTER_X - 16,
            y: SCREEN_CENTER_Y + (32 * 4.5),
        }).addChildTo(group0);
        enemyWindowLabel.alpha = 0.0;

        // 敵画像
        enemyGraphicSprite = new EnemySprite("pizzza", SCREEN_CENTER_X, SCREEN_CENTER_Y - 32, 3, 3).addChildTo(group0);

        // 道具ウィンドウ
        itemWindowSprite = new FrameSprite("frame_256_288_w", SCREEN_CENTER_X, SCREEN_CENTER_Y - 8 + (32 * 6), 2.3, 2.4).addChildTo(group2);
        itemWindowLabel = Label({
            text: "どうぐ",
            fontSize: 32,
            fontFamily: FONT_FAMILY,
            align: "center",
            baseline: "middle",
            fill: '#fff',
            shadow: "#000",
            shadowBlur: 0,
            x: SCREEN_CENTER_X,
            y: SCREEN_CENTER_Y - 32 * 4,
        }).addChildTo(group2);
        itemWindowLabel.alpha = 0.0;

        for (let ii = 0; ii < 16; ii++) {
            itemWindowItemButton[ii] = Button({
                width: 280,
                height: 64,
                text: "",
                fontFamily: FONT_FAMILY,
                fontSize: 32,
                fill: "#888",
            }).addChildTo(group2);
            let xIdx = (ii % 2) * 2 - 1;    // -1:左 1:右
            let yIdx = Math.floor(ii / 2);
            itemWindowItemButton[ii].setPosition(SCREEN_CENTER_X + (32 * 4.5 * xIdx), 70 * 7 + (yIdx * 70));
            itemWindowItemButton[ii].onpush = function () {
                CmdItemExec(this);
            };
            itemWindowItemButton[ii].alpha = 0.0;
            itemWindowItemButton[ii].sleep();
            itemWindowItemButton[ii].itemIdx = ii;
            itemWindowItemButton[ii].isDrop = false;

            itemWindowItemLabel[ii] = Label({
                text: "",
                fontSize: 32,
                fontFamily: FONT_FAMILY,
                align: "left",
                baseline: "middle",
                fill: '#fff',
                shadow: "#000",
                shadowBlur: 0,
                x: SCREEN_CENTER_X + (32 * 4.5 * xIdx) - 32 * 4,
                y: 70 * 7 + (yIdx * 70),
            }).addChildTo(group2);
            itemWindowItemLabel[ii].alpha = 0.0;
        }
        {
            let ii = 16;
            itemWindowReturnButton = Button({
                width: 280,
                height: 64,
                text: "もどる",
                fontFamily: FONT_FAMILY,
                fontSize: 32,
                fill: "#444",
            }).addChildTo(group2);
            let yIdx = Math.floor(ii / 2);
            itemWindowReturnButton.setPosition(SCREEN_CENTER_X, 70 * 7 + (yIdx * 70));
            itemWindowReturnButton.onpush = function () {
                gameModeReq = GAME_MODE.CMD_PRE_SELECTOR;
            };
            itemWindowReturnButton.alpha = 0.0;
            itemWindowReturnButton.sleep();
        }

        restartButton = Button({
            text: "もう一度",
            fontFamily: FONT_FAMILY,
            fontSize: 32,
            fill: "#444",
            x: SCREEN_CENTER_X + 160,
            y: 650,
            width: 160,
            height: 60,
        }).addChildTo(group1);
        let self = this;
        restartButton.onpush = function () {
            self.exit();
        };
        restartButton.alpha = 0.0;
        restartButton.sleep();

        // X
        xButton = Button({
            text: String.fromCharCode(0xe902),
            fontFamily: "icomoon",
            fontSize: 32,
            fill: "#444",
            x: SCREEN_CENTER_X - 160 - 76,
            y: 650,
            width: 60,
            height: 60,
        }).addChildTo(group1);
        xButton.onclick = function () {
            // https://developer.x.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent
            var shareURL = "https://x.com/intent/tweet?text=" + encodeURIComponent(postText + "\n" + postTags + "\n") + "&url=" + encodeURIComponent(postURL);
            window.open(shareURL);
        };
        xButton.alpha = 0.0;
        xButton.sleep();

        // threads
        threadsButton = Button({
            text: String.fromCharCode(0xe901),
            fontFamily: "icomoon",
            fontSize: 32,
            fill: "#444",
            x: SCREEN_CENTER_X - 160,
            y: 650,
            width: 60,
            height: 60,
        }).addChildTo(group1);
        threadsButton.onclick = function () {
            // https://developers.facebook.com/docs/threads/threads-web-intents/
            // web intentでのハッシュタグの扱いが環境（ブラウザ、iOS、Android）によって違いすぎるので『#』を削って通常の文字列にしておく
            var shareURL = "https://www.threads.net/intent/post?text=" + encodeURIComponent(postText + "\n\n" + postTags.replace(/#/g, "")) + "&url=" + encodeURIComponent(postURL);
            window.open(shareURL);
        };
        threadsButton.alpha = 0.0;
        threadsButton.sleep();

        // Bluesky
        bskyButton = Button({
            text: String.fromCharCode(0xe900),
            fontFamily: "icomoon",
            fontSize: 32,
            fill: "#444",
            x: SCREEN_CENTER_X - 160 + 76,
            y: 650,
            width: 60,
            height: 60,
        }).addChildTo(group1);
        bskyButton.onclick = function () {
            // https://docs.bsky.app/docs/advanced-guides/intent-links
            var shareURL = "https://bsky.app/intent/compose?text=" + encodeURIComponent(postText + "\n" + postTags + "\n" + postURL);
            window.open(shareURL);
        };
        bskyButton.alpha = 0.0;
        bskyButton.sleep();

        snsButtonSwitch = false;

        endingNameLabel = Label({
            text: " R.I.P.\n" + myStatus.name,
            fontSize: 48,
            fontFamily: FONT_FAMILY,
            align: "center",
            baseline: "bottom",
            fill: '#222',
            shadow: "#000",
            shadowBlur: 20,
            x: SCREEN_CENTER_X + 16,
            y: SCREEN_CENTER_Y - 32 * 6,
        }).addChildTo(group2);
        endingNameLabel.alpha = 0;

        enemyCount = 0;
        gameMode = GAME_MODE.FADE_IN;
        gameSubMode = GAME_SUB_MODE.INIT;
    },

    onpush: function () {
        //初期化
        //        gameMode = GAME_MODE.FADE_IN;
    },

    // メインループ
    update: function (app) {
        if (gameModeReq != null) {
            gameMode = gameModeReq;
            gameSubMode = GAME_SUB_MODE.INIT;
            gameModeReq = null;
        }
        gameMode.func();

        if (snsButtonSwitch != null) {
            if (snsButtonSwitch) {
                postText = "勇者" + myStatus.name + "は" + tweetStr;

                xButton.alpha = 1.0;
                xButton.wakeUp();
                threadsButton.alpha = 1.0;
                threadsButton.wakeUp();
                bskyButton.alpha = 1.0;
                bskyButton.wakeUp();
            } else {
                xButton.alpha = 0.0;
                xButton.sleep();
                threadsButton.alpha = 0.0;
                threadsButton.sleep();
                bskyButton.alpha = 0.0;
                bskyButton.sleep();
            }
            snsButtonSwitch = null;
        }
        statusWindowHpLabel.text = "ＨＰ：" + toZenkaku(myStatus.getNowHp(), 4);
        let lvStr = (myStatus.statToxic) ? "どく" : "ＬＶ";
        statusWindowLvLabel.text = lvStr + "：" + toZenkaku(myStatus.getLv(), 4);
        statusWindowGavasssLabel.text = "Ｇ　" + toZenkaku(myStatus.getGavasss(), 5);
    }
});


function setColor(flag) {
    let fontColor = "#ffffff";
    let frame256x288Color = "frame_256_288_w";
    let frame576x192Color = "frame_576_192_w";
    let frame320x96Color = "frame_320_96_w";
    if (flag) {
        if (myStatus.statToxic) {
            fontColor = "#7f007f"; // 紫
            frame256x288Color = "frame_256_288_p";
            frame576x192Color = "frame_576_192_p";
            frame320x96Color = "frame_320_96_p";
        } else {
            let tmp = myStatus.getNowHp() / myStatus.getMaxHp();
            if (tmp <= 0.05) {
                fontColor = "#ff0000"; // 赤
                frame256x288Color = "frame_256_288_r";
                frame576x192Color = "frame_576_192_r";
                frame320x96Color = "frame_320_96_r";
            } else if (tmp <= 0.125) {
                fontColor = "#ffa500"; // オレンジ
                frame256x288Color = "frame_256_288_o";
                frame576x192Color = "frame_576_192_o";
                frame320x96Color = "frame_320_96_o";
            } else if (tmp <= 0.25) {
                fontColor = "#00ff00"; // 緑
                frame256x288Color = "frame_256_288_g";
                frame576x192Color = "frame_576_192_g";
                frame320x96Color = "frame_320_96_g";
            }
        }
    }
    statusWindowNameLabel.fill = fontColor;
    statusWindowHpLabel.fill = fontColor;
    statusWindowMpLabel.fill = fontColor;
    statusWindowLvLabel.fill = fontColor;
    statusWindowGavasssLabel.fill = fontColor;
    messageWindowLabel.fill = fontColor;
    enemyWindowLabel.fill = fontColor;
    itemWindowLabel.fill = fontColor;

    statusWindowSprite.setImage(frame256x288Color);
    cmdWindowSprite.setImage(frame256x288Color);
    itemWindowSprite.setImage(frame256x288Color);
    enemyWindowSprite.setImage(frame320x96Color);
    messageWindowSprite.setImage(frame576x192Color);
}

function statusWindowCtrl(flag) {
    statusWindowSprite.alpha = flag ? 1.0 : 0.0;
    statusWindowNameLabel.alpha = flag ? 1.0 : 0.0;
    statusWindowHpLabel.alpha = flag ? 1.0 : 0.0;
    statusWindowMpLabel.alpha = flag ? 1.0 : 0.0;
    statusWindowLvLabel.alpha = flag ? 1.0 : 0.0;
    statusWindowGavasssLabel.alpha = flag ? 1.0 : 0.0;
}
function messageWindowCtrl(flag) {
    messageWindowSprite.alpha = flag ? 1.0 : 0.0;
    messageWindowLabel.alpha = flag ? 1.0 : 0.0;
}
function cmdWindowCtrl(flag) {
    cmdWindowSprite.alpha = flag ? 1.0 : 0.0;
    cmdWindowAtkButton.alpha = flag ? 1.0 : 0.0;
    cmdWindowEscButton.alpha = flag ? 1.0 : 0.0;
    cmdWindowDefButton.alpha = flag ? 1.0 : 0.0;
    cmdWindowItemButton.alpha = flag ? 1.0 : 0.0;
    if (flag) {
        cmdWindowAtkButton.wakeUp();
        cmdWindowEscButton.wakeUp();
        cmdWindowDefButton.wakeUp();
        cmdWindowItemButton.wakeUp();
    } else {
        cmdWindowAtkButton.sleep();
        cmdWindowEscButton.sleep();
        cmdWindowDefButton.sleep();
        cmdWindowItemButton.sleep();
    }
}
function enemyWindowCtrl(flag) {
    enemyWindowSprite.alpha = flag ? 1.0 : 0.0;
    enemyWindowLabel.alpha = flag ? 1.0 : 0.0;
}
function enemyGraphicCtrl(flag) {
    enemyGraphicSprite.alpha = flag ? 1.0 : 0.0;
}
function itemWindowCtrl(itemFlag, isDrop) {
    itemWindowSprite.alpha = itemFlag ? 1.0 : 0.0;
    itemWindowLabel.alpha = itemFlag ? 1.0 : 0.0;
    if (isDrop) {
        itemWindowLabel.text = "すてるどうぐをせんたく";
    } else {
        itemWindowLabel.text = "つかうどうぐをせんたく";
    }
    // ボタンを一旦初期化
    for (let ii = 0; ii < 16; ii++) {
        itemWindowItemButton[ii].alpha = 0.0;
        itemWindowItemButton[ii].sleep();
        itemWindowItemButton[ii].isDrop = isDrop;
        itemWindowItemLabel[ii].alpha = 0.0;
    }
    itemWindowReturnButton.alpha = 0.0;
    itemWindowReturnButton.sleep();

    if (itemFlag) {
        for (let ii = 0; ii < myStatus.itemList.length; ii++) {
            itemWindowItemButton[ii].alpha = 1.0;
            itemWindowItemButton[ii].wakeUp();
            let tmpItemStr;
            if (myStatus.itemList[ii].eqp) {
                tmpItemStr = "Ｅ";
            } else {
                tmpItemStr = "　";
            }
            tmpItemStr += myStatus.itemList[ii].def.name;
            itemWindowItemLabel[ii].text = tmpItemStr;
            itemWindowItemLabel[ii].alpha = 1.0;
        }

        if (isDrop == false) {
            itemWindowReturnButton.alpha = 1.0;
            itemWindowReturnButton.wakeUp();
        }
    }
}

/*以下、ゲームモードの処理*/

/*
フェードインの処理
*/
function GameFadeIn() {
    console.log("FadeIn");
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            // 表示設定
            setColor(true);
            statusWindowCtrl(false);
            cmdWindowCtrl(false);
            messageWindowCtrl(false);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(false);
            itemWindowCtrl(false, false);

            fadeInSprite.alpha = 1.0;
            fadeInSprite.counter = 0;
            fadeInAnimation.gotoAndPlay("start");
            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            if (++fadeInSprite.counter >= 42) {
                gameSubMode = GAME_SUB_MODE.FINISH;
            }
            break;
        case GAME_SUB_MODE.FINISH:
            fadeInSprite.alpha = 0.0;
            gameMode = GAME_MODE.INTRO;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/*
『〜があらわれた！』の処理
*/
function GameIntro() {
    console.log("Intro");
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            myStatus.setTmpAtk(0);
            myStatus.setTmpAtkScf(1);
            myStatus.setTmpAgi(0);
            myStatus.setTmpAgiScf(1);
            myStatus.statCurse = false;
            myStatus.statDarkness = 0;
            battleCtrl.textBuff = [];
            messageWindowLabel.text = "";

            // 敵を決定
            eneStatus = decideEnemy(enemyCount);

            // 表示内容設定
            enemyWindowLabel.text = eneStatus.name;
            enemyGraphicSprite.remove();
            enemyGraphicSprite = new EnemySprite(eneStatus.eneDef.spriteName, SCREEN_CENTER_X, SCREEN_CENTER_Y - 32, 3, 3).addChildTo(group0);
            let tmpText = "ちか" + toZenkaku((enemyCount + 1), 1) + "かい\n";
            tmpText += eneStatus.eneDef.name + "があらわれた！";
            battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpText };
            battleCtrl.textBuff[1] = { frm: 30, cmd: TEXT_BUFFER_CMD.FINISH };
            // アンブッシュを決定
            if (Math.random() < (1 / 32)) {
                //『まものは　こちらに　きづいていない！』
                battleCtrl.textBuff[1] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "まものは　こちらに　きづいていない！" };
                battleCtrl.textBuff[2] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                battleCtrl.initTurnCnt = 1;
                battleCtrl.initTurnOwner = 0;
            } else if (Math.random() < (1 / 32)) {
                //『まものは　いきなり　おそいかかってきた！』
                battleCtrl.textBuff[1] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "まものは　いきなり　おそいかかってきた！" };
                battleCtrl.textBuff[2] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                battleCtrl.initTurnCnt = 1;
                battleCtrl.initTurnOwner = 1;
            } else {
                // 通常
                battleCtrl.initTurnCnt = 0;
                battleCtrl.initTurnOwner = -1;
            }

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(true);
            itemWindowCtrl(false, false);

            gameSubMode = GAME_SUB_MODE.MAIN;
            gameCounter = 0;
        // fall through
        case GAME_SUB_MODE.MAIN:
            messageAndModeCtrl();
            break;
        case GAME_SUB_MODE.FINISH:
            if (battleCtrl.initTurnOwner !== 1) {
                gameMode = GAME_MODE.CMD_PRE_SELECTOR;
                gameSubMode = GAME_SUB_MODE.INIT;
            } else {
                initBattleCtrl();
                battleCtrl.gameModeOld = GAME_MODE.CMD_ATTACK;
                gameMode = GAME_MODE.BATTLE_START;
                gameSubMode = GAME_SUB_MODE.INIT;
            }
            break;
    }
}

/*
コマンドセレクターに入る前のモード
*/
function CmdPreSelector() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            // 表示内容設定
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(true);
            itemWindowCtrl(false, false);

            gameSubMode = GAME_SUB_MODE.MAIN;

            let buffIdx = 0;
            gameCounter = 0;
            battleCtrl.textBuff = [];
            let tmpMsg = ""
            if (myStatus.sleepStat === 1) {
                // 起床判定
                let tmpRatio = 0;
                if (myStatus.sleepCnt == 0) tmpRatio = 5;
                else if (myStatus.sleepCnt == 1) tmpRatio = 25;
                else if (myStatus.sleepCnt == 2) tmpRatio = 50;
                else tmpRatio = 75;
                if (Math.floor(Math.random() * 100) < tmpRatio) {
                    myStatus.sleepStat = 2;
                    myStatus.sleepCnt = 0;
                } else {
                    myStatus.sleepCnt++;
                }
            } else if (myStatus.sleepStat === 2) {
                myStatus.sleepStat = 0;
            }
            if (myStatus.sleepStat === 1) {
                tmpMsg = myStatus.name + "は　ネムっている！";
            } else if (myStatus.sleepStat === 2) {
                tmpMsg = myStatus.name + "は　めをさました！"
            }

            if (myStatus.statDarkness !== 0) {
                if (--myStatus.cntDarkness <= 0) {
                    myStatus.statDarkness = 0;
                    myStatus.cntDarkness = 0;
                    if (tmpMsg.length !== 0) tmpMsg += "\n";
                    tmpMsg += myStatus.name + "は　しりょくが　もどった！";
                }
            }
            if (eneStatus.statDarkness !== 0) {
                if (--eneStatus.cntDarkness <= 0) {
                    eneStatus.statDarkness = 0;
                    eneStatus.cntDarkness = 0;
                    if (tmpMsg.length !== 0) tmpMsg += "\n";
                    tmpMsg += eneStatus.name + "は　しりょくが　もどった！";
                }
            }

            // 表示設定
            if (tmpMsg.length !== 0) {
                battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: tmpMsg };
                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.FINISH };
            } else {
                battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.FINISH };
            }

        // fall through
        case GAME_SUB_MODE.MAIN:
            messageAndModeCtrl();
            break;
        case GAME_SUB_MODE.FINISH:
            if (myStatus.sleepStat === 0) {
                gameMode = GAME_MODE.CMD_SELECTOR;
            } else {
                gameMode = GAME_MODE.CMD_SLEEP;
            }
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/*
コマンドセレクターモード
*/
function CmdSelector() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(true);
            messageWindowCtrl(false);
            enemyWindowCtrl(true);
            enemyGraphicCtrl(true);
            itemWindowCtrl(false, false);

            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            break;
        case GAME_SUB_MODE.FINISH:
            break;
    }
}

/*
 1ターンごとの戦闘の初期化 
 */
function initBattleCtrl() {
    battleCtrl.turnCnt = battleCtrl.initTurnCnt;
    battleCtrl.initTurnCnt = 0;
    if (battleCtrl.initTurnOwner >= 0) {
        battleCtrl.turnOwner = battleCtrl.initTurnOwner;
        battleCtrl.initTurnOwner = -1;
    } else {
        battleCtrl.turnOwner = calcMove(myStatus, eneStatus);
    }
    battleCtrl.isDead = false;
    battleCtrl.isWin = false;
    battleCtrl.isEscape = false;
    battleCtrl.isItemFull = false;
    battleCtrl.gameModeOld = gameMode;
}

/*
『たたかう』コマンド
*/
function CmdAttack() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            // 表示内容設定
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(true);
            itemWindowCtrl(false, false);

        // fall through
        case GAME_SUB_MODE.MAIN:
            initBattleCtrl();
        // fall through
        case GAME_SUB_MODE.FINISH:
            gameMode = GAME_MODE.BATTLE_START;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/*
『ぼうぎょ』コマンド
*/
function CmdDefense() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            // 表示内容設定
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(true);
            itemWindowCtrl(false, false);

            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            initBattleCtrl();
        // fall through
        case GAME_SUB_MODE.FINISH:
            gameMode = GAME_MODE.BATTLE_START;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/*
『逃げる』コマンド
*/
function CmdEscape() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            // 表示内容設定
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(true);
            itemWindowCtrl(false, false);

            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            initBattleCtrl();
        // fall through
        case GAME_SUB_MODE.FINISH:
            gameMode = GAME_MODE.BATTLE_START;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/*
『眠る』コマンド
※モード制御用でコマンドセレクタでは選択できない
*/
function CmdSleep() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            // 表示内容設定
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(true);
            itemWindowCtrl(false, false);

            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            initBattleCtrl();
        // fall through
        case GAME_SUB_MODE.FINISH:
            gameMode = GAME_MODE.BATTLE_START;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/*
『かばんにてをつっこむ』コマンド
※プレイヤーは選択できない
*/
function CmdSnatch() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            // 表示内容設定
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(true);
            itemWindowCtrl(false, false);

            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            initBattleCtrl();
        // fall through
        case GAME_SUB_MODE.FINISH:
            gameMode = GAME_MODE.BATTLE_START;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/*
『どうぐ』コマンド
*/
function CmdItem() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(false);
            enemyWindowCtrl(true);
            enemyGraphicCtrl(true);
            itemWindowCtrl(true, false);

            gameSubMode = GAME_SUB_MODE.MAIN;
            break;
        case GAME_SUB_MODE.MAIN:
            // 各アイテムのボタンでゲームモードを遷移する
            break;
        case GAME_SUB_MODE.FINISH:
            break;
    }
}

/* 
 */
function CmdItemUse() {
    console.log("CmdItemUse");
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            // 表示内容設定
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(true);
            itemWindowCtrl(false, false);

        // fall through
        case GAME_SUB_MODE.MAIN:
            initBattleCtrl();
        // fall through
        case GAME_SUB_MODE.FINISH:
            gameMode = GAME_MODE.BATTLE_START;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/*
*/
function CmdItemExec(btn) {
    let item = myStatus.itemList[btn.itemIdx];
    if (btn.isDrop) {
        // 『捨てる』
        battleCtrl.dropItemName = item.def.name;
        myStatus.delItemList(btn.itemIdx);
        gameMode = GAME_MODE.ITEM_DROP_RESULT;
        gameSubMode = GAME_SUB_MODE.INIT;
    } else {
        if (item.def.exec === ITEM_EXEC.USE) {
            // 『使う』
            // アイテム消費は遷移先で行う
            battleCtrl.useItemIdx = btn.itemIdx;
            gameMode = GAME_MODE.CMD_ITEM_USE;
            gameSubMode = GAME_SUB_MODE.INIT;
        } else if (item.def.exec === ITEM_EXEC.EQUIP) {
            // 『装備』
            for (let ii = 0; ii < myStatus.itemList.length; ii++) {
                // 装備フラグを設定する
                if (ii === btn.itemIdx) {
                    myStatus.itemList[ii].eqp = myStatus.itemList[ii].eqp ? false : true;
                } else {
                    if (myStatus.itemList[ii].def.type === item.def.type) {
                        myStatus.itemList[ii].eqp = false;
                    }
                }
                // ラベルの再生成
                let tmpItemStr;
                if (myStatus.itemList[ii].eqp) {
                    tmpItemStr = "Ｅ";
                } else {
                    tmpItemStr = "　";
                }
                tmpItemStr += myStatus.itemList[ii].def.name;
                itemWindowItemLabel[ii].text = tmpItemStr;
            }
            // モード遷移なし
        }
    }
}

/*
*/
function GameBattleStart() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            console.log("battleCtrl.turnCnt=" + battleCtrl.turnCnt);
            console.log("battleCtrl.turnOwner=" + battleCtrl.turnOwner);
            battleCtrl.textBuff = [];
            messageWindowLabel.text = "";
            let buffIdx = 0;
            let isPlayer = null;
            let tmpAtkStatus = null;
            let tmpDefStatus = null;
            let tmpGameModeOld = null;
            let useHealingHerb = null;
            // 装備設定
            myStatus.weapon = ITEM_DEF.EMPTY;
            myStatus.shield = ITEM_DEF.EMPTY;
            for (let ii = 0; ii < myStatus.itemList.length; ii++) {
                if (myStatus.itemList[ii].eqp) {
                    if (myStatus.itemList[ii].def.type === ITEM_TYPE.WEAPON) {
                        myStatus.weapon = myStatus.itemList[ii].def;
                    }
                    if (myStatus.itemList[ii].def.type === ITEM_TYPE.SHIELD) {
                        myStatus.shield = myStatus.itemList[ii].def;
                    }
                }
            }

            if (battleCtrl.turnOwner === 0) {
                // プレイヤーのこうげき
                isPlayer = true;
                tmpAtkStatus = myStatus;
                tmpDefStatus = eneStatus;
                battleCtrl.turnOwner = 1;
                if (myStatus.sleepStat === 1) {
                    // コマンド選択後に眠らされた場合は上書きする
                    tmpGameModeOld = GAME_MODE.CMD_SLEEP;
                } else {
                    tmpGameModeOld = battleCtrl.gameModeOld;
                }
            } else {
                // 敵のこうげき
                isPlayer = false;
                tmpAtkStatus = eneStatus;
                tmpDefStatus = myStatus;
                battleCtrl.turnOwner = 0;
                console.log("eneStatus=" + eneStatus.useHealingHerbCount + "," + eneStatus.eneDef.useHealingHerbCountMax + "," + eneStatus.getNowHp() + "," + eneStatus.getMaxHp());
                if (eneStatus.sleepStat === 1) {
                    tmpGameModeOld = GAME_MODE.CMD_SLEEP;
                } else if (
                    (myStatus.statToxic !== true) &&
                    (eneStatus.eneDef.isEscape === true) &&
                    (myStatus.getAtk() >= eneStatus.getAtk() * 2) &&
                    (Math.random() <= 0.25)
                ) {
                    tmpGameModeOld = GAME_MODE.CMD_ESCAPE;
                } else if (
                    (eneStatus.useHealingHerbCount < eneStatus.eneDef.useHealingHerbCountMax) &&
                    (((eneStatus.getNowHp() / eneStatus.getMaxHp()) * 100) <= eneStatus.eneDef.useHealingHerbThreshold) &&
                    ((Math.random() * 100) <= eneStatus.eneDef.useHealingHerbRatio)
                ) {
                    tmpGameModeOld = GAME_MODE.CMD_ITEM_USE;
                    useHealingHerb = true;
                    eneStatus.useHealingHerbCount++;
                } else if (
                    (myStatus.statToxic !== true) &&
                    (Math.random() <= 0.031)
                ) {
                    tmpGameModeOld = GAME_MODE.CMD_DEFENSE;
                } else if (
                    (eneStatus.eneDef.isSnatch === true) &&
                    (myStatus.itemList.length >= 1) &&
                    (Math.random() <= 0.70)
                ) {
                    tmpGameModeOld = GAME_MODE.CMD_SNATCH;
                } else if (
                    (eneStatus.useMagicCount < eneStatus.eneDef.useMagicCountMax) &&
                    (Math.floor(Math.random() * 100) > eneStatus.eneDef.attackRatio)
                ) {
                    tmpGameModeOld = GAME_MODE.CMD_ITEM_USE;
                    useHealingHerb = false;
                    eneStatus.useMagicCount++;
                } else {
                    tmpGameModeOld = GAME_MODE.CMD_ATTACK;
                }
            }

            switch (tmpGameModeOld) {
                case GAME_MODE.CMD_ATTACK:
                    console.log("ATTACK");
                    if (isPlayer) {
                        let dmg = calcAttackDamage(myStatus, eneStatus, 1.1);
                        //dmg.val = 300;  //TEST
                        //dmg.krt = true; //TEST
                        battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "の　こうげき！" };
                        if (dmg.val > 0) {
                            let tmpText;
                            if (dmg.krt) tmpText = "かいしんのいちげき！\n";
                            else tmpText = "";
                            tmpText += eneStatus.name + "は　" + toZenkaku(dmg.val, 1) + "のダメージ";
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: tmpText };
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_HP, isPlayer: false, prm: -dmg.val };
                            battleCtrl.textBuff[buffIdx++] = { frm: 31, cmd: TEXT_BUFFER_CMD.SPRITE_OFF };
                            battleCtrl.textBuff[buffIdx++] = { frm: 33, cmd: TEXT_BUFFER_CMD.SPRITE_ON };
                            battleCtrl.textBuff[buffIdx++] = { frm: 35, cmd: TEXT_BUFFER_CMD.SPRITE_OFF };
                            battleCtrl.textBuff[buffIdx++] = { frm: 37, cmd: TEXT_BUFFER_CMD.SPRITE_ON };
                            battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                        } else {
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　ひらりと　みをかわした！" };
                            battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                        }
                    } else {
                        let dmg = calcAttackDamage(eneStatus, myStatus, 1.0);
                        //dmg.val = 1;  //TEST
                        //dmg.krt = false; //TEST
                        battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "の　こうげき！" };
                        if (dmg.val > 0) {
                            let tmpText;
                            if (dmg.krt) tmpText = "つうこんのいちげき！\n";
                            else tmpText = "";
                            tmpText += myStatus.name + "は　" + toZenkaku(dmg.val, 1) + "のダメージ";
                            if (
                                (myStatus.statToxic !== true) &&
                                (Math.floor(Math.random() * 100) < eneStatus.eneDef.toxicRatio)
                            ) {
                                tmpText += "\n" + myStatus.name + "は　どくをうけた！";
                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.TOXIN };
                            }
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: tmpText };
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_HP, isPlayer: true, prm: -dmg.val };
                            battleCtrl.textBuff[buffIdx++] = { frm: 31, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: 5, y: -5 } };
                            battleCtrl.textBuff[buffIdx++] = { frm: 33, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: -5, y: 5 } };
                            battleCtrl.textBuff[buffIdx++] = { frm: 35, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: 5, y: -5 } };
                            battleCtrl.textBuff[buffIdx++] = { frm: 37, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: -5, y: 5 } };
                            battleCtrl.textBuff[buffIdx++] = { frm: 37, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: 0, y: 0 } };
                            battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                        } else {
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　ひらりと　みをかわした！" };
                            battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                        }
                    }
                    break;
                case GAME_MODE.CMD_DEFENSE:
                    console.log("DEFENCE");
                    if (isPlayer) {
                        battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　みをまもっている！" };
                        battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.FINISH };
                        myStatus.addTmpAgi(1);
                    } else {
                        battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　みをまもっている！" };
                        battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.FINISH };
                        eneStatus.addTmpAgi(1);
                    }
                    break;
                case GAME_MODE.CMD_ESCAPE:
                    if (isPlayer) {
                        battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　にげだした！" };
                        // 成功失敗判定
                        if (
                            (myStatus.statToxic !== true) &&
                            (Math.random() < (myStatus.getAgi() / (myStatus.getAgi() + eneStatus.calcDefence())))
                        ) {
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.FINISH };
                            battleCtrl.isEscape = true;
                        } else {
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　まわりこまれてしまった！" };
                            battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                            battleCtrl.isEscape = false;
                        }
                    } else {
                        battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　にげだした！" };
                        battleCtrl.textBuff[1] = { frm: 30, cmd: TEXT_BUFFER_CMD.FINISH };
                        battleCtrl.isEscape = true;
                    }
                    break;
                case GAME_MODE.CMD_SLEEP:
                    if (isPlayer) {
                        // プレイヤーの場合は何もしない
                        battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.FINISH };
                    } else {
                        // 起床判定
                        let tmpRatio = 0;
                        if (eneStatus.sleepCnt == 0) tmpRatio = 0;
                        else if (myStatus.sleepCnt == 1) tmpRatio = 25;
                        else tmpRatio = 50;
                        if (Math.floor(Math.random() * 100) < tmpRatio) {
                            eneStatus.sleepStat = 2;
                            eneStatus.sleepCnt = 0;
                        } else {
                            eneStatus.sleepCnt++;
                        }
                        if (eneStatus.sleepStat === 1) {
                            battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　ネムっている！" };
                        } else {
                            battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　めをさました！" };
                            eneStatus.sleepStat = 0;
                        }
                        battleCtrl.textBuff[1] = { frm: 30, cmd: TEXT_BUFFER_CMD.FINISH };
                    }
                    break;
                case GAME_MODE.CMD_SNATCH:
                    if (isPlayer) {
                        // プレイヤーは来ないはず
                    } else {
                        battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　かばんにてをつっこんだ！" };
                        let tmpMyItemNum = myStatus.itemList.length;
                        for (let ii = 0; ii < myStatus.itemList.length; ii++) {
                            if (myStatus.itemList[ii].eqp) {
                                tmpMyItemNum--;
                            }
                        }

                        if ((tmpMyItemNum == 0) || (Math.random() <= 0.25)) {
                            // 持ち物０もしくは25%の確率で失敗
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもとられなかった！" };
                        } else {
                            let tmpSnatchItemName;
                            let tmpSnatchItemIdx;
                            let tmpSnatchSuccess = false;
                            for (let ii = 0; ii < 10000; ii++) {
                                tmpSnatchItemIdx = Math.floor(Math.random() * tmpMyItemNum);
                                if (myStatus.itemList[tmpSnatchItemIdx].eqp) continue; // 装備中のアイテムはぬすめない
                                tmpSnatchSuccess = true;
                                break;
                            }
                            if (tmpSnatchSuccess) {
                                if (battleCtrl.turnCnt === 0) { // 敵が先行
                                    if (battleCtrl.gameModeOld === GAME_MODE.CMD_ITEM_USE) {    // プレイヤーがアイテムを使おうとしている
                                        if (tmpSnatchItemIdx === battleCtrl.useItemIdx) {   // プレイヤーが使おうとしているアイテム
                                            tmpSnatchSuccess = false;   // ぬすめない
                                        } else if (tmpSnatchItemIdx < battleCtrl.useItemIdx) { // プレイヤーが使おうとしているアイテムより前のアイテム
                                            battleCtrl.useItemIdx--;    // プレイヤーが使うアイテムを1つ前にずらす
                                        }
                                    }
                                }
                            }
                            if (tmpSnatchSuccess) {
                                tmpSnatchItemName = myStatus.getItemList()[tmpSnatchItemIdx].def.name;
                                myStatus.delItemList(tmpSnatchItemIdx);
                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: tmpSnatchItemName + "を　ぬすまれた！！" };
                            } else {
                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもとられなかった！" };
                            }
                        }
                    }
                    battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                    break;
                case GAME_MODE.CMD_ITEM_USE:
                    console.log("ITEM_USE");
                    if (isPlayer) {
                        // 武器・盾の装備はここにこない
                        // 魔法と薬草のみ
                        let tmpItem = myStatus.getItemList()[battleCtrl.useItemIdx].def;
                        battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　" + tmpItem.name + "を　つかった！" };
                        switch (tmpItem.type) {
                            case ITEM_TYPE.HERB_0:
                                let tmpStr = "";
                                if (tmpItem.value < 9999) {
                                    tmpStr = myStatus.name + "は　" + toZenkaku(tmpItem.value, 1) + "ポイントかいふく！"
                                } else {
                                    tmpStr = myStatus.name + "は　ぜんかいした！"
                                }
                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: tmpStr };
                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_HP, isPlayer: true, prm: tmpItem.value };
                                break;
                            case ITEM_TYPE.HERB_1:
                                // どくけしそう
                                if (myStatus.statToxic) {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "のからだから　どくそがきえた！" };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ANTIDOTE };
                                } else {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                }
                                break;
                            case ITEM_TYPE.HERB_2:
                                // けいけんのみ
                                if (myStatus.getLv() >= 30) {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                } else {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　" + "レベルがあがった" };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.LEVEL_UP };
                                }
                                break;
                            case ITEM_TYPE.HERB_3:
                                // いのちのみ
                                if (myStatus.getMaxHpOfs() >= 100) {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                } else {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　" + "さいだいＨＰが　" + toZenkaku(tmpItem.value, 1) + "あがった" };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_MAX_HP, prm: tmpItem.value };
                                }
                                break;
                            case ITEM_TYPE.MAGIC_INDIRCT_ATTACK:
                                // 間接攻撃
                                switch (tmpItem) {
                                    case ITEM_DEF.MAGIC_ATK_SCF:
                                        if (
                                            (myStatus.statCurse === true) ||
                                            (Math.floor(Math.random() * 100) > tmpItem.success)
                                        ) {
                                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                        } else {
                                            let oldTempAtkScf = myStatus.getTmpAtkScf();
                                            myStatus.addTmpAtkScf(1);
                                            if (oldTempAtkScf == myStatus.getTmpAtkScf()) {
                                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                            } else {
                                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "このバトルのあいだ　こうげきりょくが　" + toZenkaku(myStatus.getTmpAtkScf(), 1) + "ばいアップ" };
                                            }
                                        }
                                        break;
                                    case ITEM_DEF.MAGIC_AGI_SCF:
                                        if (
                                            (myStatus.statCurse === true) ||
                                            (Math.floor(Math.random() * 100) > tmpItem.success)
                                        ) {
                                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                        } else {
                                            let oldTempAgiScf = myStatus.getTmpAgiScf();
                                            myStatus.addTmpAgiScf(0.5);
                                            if (oldTempAgiScf == myStatus.getTmpAgiScf()) {
                                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                            } else {
                                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "このバトルのあいだ　ぼうぎょりょくが　" + toZenkaku(myStatus.getTmpAgiScf(), 1) + "ばいアップ" };
                                            }
                                        }
                                        break;
                                    case ITEM_DEF.MAGIC_SLEEP:
                                        if (
                                            (myStatus.statCurse === true) ||
                                            (eneStatus.sleepStat !== 0) ||
                                            (eneStatus.statDarkness !== 0) ||
                                            (Math.floor(Math.random() * 100) > tmpItem.success)
                                        ) {
                                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                        } else {
                                            eneStatus.sleepStat = 1;
                                            eneStatus.sleepCnt = 0;
                                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　ネムった！" };
                                        }
                                        break;
                                    case ITEM_DEF.MAGIC_DARKNESS_LV1:
                                    case ITEM_DEF.MAGIC_DARKNESS_LV2:
                                        if (
                                            (myStatus.statCurse === true) ||
                                            (eneStatus.sleepStat !== 0) ||
                                            (eneStatus.statDarkness !== 0) ||
                                            (Math.floor(Math.random() * 100) > tmpItem.success)
                                        ) {
                                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                        } else if (tmpItem === ITEM_DEF.MAGIC_DARKNESS_LV1) {
                                            eneStatus.statDarkness = 1;
                                            eneStatus.cntDarkness = Math.floor(Math.random() * 3) + 2;   // 0~2→2~4
                                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　ひかりに　つつまれた！\n" + eneStatus.name + "の　こうげきが　あたりにくくなった！" };
                                        } else if (tmpItem === ITEM_DEF.MAGIC_DARKNESS_LV2) {
                                            eneStatus.statDarkness = 2;
                                            eneStatus.cntDarkness = Math.floor(Math.random() * 4) + 5;   // 0~3→5~8
                                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　やみに　つつまれた！\n" + eneStatus.name + "の　こうげきが　あたりにくくなった！" };
                                        } else {
                                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                        }
                                        break;
                                    default:
                                        battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                }
                                break;
                            case ITEM_TYPE.MAGIC_DIRECT_ATTACK:
                                // 直接攻撃
                                let tmpSuccessRatio = tmpItem.success + ((myStatus.getLv() - 9) * 1.875);// 最初に魔法を使うのがLv9
                                if (tmpSuccessRatio > 100) tmpSuccessRatio = 100;
                                if (
                                    (myStatus.statCurse === true) ||
                                    (Math.floor(Math.random() * 100) > tmpSuccessRatio)
                                ) {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                } else {
                                    let dmgVal = Math.round(getNormalDistribution(tmpItem.min, tmpItem.max) * calcMagicDmgRatio(tmpItem.attr, eneStatus.eneDef.attr) * getNormalDistribution(1.0, 2.5));
                                    let tmpText = "";
                                    tmpText += eneStatus.name + "は　" + toZenkaku(dmgVal, 1) + "のダメージ";
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpText };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_HP, isPlayer: false, prm: -dmgVal };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 31, cmd: TEXT_BUFFER_CMD.SPRITE_OFF };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 33, cmd: TEXT_BUFFER_CMD.SPRITE_ON };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 35, cmd: TEXT_BUFFER_CMD.SPRITE_OFF };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 37, cmd: TEXT_BUFFER_CMD.SPRITE_ON };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                                }
                                break;
                        }
                        battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                        myStatus.delItemList(battleCtrl.useItemIdx);
                    } else {
                        let tmpItem;
                        if (useHealingHerb) {
                            // 回復使用の場合
                            tmpItem = decideHealingHerb(eneStatus.eneDef);
                        } else {
                            // 通常の場合
                            tmpItem = decideMagic(eneStatus.eneDef);

                            // ネムり中 or くらやみ中にはSLEEP or DARKNESSは使わない
                            if ((tmpItem === ITEM_DEF.MAGIC_SLEEP) || (tmpItem === ITEM_DEF.MAGIC_DARKNESS_LV1) || (tmpItem === ITEM_DEF.MAGIC_DARKNESS_LV2)) {
                                if ((myStatus.sleepStat !== 0) || (myStatus.statDarkness !== 0)) {
                                    for (; ;) {
                                        let altMgc = decideMagic(eneStatus.eneDef);
                                        if (altMgc === ITEM_DEF.MAGIC_SLEEP) continue;
                                        if (altMgc === ITEM_DEF.MAGIC_DARKNESS_LV1) continue;
                                        if (altMgc === ITEM_DEF.MAGIC_DARKNESS_LV2) continue;
                                        tmpItem = altMgc;
                                        break;
                                    }
                                }
                            }

                            // のろい中はCURSEを使わない 
                            if (tmpItem === ITEM_DEF.MAGIC_CURSE) {
                                if (myStatus.statCurse === true) {
                                    for (; ;) {
                                        let altMgc = decideMagic(eneStatus.eneDef);
                                        if (altMgc === ITEM_DEF.MAGIC_CURSE) continue;
                                        tmpItem = altMgc;
                                        break;
                                    }
                                }
                            }
                        }

                        battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　" + tmpItem.name + "を　つかった！" };

                        switch (tmpItem.type) {
                            case ITEM_TYPE.HERB_0:
                                let tmpStr = "";
                                if (tmpItem.value < 9999) {
                                    tmpStr = eneStatus.name + "は　" + toZenkaku(tmpItem.value, 1) + "ポイントかいふく！"
                                } else {
                                    tmpStr = eneStatus.name + "は　ぜんかいした！"
                                }
                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: tmpStr };
                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_HP, isPlayer: false, prm: tmpItem.value };
                                break;
                            case ITEM_TYPE.HERB_1:
                                // どくけしそう
                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                break;
                            case ITEM_TYPE.HERB_2:
                                // けいけんのみ
                                if (eneStatus.getLv() >= 30) {
                                } else {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　" + "レベルがあがった" };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.LEVEL_UP };
                                }
                                break;
                            case ITEM_TYPE.HERB_3:
                                // いのちのみ
                                if (myStatus.getMaxHpOfs() >= 100) {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                } else {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　" + "さいだいＨＰが　" + toZenkaku(tmpItem.value, 1) + "あがった" };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_MAX_HP, prm: tmpItem.value };
                                }
                                break;
                            case ITEM_TYPE.MAGIC_DIRECT_ATTACK:
                                // 直接攻撃
                                let tmpSuccessRatio = tmpItem.success + ((eneStatus.getLv() - 9) * 1.875);// 最初に魔法を使うのがLv9
                                if (tmpSuccessRatio > 90) tmpSuccessRatio = 90;
                                if (
                                    (myStatus.statToxic !== true) &&
                                    (Math.floor(Math.random() * 100) > tmpSuccessRatio)
                                ) {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                } else {
                                    let dmg1 = getRandomValue(tmpItem.min, tmpItem.max);
                                    let dmg2 = getRandomValue(tmpItem.min, tmpItem.max);
                                    let dmgVal = Math.round(((dmg1 + dmg2) / 2.0) * calcMagicDmgRatio(tmpItem, myStatus.growthType.attr));
                                    let tmpText = "";
                                    tmpText += myStatus.name + "は　" + toZenkaku(dmgVal, 1) + "のダメージ";
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpText };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_HP, isPlayer: true, prm: -dmgVal };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 31, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: 5, y: -5 } };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 33, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: -5, y: 5 } };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 35, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: 5, y: -5 } };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 37, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: -5, y: 5 } };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 37, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: 0, y: 0 } };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                                }
                                break;
                            case ITEM_TYPE.MAGIC_INDIRCT_ATTACK:
                                // 間接攻撃
                                switch (tmpItem) {
                                    case ITEM_DEF.MAGIC_SLEEP:
                                        if (
                                            (myStatus.statToxic !== true) &&
                                            (Math.floor(Math.random() * 100) > tmpItem.success)
                                        ) {
                                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                        } else {
                                            myStatus.sleepStat = 1;
                                            myStatus.sleepCnt = 0;
                                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　ネムってしまった！" };
                                        }
                                        break;
                                    case ITEM_DEF.MAGIC_CURSE:
                                        myStatus.statCurse = true;
                                        battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　のろいを　かけた！\n" + myStatus.name + "の　巻物は　ふうじられた！" };
                                        break;
                                    case ITEM_DEF.MAGIC_DARKNESS_LV1:
                                    case ITEM_DEF.MAGIC_DARKNESS_LV2:
                                        if (Math.floor(Math.random() * 100) > tmpItem.success) {
                                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                        } else {
                                            if (tmpItem === ITEM_DEF.MAGIC_DARKNESS_LV1) {
                                                myStatus.statDarkness = 1;
                                                myStatus.cntDarkness = Math.floor(Math.random() * 3) + 2;   // 0~2→2~4
                                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　ひかりに　つつまれた！\n" + myStatus.name + "の　こうげきが　あたりにくくなった！" };
                                            } else if (tmpItem === ITEM_DEF.MAGIC_DARKNESS_LV2) {
                                                myStatus.statDarkness = 2;
                                                myStatus.cntDarkness = Math.floor(Math.random() * 4) + 5;   // 0~3→5~8
                                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　やみに　つつまれた！\n" + myStatus.name + "の　こうげきが　あたりにくくなった！" };
                                            } else {
                                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                            }
                                        }
                                        break;
                                    default:
                                        battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                }
                                break;
                        }
                        battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                    }
                    break;
            }

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(true);
            itemWindowCtrl(false, false);

            battleCtrl.turnCnt++;
            gameCounter = 0;
            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            messageAndModeCtrl();
            break;
        case GAME_SUB_MODE.FINISH:
            if (battleCtrl.isEscape) {
                gameMode = GAME_MODE.BATTLE_FINISH;
            } else if (battleCtrl.isDead) {
                gameMode = GAME_MODE.BATTLE_FINISH;
            } else {
                if (battleCtrl.turnCnt < 2) {
                    gameMode = GAME_MODE.BATTLE_START;
                } else {
                    gameMode = GAME_MODE.CMD_PRE_SELECTOR;
                }
            }
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}
/*
*/
function GameBattleFinish() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            battleCtrl.textBuff = [];
            messageWindowLabel.text = "";
            let tmpIdx = 0;
            let tmpStr = "";
            if (battleCtrl.isEscape) {
                // 何もしない
            } else if (battleCtrl.isWin) {
                let tmpExp = getRandomValue(eneStatus.eneDef.exp.min, eneStatus.eneDef.exp.max);
                let tmpGavasss = getRandomValue(eneStatus.eneDef.gavasss.min, eneStatus.eneDef.gavasss.max);
                tmpStr += "ちか" + toZenkaku((enemyCount + 1), 1) + "かいの　" + eneStatus.name + "を　やっつけた！\n";
                battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpStr };

                tmpStr = toZenkaku(tmpExp) + "ポイントの　けいけんちを　かくとく！\n";
                myStatus.addExp(tmpExp);
                tmpStr += toZenkaku(tmpGavasss, 1) + "ガバスを　てにいれた！\n";
                myStatus.addGavasss(tmpGavasss);
                battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpStr };

                // レベルアップ処理
                let result = checkLevelUp();
                if (result.isLevelUp) {
                    tmpStr = myStatus.name + "は　レベルが上った\n";
                    if (result.hp > 0) {
                        tmpStr += "さいだいＨＰが　" + toZenkaku(result.hp) + "あがった！\n";
                    }
                    if (result.atk > 0) {
                        tmpStr += "ちからが　" + toZenkaku(result.atk) + "あがった！\n";
                    }
                    if (result.agi > 0) {
                        tmpStr += "すばやさが　" + toZenkaku(result.agi) + "あがった！";
                    }
                    battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpStr };
                }

                // アイテム獲得処理
                let tmpItem = decideItem(eneStatus.eneDef);
                if (tmpItem === null) {
                    battleCtrl.isItemFull = false;
                } else {
                    tmpStr = eneStatus.name + "は　" + tmpItem.name + "　を　もっていた！\n";
                    myStatus.addItemList(tmpItem)
                    if (myStatus.itemList.length <= 15) {
                        tmpStr += myStatus.name + "は　" + tmpItem.name + "　を　てにいれた！";
                        battleCtrl.isItemFull = false;
                    } else {
                        tmpStr += "しかし　これいじょう　どうぐを　もつことはできない！";
                        battleCtrl.isItemFull = true;
                        battleCtrl.getItemName = tmpItem.name;
                    }
                    battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpStr };
                }
                battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.FINISH };
            } else {
                battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　ちからつきた．．．" };
                battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30 + 90, cmd: TEXT_BUFFER_CMD.FINISH };
            }

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(false);
            itemWindowCtrl(false, false);

            gameCounter = 0;
            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            if (!battleCtrl.isEscape) {
                messageAndModeCtrl();
                break;
            }
        // fall through
        case GAME_SUB_MODE.FINISH:
            if (battleCtrl.isEscape) {
                gameMode = GAME_MODE.FADE_IN;
            } else if (battleCtrl.isWin) {
                enemyCount++;
                if (enemyCount >= 100) {
                    gameMode = GAME_MODE.WIN;
                } else {
                    if (battleCtrl.isItemFull) {
                        gameMode = GAME_MODE.ITEM_DROP;
                    } else {
                        gameMode = GAME_MODE.FADE_IN;
                    }
                }
            } else {
                gameMode = GAME_MODE.ENDING;
            }
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/*
*/
function ItemDrop() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            battleCtrl.textBuff = [];
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(false);
            itemWindowCtrl(true, true);

            gameCounter = 0;
            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            messageAndModeCtrl();
            break;
        case GAME_SUB_MODE.FINISH:
            gameMode = GAME_MODE.FADE_IN;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/**
 * 
 */
function ItemDropResult() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            battleCtrl.textBuff = [];
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(true);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(false);
            itemWindowCtrl(false, false);

            gameCounter = 0;
            gameSubMode = GAME_SUB_MODE.MAIN;

            battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　" + battleCtrl.dropItemName + "　を　すてて　" + battleCtrl.getItemName + "　を　てにいれた！" };
            battleCtrl.textBuff[1] = { frm: 90, cmd: TEXT_BUFFER_CMD.FINISH };
        // fall through
        case GAME_SUB_MODE.MAIN:
            messageAndModeCtrl();
            break;
        case GAME_SUB_MODE.FINISH:
            gameMode = GAME_MODE.FADE_IN;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/**
 * 
 */
function GameWin() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            battleCtrl.textBuff = [];
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(false);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(false);
            itemWindowCtrl(false, false);

            gameCounter = 0;
            gameSubMode = GAME_SUB_MODE.MAIN;

            battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: "こ．．．このわたしが　やられるとは．．．\nおまえは　いったい　なにものだ．．．" };
            battleCtrl.textBuff[1] = { frm: 150, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　わたしを　たおしても　だい２　だい３の　ＮＭＬＳが　あらわれるだろう．．．" };
            battleCtrl.textBuff[2] = { frm: 300, cmd: TEXT_BUFFER_CMD.FINISH };
        // fall through
        case GAME_SUB_MODE.MAIN:
            messageAndModeCtrl();
            break;
        case GAME_SUB_MODE.FINISH:
            gameMode = GAME_MODE.ENDING;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/**
 * 
 */
function GameLoose() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            battleCtrl.textBuff = [];
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(false);
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(false);
            itemWindowCtrl(false, false);

            gameCounter = 0;
            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            messageAndModeCtrl();
            break;
        case GAME_SUB_MODE.FINISH:
            break;
    }
}

/**
 * 
 */
function GameEnding() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            battleCtrl.textBuff = [];
            messageWindowLabel.text = "";

            // 表示コントロール
            setColor(false);
            statusWindowCtrl(false);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(false);
            itemWindowCtrl(false, false);

            gameCounter = 0;
            gameSubMode = GAME_SUB_MODE.MAIN;

            let tmpStr = "";
            let tmpSpriteName = "";
            if (enemyCount === 0) {
                tmpStr = "こんかい　" + myStatus.name + "は　ちか１かいで　ちからつきた\n";
                tweetStr = "地下１階で力尽きた\n";
                tmpSpriteName = "rip";
                endingNameLabel.alpha = 0.7;
            } else if (enemyCount === 100) {
                tmpStr = "こんかい　" + myStatus.name + "は　ちか１００かい　すべてクリアした！\n";
                tweetStr = "地下１００階すべてクリアした！\n";
                tmpSpriteName = "maria";
                endingNameLabel.alpha = 0;
            } else {
                tmpStr = "こんかい　" + myStatus.name + "は　ちか" + toZenkaku(enemyCount, 1) + "かいまで　クリアした！\n";
                tweetStr = "地下" + toZenkaku(enemyCount, 1) + "階までクリアした！\n";
                tmpSpriteName = "rip";
                endingNameLabel.alpha = 0.7;
            }
            if (myStatus.gavasss > 0) {
                tmpStr += "Lv" + toZenkaku(myStatus.lv, 1) + "だった！\n";
                tmpStr += toZenkaku(myStatus.gavasss, 1) + "ガバス　を　かくとく！\n";
                tweetStr += "Lv" + toZenkaku(myStatus.lv, 1) + "だった！\n";
                tweetStr += toZenkaku(myStatus.gavasss, 1) + "ガバスを獲得した！\n";
            } else {
                tmpStr += "Lv" + toZenkaku(myStatus.lv, 1) + "だった！\n";
                tweetStr += "Lv" + toZenkaku(myStatus.lv, 1) + "だった！\n";
            }

            battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpStr };
            battleCtrl.textBuff[1] = { frm: 90, cmd: TEXT_BUFFER_CMD.FINISH };

            restartButton.wakeUp();
            restartButton.alpha = 1.0;
            snsButtonSwitch = true;

            endingGraphicSprite = new EnemySprite(tmpSpriteName, SCREEN_CENTER_X, SCREEN_CENTER_Y - 240, 3, 3).addChildTo(group0);
            endingGraphicSprite.alpha = 1;

        // fall through
        case GAME_SUB_MODE.MAIN:
            messageAndModeCtrl();
            break;
        case GAME_SUB_MODE.FINISH:
            break;
    }
}

/* 以下、便利関数 */
/*
*/
function messageAndModeCtrl() {
    for (let idx = 0; idx < battleCtrl.textBuff.length; idx++) {
        let tmp = battleCtrl.textBuff[idx];
        if (gameCounter != tmp.frm) continue;
        switch (tmp.cmd) {
            case TEXT_BUFFER_CMD.DISP:
                messageWindowLabel.text = tmp.text;
                break;
            case TEXT_BUFFER_CMD.DISP_NO_CHK:
                messageWindowLabel.text = tmp.text;
                break;

            case TEXT_BUFFER_CMD.ADD_HP:
                if (tmp.isPlayer) {
                    myStatus.addNowHp(tmp.prm);
                    if (myStatus.getNowHp() <= 0) {
                        battleCtrl.isDead = true;
                        battleCtrl.isWin = false;
                    }
                } else {
                    eneStatus.addNowHp(tmp.prm);
                    if (eneStatus.getNowHp() <= 0) {
                        battleCtrl.isDead = true;
                        battleCtrl.isWin = true;
                    }
                }
                break;

            case TEXT_BUFFER_CMD.ADD_MAX_HP:
                myStatus.addMaxHpOfs(tmp.prm);
                myStatus.addNowHp(2100000000);  // 全回復
                break;

            case TEXT_BUFFER_CMD.LEVEL_UP:
                let nextLvInfo = getLevelInfo(myStatus.getLv() + 1);
                myStatus.setExp(nextLvInfo.exp);
                checkLevelUp();
                break;

            case TEXT_BUFFER_CMD.TOXIN:
                myStatus.statToxic = true;
                break;

            case TEXT_BUFFER_CMD.ANTIDOTE:
                myStatus.statToxic = false;
                break;

            case TEXT_BUFFER_CMD.SHAKE:
                statusWindowSprite.setPosition((256 / 2 + 32) + tmp.prm.x, (288 / 2 + 32) + tmp.prm.y);
                messageWindowSprite.setPosition(SCREEN_CENTER_X + tmp.prm.x, SCREEN_CENTER_Y + 256 + tmp.prm.y);
                break;

            case TEXT_BUFFER_CMD.SPRITE_ON:
                enemyGraphicCtrl(true);
                break;

            case TEXT_BUFFER_CMD.SPRITE_OFF:
                enemyGraphicCtrl(false);
                break;

            case TEXT_BUFFER_CMD.FINISH:
                gameSubMode = GAME_SUB_MODE.FINISH;
                break;
        }
    }
    gameCounter++;
}

/*
 * FadeIn用スプライトの定義
 */
phina.define("FadeInSprite", {
    superClass: "Sprite",

    init: function () {
        this.superInit('fade_in', SCREEN_WIDTH, SCREEN_HEIGHT);
        this.direct = '';
        this.zRot = 0;
        this.setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y).setScale(1, 1);
        this.setInteractive(false);
        this.setBoundingType("rect");
        this.alpha = 0.0;
        this.counter = 0;
    },

    // canvasのアンチエイリアスを無効にするためにdrawメソッドをオーバーライドする
    draw: function (canvas) {
        canvas.save();                          //canvasの状態をスタックに保存
        canvas.imageSmoothingEnabled = false;   //拡大時の補完を無効にする
        this.superMethod('draw', canvas);       //Spriteのdrawメソッド呼び出し
        canvas.restore();                       //他に影響が出ないように状態を戻す
    },

    update: function (app) {
    },
});

/*
 * フレーム用スプライトの定義
 */
phina.define("FrameSprite", {
    superClass: 'Sprite',

    init: function (spriteName, xPos, yPos, xScl, yScl) {
        this.superInit(spriteName);
        this.direct = '';
        this.zRot = 0;
        this.setPosition(xPos, yPos).setScale(xScl, yScl);
        this.setInteractive(false);
        this.setBoundingType("rect");
        this.alpha = 0.0;
    },

    update: function (app) {
    },
});
phina.define("EnemySprite", {
    superClass: 'Sprite',

    init: function (spriteName, xPos, yPos, xScl, yScl) {
        this.superInit(spriteName);
        this.direct = '';
        this.zRot = 0;
        this.setPosition(xPos, yPos).setScale(xScl, yScl);
        this.setInteractive(false);
        this.setBoundingType("rect");
        this.alpha = 0.0;
        this.frameIndex = 0;
    },

    update: function (app) {
    },
});

// 絶対値を返す関数
// https://iwb.jp/javascript-math-abs-deprecated/
function abs(val) {
    return val < 0 ? -val : val;
}

// 行動順番計算
// 0:プレイヤーから
// 1:enemyから
function calcMove(myStat, eneStat) {
    // 行動順値 = [素早さ * 32〜64の乱数]
    let myMoveVal = Math.round(myStat.getAgi() * ((Math.random() * 32) + 32));
    let eneMoveVal = Math.round(eneStat.getAgi() * ((Math.random() * 32) + 32));
    if (myMoveVal >= eneMoveVal) return 0;
    else return 1;
}

// ダメージ計算
// 魔法攻撃ダメージ計算
function calcMagicDamage(myStat, eneStat) {
    let dmg = { val: 0, krt: false, };
    dmg.val = calcMagicDamageInternal(decideMagic(myStat.eneDef), eneStat);
    return dmg;
}
function calcMagicDamageInternal(magic, eneStst) {
    let dmg = 0;
    let rnd = Math.floor(Math.random() * 100);//0~99
    if (rnd <= magic.success) {
        dmg = Math.floor(Math.random() * (magic.max - magic.min)) + magic.min;
    }
    return dmg;
}
// 物理攻撃ダメージ計算
function calcAttackDamage(myStat, eneStat, scaleFactor) {
    let krtRnd = Math.floor(Math.random() * 1000);
    if (myStat.tmpAtkScf > 1) {
        // 攻めの巻物を使った時はクリティカルは出ない
        krtRnd = 10000;
    }
    let dmg = { val: 0, krt: false, };
    let tmpDmg = { val: 0, krt: false, };
    if (krtRnd <= myStat.krt) {
        tmpDmg.val = calcCriticalAttackDamage(myStat);
        tmpDmg.krt = true;
    } else {
        tmpDmg.val = calcNormalAattackDamage(myStat, eneStat);
        tmpDmg.krt = false;
    }
    tmpDmg.val = Math.round(tmpDmg.val * scaleFactor);

    // ITEM_DEF.MAGIC_DARKNESS_LV1中
    if (myStat.statDarkness === 1) {
        if (Math.floor(Math.random() * 100) < ITEM_DEF.MAGIC_DARKNESS_LV1.max) {
            tmpDmg.val = 0;
            tmpDmg.krt = false;
        }
    }
    // ITEM_DEF.MAGIC_DARKNESS_LV2中
    if (myStat.statDarkness === 2) {
        if (Math.floor(Math.random() * 100) < ITEM_DEF.MAGIC_DARKNESS_LV2.max) {
            tmpDmg.val = 0;
            tmpDmg.krt = false;
        }
    }

    if (tmpDmg.val > 0) dmg = tmpDmg;
    if (eneStat.statToxic) {
        // どく状態の敵には+1~5のダメージ
        dmg.val += (Math.floor(Math.random() * 5) + 1);
    }
    console.log(">>>>dmg=" + JSON.stringify(dmg));
    return dmg;
}
// 通常攻撃ダメージ計算
function calcNormalAattackDamage(myStat, eneStat) {
    let tmpAtk = myStat.calcAttack();
    let tmpDef = eneStat.calcDefence();
    console.log(">" + tmpAtk + "," + tmpDef);
    tmpAtk = myStat.calcAttack() / 2;
    tmpDef = eneStat.calcDefence() / 4;
    console.log(">>" + tmpAtk + "," + tmpDef);
    let basicDmg = (myStat.calcAttack() / 2) - (eneStat.calcDefence() / 4);    // 「攻撃側の攻撃力」÷2 -「受ける側の守備力」÷4
    let range = (basicDmg / 16) + 1;    // ダメージ基本値÷16 + 1
    let rndDmg = (Math.random() * (range * 2)) - range;
    console.log(">>>" + basicDmg + "," + rndDmg);
    return basicDmg + rndDmg;
}
// 会心の一撃ダメージ計算
function calcCriticalAttackDamage(myStat) {
    let basicDmg = ((myStat.getAtk() + myStat.weapon.value) / 2);    // 「攻撃側の攻撃力」÷2
    let range = (basicDmg / 16) + 1;    // ダメージ基本値÷16 + 1
    let rndDmg = (Math.random() * (range * 2)) - range;
    return (basicDmg + rndDmg) * 2;
}

// 経験値からレベルを計算
function calcLevel(myStat) {
    let lv = -1;
    for (let ii = 0; ii < expTable.length - 1; ii++) {
        if ((expTable[ii].exp <= myStat.getExp()) && (expTable[ii + 1].exp > myStat.getExp())) {
            lv = expTable[ii].lv;
            break;
        }
    }
    return lv;
}

// レベルから最低経験値を計算
function calcLvToExp(lv) {
    let ret = 2147483647;
    for (let ii = 0; ii < expTable.length - 1; ii++) {
        if (expTable[ii].lv != lv) continue;
        ret = expTable[ii].exp;
        break;
    }
    return ret;
}

// レベル情報の取得
function getLevelInfo(lv) {
    let info = null;
    for (let tmp of expTable) {
        if (tmp.lv === lv) {
            info = tmp;
            break;
        }
    }
    return info;
}

/**
 * ゆうしゃの名前から成長タイプを取得
 * @param {*} name 
 */
function decideGrowthType(name) {
    let nameVal = 0;
    nameVal += (decideGrowthTypeSub(name.charAt(0)) * (8 ** 3));
    nameVal += (decideGrowthTypeSub(name.charAt(1)) * (8 ** 2));
    nameVal += (decideGrowthTypeSub(name.charAt(2)) * (8 ** 1));
    nameVal += (decideGrowthTypeSub(name.charAt(3)) * (8 ** 0));
    console.log(name + ":" + nameVal + ":" + (nameVal % 24))
    // ネムレス:83:11
    // ★うてな:3886:22
    // う★てな:2542:22
    // うて★な:2430:6
    // うてな★:2423:23
    if (
        (nameVal === 83) ||
        (nameVal === 3886) ||
        (nameVal === 2542) ||
        (nameVal === 2430) ||
        (nameVal === 2423)
    ) {
        return myGrowthTypeTable[24];
    } else {
        return myGrowthTypeTable[nameVal % 24];
    }
}
function decideGrowthTypeSub(nameChara) {
    for (let ii = 0; ii < 8; ii++) {
        if (nameChara === nameCharaReel[ii]) return ii;
    }
    return 0;
}

/**
 * 出現する敵を決定
 * @param {*} count 
 */
function decideEnemy(count) {
    let tmpRatio = 0;
    let enemy = null;
    let eaArray = enemyAppearTable[count];
    let target = Math.floor(Math.random() * 100) + 1;   // 1~100
    console.log("target=" + target);
    for (let ii = 0; ii < eaArray.length; ii++) {
        tmpRatio += eaArray[ii].ratio;
        console.log("tmpRatio=" + tmpRatio);
        if (tmpRatio < target) {
            continue;
        }
        enemy = eaArray[ii].ene;
        break;
    }
    let tmpStatus = new CharaStatus();
    tmpStatus.initEnemy(enemy);
    return tmpStatus;
}

/**
 * 使用する魔法の決定
 * @param {*} enemyDef 
 */
function decideMagic(enemyDef) {
    let tmpRatio = 0;
    let magic = null;
    let target = Math.floor(Math.random() * 100) + 1;   // 1~100
    console.log("target=" + target);
    for (let ii = 0; ii < enemyDef.magicList.length; ii++) {
        tmpRatio += enemyDef.magicList[ii].ratio;
        console.log("tmpRatio=" + tmpRatio);
        if (tmpRatio < target) {
            continue;
        }
        magic = enemyDef.magicList[ii].magic;
        break;
    }
    return magic;
}

/**
 * ドロップアイテムの決定
 * @param {*} enemyDef 
 */
function decideItem(enemyDef) {
    let tmpRatio = 0;
    let item = null;
    let target = Math.floor(Math.random() * 100) + 1;   // 1~100
    console.log("target=" + target);
    for (let ii = 0; ii < enemyDef.itemList.length; ii++) {
        tmpRatio += enemyDef.itemList[ii].ratio;
        console.log("tmpRatio=" + tmpRatio);
        if (tmpRatio < target) {
            continue;
        }
        item = enemyDef.itemList[ii].item;
        break;
    }
    return item;
}

/**
 * 使用するやくそうの決定
 * @param {*} enemyDef 
 */
function decideHealingHerb(enemyDef) {
    let tmpRatio = 0;
    let item = null;
    let target = Math.floor(Math.random() * 100) + 1;   // 1~100
    console.log("target=" + target);
    for (let ii = 0; ii < enemyDef.healingHerbList.length; ii++) {
        tmpRatio += enemyDef.healingHerbList[ii].ratio;
        console.log("tmpRatio=" + tmpRatio);
        if (tmpRatio < target) {
            continue;
        }
        item = enemyDef.healingHerbList[ii].item;
        break;
    }
    return item;
}

/**
 * 半角全角変換
 * @param {*} hankaku 
 * @param {*} digit 
 */
function toZenkaku(hankaku, digit) {
    let tmpStr = hankaku.toString(10).replace(/[A-Za-z0-9]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) + 65248);
    });
    if (tmpStr.length < digit) {
        for (let ii = tmpStr.length; ii < digit; ii++) {
            tmpStr = "　" + tmpStr;
        }
    }
    return tmpStr;
}

/**
 * 
 */
function checkLevelUp() {
    let oldLv = myStatus.getLv();
    let newLv = calcLevel(myStatus);
    let ret = {
        isLevelUp: false,
        hp: -1,
        atk: -1,
        agi: -1,
    }
    if (oldLv < newLv) {
        myStatus.setLv(newLv);
        let li = getLevelInfo(myStatus.getLv());
        let gt = myStatus.getGrowthType();
        let oldMaxHp = myStatus.getMaxHp();
        let oldNowAtk = myStatus.getNowAtk();
        let oldNowAgi = myStatus.getNowAgi();
        myStatus.setMaxHpLv(Math.round((li.hp * gt.hp) + gt.bonus));
        myStatus.addNowHp(2100000000);  // 全回復
        myStatus.setNowAtk(Math.round((li.atk * gt.atk) + gt.bonus));
        myStatus.setNowAgi(Math.round((li.agi * gt.agi) + gt.bonus));
        ret.isLevelUp = true;
        ret.hp = myStatus.getMaxHp() - oldMaxHp;
        ret.atk = myStatus.getNowAtk() - oldNowAtk;
        ret.agi = myStatus.getNowAgi() - oldNowAgi;
    }
    return ret;
}

/**
 * 一様分布
 * @param {*} min 
 * @param {*} max 
 */
function getRandomValue(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
/**
 * 正規分布
 * @param {*} min 
 * @param {*} max 
 */
function getNormalDistribution(min, max) {
    return (getRandomValue(min, max) + getRandomValue(min, max)) / 2.0;
}

/**
 * 
 * @param {*} itemDef 
 * @param {*} eneDef 
 */
function calcMagicDmgRatio(itemAttr, targetAttr) {
    let ratio = 1.0;
    if (targetAttr == ITEM_ATTR.ALL_P) {
        ratio = 0.5;
    } else if (targetAttr == ITEM_ATTR.ALL_M) {
        ratio = 2.0;
    } else if (targetAttr == ITEM_ATTR.NEUTRAL) {
        ratio = 1.0;
    } else if (itemAttr == ITEM_ATTR.FIRE) {
        switch (targetAttr) {
            case ITEM_ATTR.FIRE:
                ratio = 0.8;
                break;
            case ITEM_ATTR.WATER:
                ratio = 1.2;
                break;
        }
    } else if (itemAttr == ITEM_ATTR.WATER) {
        switch (targetAttr) {
            case ITEM_ATTR.FIRE:
                ratio = 1.2;
                break;
            case ITEM_ATTR.WATER:
                ratio = 0.8;
                break;
        }
    } else {
        ratio = 1.0;
    }
    console.log("MagicDmgRatio=" + ratio)
    return ratio;
}