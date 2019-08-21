let SCREEN_WIDTH = 640;              // スクリーン幅
let SCREEN_HEIGHT = 1136;              // スクリーン高さ
let SCREEN_CENTER_X = SCREEN_WIDTH / 2;   // スクリーン幅の半分
let SCREEN_CENTER_Y = SCREEN_HEIGHT / 2;  // スクリーン高さの半分

let FONT_FAMILY = "'misaki_gothic','Meiryo',sans-serif";
let ASSETS = {
    "fade_in": "./resource/fadein_8_amin.png",
    "frame_256_288": "./resource/frame_256_288.png",
    "frame_576_192": "./resource/frame_576_192.png",
    "frame_320_96": "./resource/frame_320_96.png",

    "pizzza": "./resource/pizzza.png",
    "negi": "./resource/negi.png",
    "gohan": "./resource/gohan.png",
    "meat": "./resource/meat.png",
    "small": "./resource/small.png",
    "tissue": "./resource/tissue.png",
    "ika": "./resource/ika.png",
    "assassin": "./resource/assassin.png",
    "cheese": "./resource/cheese.png",
    "meso": "./resource/meso.png",
    "nasa": "./resource/nasa.png",
    "femo": "./resource/femo.png",
    "parfect": "./resource/parfect.png",
    "denden": "./resource/denden.png",
    "baby": "./resource/baby.png",
    "girl": "./resource/girl.png",
    "kakin": "./resource/kakin.png",
    "brachio": "./resource/brachio.png",
    "ninja": "./resource/ninja.png",
    "saint": "./resource/saint.png",
    "champ": "./resource/champ.png",
    "party": "./resource/party.png",
    "glutton": "./resource/glutton.png",
    "anger": "./resource/anger.png",
    "comp": "./resource/comp.png",
    "last": "./resource/last.png",

    "fallSE": "https://iwasaku.github.io/test3/SHU/resource/fall.mp3",    // 開発時用（mp3はfile://でのアクセスが拒否されるので、https://経由にする）
    //"fallSE": "./resource/fall.mp3",
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
    CMD_SELECTER: {
        func: function () { CmdSelector(); },
    },
    CMD_ATTACK: {
        func: function () { CmdAttack(); },
    },
    CMD_DEFENCE: {
        func: function () { CmdDefence(); },
    },
    CMD_ITEM: {
        func: function () { CmdItem(); },
    },
    CMD_ESCAPE: {
        func: function () { CmdEscape(); },
    },
    BATTLE_FINISH: {
        func: function () { GameBatleFinish(); },
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
const growthTypeTable = [
    { atk: 1.0, agi: 0.9, hp: 0.8, bonus: 0.0 },
    { atk: 0.9, agi: 1.0, hp: 0.8, bonus: 0.0 },
    { atk: 0.9, agi: 0.8, hp: 1.0, bonus: 0.0 },
    { atk: 1.0, agi: 0.8, hp: 0.9, bonus: 0.0 },
    { atk: 0.8, agi: 1.0, hp: 0.9, bonus: 0.0 },
    { atk: 0.8, agi: 0.9, hp: 1.0, bonus: 0.0 },

    { atk: 1.0, agi: 0.9, hp: 0.8, bonus: 1.0 },
    { atk: 0.9, agi: 1.0, hp: 0.8, bonus: 1.0 },
    { atk: 0.9, agi: 0.8, hp: 1.0, bonus: 1.0 },
    { atk: 1.0, agi: 0.8, hp: 0.9, bonus: 1.0 },
    { atk: 0.8, agi: 1.0, hp: 0.9, bonus: 1.0 },
    { atk: 0.8, agi: 0.9, hp: 1.0, bonus: 1.0 },

    { atk: 1.0, agi: 0.9, hp: 0.8, bonus: 2.0 },
    { atk: 0.9, agi: 1.0, hp: 0.8, bonus: 2.0 },
    { atk: 0.9, agi: 0.8, hp: 1.0, bonus: 2.0 },
    { atk: 1.0, agi: 0.8, hp: 0.9, bonus: 2.0 },
    { atk: 0.8, agi: 1.0, hp: 0.9, bonus: 2.0 },
    { atk: 0.8, agi: 0.9, hp: 1.0, bonus: 2.0 },

    { atk: 1.0, agi: 0.9, hp: 0.8, bonus: 3.0 },
    { atk: 0.9, agi: 1.0, hp: 0.8, bonus: 3.0 },
    { atk: 0.9, agi: 0.8, hp: 1.0, bonus: 3.0 },
    { atk: 1.0, agi: 0.8, hp: 0.9, bonus: 3.0 },
    { atk: 0.8, agi: 1.0, hp: 0.9, bonus: 3.0 },
    { atk: 0.8, agi: 0.9, hp: 1.0, bonus: 3.0 },

    { atk: 1.0, agi: 1.0, hp: 1.0, bonus: 4.0 },
];

// 経験値テーブル
const expTable = [
    { lv: 0, atk: 2, agi: 2, hp: 7, exp: -32767 },
    { lv: 1, atk: 4, agi: 4, hp: 15, exp: 0 },
    { lv: 2, atk: 5, agi: 4, hp: 22, exp: 7 },
    { lv: 3, atk: 7, agi: 6, hp: 24, exp: 23 },
    { lv: 4, atk: 7, agi: 8, hp: 31, exp: 47 },
    { lv: 5, atk: 12, agi: 10, hp: 35, exp: 110 },  // この辺で10匹目になるらしい
    { lv: 6, atk: 16, agi: 10, hp: 38, exp: 220 },
    { lv: 7, atk: 18, agi: 17, hp: 40, exp: 450 },
    { lv: 8, atk: 22, agi: 20, hp: 46, exp: 800 },  // 20匹
    { lv: 9, atk: 30, agi: 22, hp: 50, exp: 1300 },
    { lv: 10, atk: 35, agi: 31, hp: 54, exp: 2000 },

    { lv: 11, atk: 40, agi: 35, hp: 62, exp: 2900 },
    { lv: 12, atk: 48, agi: 40, hp: 63, exp: 4000 },
    { lv: 13, atk: 52, agi: 48, hp: 70, exp: 5500 },
    { lv: 14, atk: 60, agi: 55, hp: 78, exp: 7500 },
    { lv: 15, atk: 68, agi: 64, hp: 86, exp: 10000 },   // 50
    { lv: 16, atk: 72, agi: 70, hp: 92, exp: 13000 },
    { lv: 17, atk: 72, agi: 78, hp: 110, exp: 17000 },
    { lv: 18, atk: 85, agi: 84, hp: 115, exp: 21000 },
    { lv: 19, atk: 87, agi: 86, hp: 130, exp: 25000 },
    { lv: 20, atk: 92, agi: 88, hp: 138, exp: 29000 },

    { lv: 21, atk: 95, agi: 90, hp: 149, exp: 33000 },
    { lv: 22, atk: 97, agi: 90, hp: 158, exp: 37000 },
    { lv: 23, atk: 99, agi: 94, hp: 165, exp: 41000 },  // スラ仏だとこの辺で１００匹になるらしい(Lv.20~25)
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
    [{ ene: ENEMY_DEF.ENEMY_0_SP, ratio: 100 },],  // Lv1   4
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_2, ratio: 40 },], // Lv2   7
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_2, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_1, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_2, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_3, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_1, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_2, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_3, ratio: 40 },], // Lv3   8
    [{ ene: ENEMY_DEF.ENEMY_2, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_3, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_4, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_2, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_3, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_4, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_2, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_3, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_4, ratio: 40 },], // Lv4   21
    [{ ene: ENEMY_DEF.ENEMY_3, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_4, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_4_SP, ratio: 100 },],    // 10:中ボス

    [{ ene: ENEMY_DEF.ENEMY_3, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_4, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5, ratio: 40 },], // Lv5   28
    [{ ene: ENEMY_DEF.ENEMY_4, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_4, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_4, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_4, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 40 },], // Lv6   58
    [{ ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_5, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 40 },], // Lv7  90
    [{ ene: ENEMY_DEF.ENEMY_7_SP, ratio: 100 },],    // 20:中ボス

    [{ ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_6, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 40 },], // Lv8  100
    [{ ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_7, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 40 },], // Lv9  140
    [{ ene: ENEMY_DEF.ENEMY_9_SP, ratio: 100 },],    // 30:中ボス

    [{ ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_8, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 40 },],    // Lv10 180
    [{ ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_9, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 40 },],   // Lv11 220
    [{ ene: ENEMY_DEF.ENEMY_11_SP, ratio: 100 },],    // 40:中ボス（いのちのみ50%）

    [{ ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_10, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 40 },],  // Lv12 300
    [{ ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_11, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 40 },],  // Lv13 400
    [{ ene: ENEMY_DEF.ENEMY_13_SP, ratio: 100 },],    // 50:中ボス（けいけんのみ50%）

    [{ ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_12, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 40 },],  // Lv14 500
    [{ ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_13, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 40 },],  // Lv15 600
    [{ ene: ENEMY_DEF.ENEMY_15_SP, ratio: 100 },],    // 60:中ボス（いのちのみ50%）

    [{ ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_14, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 40 },],  // Lv16 800
    [{ ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_15, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 40 },],  // Lv17 800
    [{ ene: ENEMY_DEF.ENEMY_17_SP, ratio: 100 },],    // 70:中ボス（けいけんのみ50%）

    [{ ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_16, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 40 },],  // Lv18 800
    [{ ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_17, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 40 },],  // Lv19 800
    [{ ene: ENEMY_DEF.ENEMY_19_SP, ratio: 100 },],    // 80:中ボス

    [{ ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_18, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 40 },],  // Lv20 800
    [{ ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_19, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 40 },],  // Lv21 800
    [{ ene: ENEMY_DEF.ENEMY_21_SP, ratio: 100 },],    // 90:中ボス

    [{ ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_20, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_23, ratio: 40 },],  // Lv22 800
    [{ ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_23, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_21, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_22, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_23, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_23, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_24, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_25, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_23, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_24, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_25, ratio: 40 },],
    [{ ene: ENEMY_DEF.ENEMY_23, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_24, ratio: 30 }, { ene: ENEMY_DEF.ENEMY_25, ratio: 40 },],  // Lv23 800
    [{ ene: ENEMY_DEF.ENEMY_26, ratio: 100 },],    // 100:ラスボス   Lv24

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
        this.nowAgi = 0;       // Lvから求めた値
        this.tmpAgi = 0;    // 1ターンだけ上昇
        this.krt = 16;     // クリティカル確率（1000分率）。16なら約1.6%=約1/64の確率で、31なら約3.1%=約1/32の確率で『会心の一撃』が発生
        this.weapon = ITEM_DEF.EMPTY;
        this.armor = ITEM_DEF.EMPTY;
        this.gavasss = 0;
        this.itemList = [];
    }
    initPlayer() {
        //前提：this.name は設定済み
        //        this.name = "ネムレス";
        //        this.name = "うてな★";
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
        this.weapon = ITEM_DEF.EMPTY;
        this.armor = ITEM_DEF.EMPTY;
        this.gavasss = 0;
        this.itemList = [
            { eqp: false, def: ITEM_DEF.HERB_00 },
            { eqp: false, def: ITEM_DEF.HERB_00 },
        ];
    }
    initEnemy(enemyDef) {
        this.eneDef = enemyDef;
        this.growthType = growthTypeTable[Math.floor(Math.random() * (this.eneDef.growthTypeIdx.max - this.eneDef.growthTypeIdx.min) + this.eneDef.growthTypeIdx.min)];
        this.name = this.eneDef.name;
        this.exp = this.eneDef.exp;
        this.lv = this.eneDef.lv;
        let li = getLevelInfo(this.lv);
        if (this.eneDef.hp >= 1) {
            this.maxHpLv = this.eneDef.hp;
        } else {
            this.maxHpLv = Math.round((li.hp * this.growthType.hp) + this.growthType.bonus);
        }
        this.maxHpOfs = 0;
        this.nowHp = this.maxHpLv + this.maxHpOfs;
        this.nowAtk = Math.round((li.atk * this.growthType.atk) + this.growthType.bonus);
        this.tmpAtk = 0;
        this.nowAgi = Math.round((li.agi * this.growthType.agi) + this.growthType.bonus);
        this.tmpAgi = 0;
        this.krt = this.eneDef.krtRatio;
        this.weapon = ITEM_DEF.EMPTY;
        this.armor = ITEM_DEF.EMPTY;
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
        return this.TmpAtk;
    }

    calcAttack() {
        return this.getAtk() + this.weapon.value;
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
        if (this.tmpAgi < this.nowAgi) {
            this.tmpAgi += tmpAgi;
        }
    }
    getTmpAgi() {
        return this.tmpAgi;
    }

    setKrt(krt) {
        this.krt = krt;
    }
    getKrt() {
        return this.krt;
    }

    calcDefence() {
        return (this.getAgi() / 2) + this.armor.value;
    }

    setWeapon(weapon) {
        this.weapon = weapon;
    }
    getWeapon() {
        return this.weapon;
    }

    setArmor(armor) {
        this.armor = armor;
    }
    getArmor() {
        return this.armor;
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
    setItemListDebug() {
        this.itemList = [
            { eqp: false, def: ITEM_DEF.WEAPON_00 },
            { eqp: false, def: ITEM_DEF.WEAPON_01 },
            { eqp: false, def: ITEM_DEF.SHIELD_00 },
            { eqp: false, def: ITEM_DEF.SHIELD_01 },
            { eqp: false, def: ITEM_DEF.HERB_00 },
            { eqp: false, def: ITEM_DEF.HERB_01 },
            { eqp: false, def: ITEM_DEF.MAGIC_00 },
            { eqp: false, def: ITEM_DEF.MAGIC_01 },
            { eqp: false, def: ITEM_DEF.MAGIC_02 },
            { eqp: false, def: ITEM_DEF.HERB_00 },
            { eqp: false, def: ITEM_DEF.HERB_00 },
            { eqp: false, def: ITEM_DEF.HERB_00 },
            { eqp: false, def: ITEM_DEF.HERB_00 },
            { eqp: false, def: ITEM_DEF.HERB_00 },
            { eqp: false, def: ITEM_DEF.HERB_00 },
        ];
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
    isItemFull: false,   // true:持ち物がいっぱい false:まだ持てる
    gameModeOld: null,
    useItemIdx: -1,
    getItemName: "",
    dropItemName: "",
}
let enemyCount = 0;
let fadeInSprite = null;
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
let tweetButton = null;
let restartButton = null;
let tweetStr = null;

tm.main(function () {
    // アプリケーションクラスを生成
    let app = tm.display.CanvasApp("#world");
    app.resize(SCREEN_WIDTH, SCREEN_HEIGHT);    // サイズ(解像度)設定
    app.canvas.imageSmoothingEnabled = false;
    app.fitWindow();                            // 自動フィッティング有効
    app.background = "rgba(77, 136, 255, 1.0)"; // 背景色
    app.fps = 30;                               // フレーム数

    let loading = tm.ui.LoadingScene({
        assets: ASSETS,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    });

    // 読み込み完了後に呼ばれるメソッドを登録
    loading.onload = function () {
        app.replaceScene(LogoScene());
    };

    // ローディングシーンに入れ替える
    app.replaceScene(loading);

    // 実行
    app.run();
});

/*
 * ロゴ
 */
tm.define("LogoScene", {
    superClass: "tm.app.Scene",

    init: function () {
        this.superInit();
        this.fromJSON({
            children: [
                {
                    type: "Label", name: "logoLabel",
                    x: SCREEN_CENTER_X,
                    y: 320,
                    fillStyle: "#888",
                    fontSize: 64,
                    fontFamily: FONT_FAMILY,
                    text: "LOGO",
                    align: "center",
                },
            ]
        });
        this.localTimer = 0;
    },

    update: function (app) {
        // 時間が来たらタイトルへ
        //        if(++this.localTimer >= 5*app.fps)
        this.app.replaceScene(TitleScene());
    }
});

/*
 * タイトル
 */
tm.define("TitleScene", {
    superClass: "tm.app.Scene",
    init: function () {
        this.superInit();
        this.fromJSON({
            children: [
                {
                    type: "Label", name: "titleLabel",
                    x: SCREEN_CENTER_X,
                    y: 320,
                    fillStyle: "#fff",
                    fontSize: 64,
                    fontFamily: FONT_FAMILY,
                    text: "NMLS ONE HUNDRED\nα ver.",
                    align: "center",
                },
                {
                    type: "Label", name: "namaeLabel",
                    x: SCREEN_CENTER_X,
                    y: SCREEN_CENTER_Y + (32 * 0),
                    fillStyle: "#fff",
                    fontSize: 32,
                    fontFamily: FONT_FAMILY,
                    text: "",
                    align: "center",
                },
                {
                    type: "FlatButton", name: "startButton",
                    init: [
                        {
                            text: "START",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            bgColor: "hsl(240, 0%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X,
                    y: SCREEN_CENTER_Y + (SCREEN_CENTER_Y / 2),
                },
            ]
        });
        this.localTimer = 0;
        mkNameCnt = 0;
        let self = this;
        myStatus = new CharaStatus();

        this.startButton.onpointingstart = function () {
            if (mkNameCnt >= 3) {
                self.app.replaceScene(GameScene());
                myStatus.initPlayer();
            } else {
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
        this.namaeLabel.text = "ゆうしゃ：" + tmpName;
        myStatus.name = tmpName;
    }
});

/*
 * ゲーム
 */
tm.define("GameScene", {
    superClass: "tm.app.Scene",

    init: function () {
        this.superInit();

        // 表示プライオリティは 0：奥 → 3：手前 の順番
        group0 = tm.display.CanvasElement().addChildTo(this);   // status,cmd,message,enemy
        group1 = tm.display.CanvasElement().addChildTo(this);   // item
        group2 = tm.display.CanvasElement().addChildTo(this);   // itemcmd
        group3 = tm.display.CanvasElement().addChildTo(this);   // fadeIn

        // ゲーム中のウィンドウやメニューはここで定義しておく
        // フェードイン
        fadeInSprite = new FadeInSprite().addChildTo(group3);

        // ステータスウインドウ
        statusWindowSprite = new FrameSprite("frame_256_288", 256 / 2 + 32, 288 / 2 + 32, 1, 1).addChildTo(group0);

        statusWindowNameLabel = tm.display.Label("NAME").addChildTo(group0);
        statusWindowNameLabel.setPosition(256 / 2 - 32 * 1, 288 / 2 - 32 * 2)
            .setFillStyle("#fff")
            .setAlign("left")
            .setBaseline("bottom")
            .setFontFamily(FONT_FAMILY)
            .setFontSize(32);
        statusWindowNameLabel.shadowColor = "#000";
        statusWindowNameLabel.shadowBlur = 0;
        statusWindowNameLabel.alpha = 0;
        statusWindowNameLabel.text = myStatus.getName();

        statusWindowHpLabel = tm.display.Label("HP").addChildTo(group0);
        statusWindowHpLabel.setPosition(256 / 2 - 32 * 2.5, 288 / 2 - 32 * 0)
            .setFillStyle("#fff")
            .setAlign("left")
            .setBaseline("bottom")
            .setFontFamily(FONT_FAMILY)
            .setFontSize(32);
        statusWindowHpLabel.shadowColor = "#000";
        statusWindowHpLabel.shadowBlur = 0;
        statusWindowHpLabel.alpha = 0;
        statusWindowHpLabel.text = "ＨＰ：" + toZenkaku(0, 4);

        statusWindowMpLabel = tm.display.Label("MP").addChildTo(group0);
        statusWindowMpLabel.setPosition(256 / 2 - 32 * 2.5, 288 / 2 - 32 * -1.5)
            .setFillStyle("#fff")
            .setAlign("left")
            .setBaseline("bottom")
            .setFontFamily(FONT_FAMILY)
            .setFontSize(32);
        statusWindowMpLabel.shadowColor = "#000";
        statusWindowMpLabel.shadowBlur = 0;
        statusWindowMpLabel.alpha = 0;
        statusWindowMpLabel.text = "ＭＰ：" + toZenkaku(0, 4);

        statusWindowLvLabel = tm.display.Label("LV").addChildTo(group0);
        statusWindowLvLabel.setPosition(256 / 2 - 32 * 2.5, 288 / 2 - 32 * -3)
            .setFillStyle("#fff")
            .setAlign("left")
            .setBaseline("bottom")
            .setFontFamily(FONT_FAMILY)
            .setFontSize(32);
        statusWindowLvLabel.shadowColor = "#000";
        statusWindowLvLabel.shadowBlur = 0;
        statusWindowLvLabel.alpha = 0;
        statusWindowLvLabel.text = "ＬＶ：" + toZenkaku(1, 4);

        statusWindowGavasssLabel = tm.display.Label("GAVASSS").addChildTo(group0);
        statusWindowGavasssLabel.setPosition(256 / 2 - 32 * 2.5, 288 / 2 - 32 * -4.5)
            .setFillStyle("#fff")
            .setAlign("left")
            .setBaseline("bottom")
            .setFontFamily(FONT_FAMILY)
            .setFontSize(32);
        statusWindowGavasssLabel.shadowColor = "#000";
        statusWindowGavasssLabel.shadowBlur = 0;
        statusWindowGavasssLabel.alpha = 0;
        statusWindowGavasssLabel.text = "Ｇ　" + toZenkaku(10000, 5);

        // コマンドウィンドウ
        cmdWindowSprite = new FrameSprite("frame_256_288", 256 / 2 + 32, SCREEN_HEIGHT - (288 / 2 + 160), 1, 1).addChildTo(group1);
        cmdWindowAtkButton = tm.app.FlatButton({
            width: 160,
            height: 60,
            text: "こうげき",
            fontFamily: FONT_FAMILY,
            fontSize: 32,
            bgColor: "#888",
        }).addChildTo(group1);
        cmdWindowAtkButton.setPosition(256 / 2 + 32, SCREEN_HEIGHT - (288 / 2 + 160) - 105);
        cmdWindowAtkButton.onpointingstart = function () {
            gameModeReq = GAME_MODE.CMD_ATTACK;
        };
        cmdWindowAtkButton.setAlpha(0);
        cmdWindowAtkButton.sleep();
        cmdWindowEscButton = tm.app.FlatButton({
            width: 160,
            height: 60,
            text: "にげる",
            fontFamily: FONT_FAMILY,
            fontSize: 32,
            bgColor: "#888",
        }).addChildTo(group1);
        cmdWindowEscButton.setPosition(256 / 2 + 32, SCREEN_HEIGHT - (288 / 2 + 160) - 35);
        cmdWindowEscButton.onpointingstart = function () {
            gameModeReq = GAME_MODE.CMD_ESCAPE;
        };
        cmdWindowEscButton.setAlpha(0);
        cmdWindowEscButton.sleep();
        cmdWindowDefButton = tm.app.FlatButton({
            width: 160,
            height: 60,
            text: "ぼうぎょ",
            fontFamily: FONT_FAMILY,
            fontSize: 32,
            bgColor: "#888",
        }).addChildTo(group1);
        cmdWindowDefButton.setPosition(256 / 2 + 32, SCREEN_HEIGHT - (288 / 2 + 160) + 35);
        cmdWindowDefButton.onpointingstart = function () {
            gameModeReq = GAME_MODE.CMD_DEFENCE;
        };
        cmdWindowDefButton.setAlpha(0);
        cmdWindowDefButton.sleep();
        cmdWindowItemButton = tm.app.FlatButton({
            width: 160,
            height: 60,
            text: "どうぐ",
            fontFamily: FONT_FAMILY,
            fontSize: 32,
            bgColor: "#888",
        }).addChildTo(group1);
        cmdWindowItemButton.setPosition(256 / 2 + 32, SCREEN_HEIGHT - (288 / 2 + 160) + 105);
        cmdWindowItemButton.onpointingstart = function () {
            gameModeReq = GAME_MODE.CMD_ITEM;
        };
        cmdWindowItemButton.setAlpha(0);
        cmdWindowItemButton.sleep();

        // メッセージウィンドウ
        messageWindowSprite = new FrameSprite("frame_576_192", SCREEN_CENTER_X, SCREEN_CENTER_Y + 256, 1, 1).addChildTo(group0);
        messageWindowLabel = tm.display.Label("").addChildTo(group0);
        messageWindowLabel.setPosition(32 + 16, SCREEN_CENTER_Y + 192 + 24)
            .setFillStyle("#fff")
            .setAlign("left")
            .setBaseline("bottom")
            .setFontFamily(FONT_FAMILY)
            .setFontSize(32);
        messageWindowLabel.shadowColor = "#000";
        messageWindowLabel.shadowBlur = 0;
        messageWindowLabel.alpha = 0;

        // 敵ウィンドウ
        enemyWindowSprite = new FrameSprite("frame_320_96", SCREEN_CENTER_X + 160 - 32, SCREEN_CENTER_Y + (32 * 4), 1, 1).addChildTo(group0);
        enemyWindowLabel = tm.display.Label("").addChildTo(group0);
        enemyWindowLabel.setPosition(SCREEN_CENTER_X - 16, SCREEN_CENTER_Y + (32 * 4.5))
            .setFillStyle("#fff")
            .setAlign("left")
            .setBaseline("bottom")
            .setFontFamily(FONT_FAMILY)
            .setFontSize(32);
        enemyWindowLabel.shadowColor = "#000";
        enemyWindowLabel.shadowBlur = 0;
        enemyWindowLabel.alpha = 0;

        // 敵画像
        enemyGraphicSprite = new EnemySprite("pizzza", SCREEN_CENTER_X, SCREEN_CENTER_Y - 32, 1.5, 1.5).addChildTo(group0);

        // 道具ウィンドウ
        itemWindowSprite = new FrameSprite("frame_256_288", SCREEN_CENTER_X, SCREEN_CENTER_Y - 8 + (32 * 6), 2.3, 2.4).addChildTo(group2);
        itemWindowLabel = tm.display.Label("どうぐ").addChildTo(group2);
        itemWindowLabel.setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y - 32 * 4)
            .setFillStyle("#fff")
            .setAlign("center")
            .setBaseline("center")
            .setFontFamily(FONT_FAMILY)
            .setFontSize(32);
        itemWindowLabel.shadowColor = "#000";
        itemWindowLabel.shadowBlur = 0;
        itemWindowLabel.alpha = 0;

        for (let ii = 0; ii < 16; ii++) {
            itemWindowItemButton[ii] = tm.app.FlatButton({
                width: 280,
                height: 64,
                text: "",
                fontFamily: FONT_FAMILY,
                fontSize: 32,
                bgColor: "#888",
            }).addChildTo(group2);
            let xIdx = (ii % 2) * 2 - 1;    // -1:左 1:右
            let yIdx = Math.floor(ii / 2);
            itemWindowItemButton[ii].setPosition(SCREEN_CENTER_X + (32 * 4.5 * xIdx), 70 * 7 + (yIdx * 70));
            itemWindowItemButton[ii].onpointingstart = function () {
                CmdItemExec(this);
            };
            itemWindowItemButton[ii].setAlpha(0);
            itemWindowItemButton[ii].sleep();
            itemWindowItemButton[ii].itemIdx = ii;
            itemWindowItemButton[ii].isDrop = false;

            itemWindowItemLabel[ii] = tm.display.Label("").addChildTo(group2);
            itemWindowItemLabel[ii].setPosition(SCREEN_CENTER_X + (32 * 4.5 * xIdx) - 32 * 4, 70 * 7 + (yIdx * 70))
                .setFillStyle("#fff")
                .setAlign("left")
                .setBaseline("center")
                .setFontFamily(FONT_FAMILY)
                .setFontSize(32);
            itemWindowItemLabel[ii].shadowColor = "#000";
            itemWindowItemLabel[ii].shadowBlur = 0;
            itemWindowItemLabel[ii].alpha = 0;
        }
        {
            let ii = 16;
            itemWindowReturnButton = tm.app.FlatButton({
                width: 280,
                height: 64,
                text: "もどる",
                fontFamily: FONT_FAMILY,
                fontSize: 32,
                bgColor: "#888",
            }).addChildTo(group2);
            let yIdx = Math.floor(ii / 2);
            itemWindowReturnButton.setPosition(SCREEN_CENTER_X, 70 * 7 + (yIdx * 70));
            itemWindowReturnButton.onpointingstart = function () {
                gameModeReq = GAME_MODE.CMD_SELECTER;
            };
            itemWindowReturnButton.setAlpha(0);
            itemWindowReturnButton.sleep();
        }

        tweetButton = tm.app.FlatButton({
            width: 160,
            height: 60,
            text: "TWEET",
            fontFamily: FONT_FAMILY,
            fontSize: 32,
            bgColor: "#888",
        }).addChildTo(group1);
        tweetButton.setPosition(SCREEN_CENTER_X - 160, 650);
        tweetButton.onpointingstart = function () {
            var twitterURL = tm.social.Twitter.createURL({
                type: "tweet",
                //                text: "勇者" + myStatus.name + "は" + tweetStr,
                text: "テスト",
                hashtags: ["ネムレス", "NEMLESSS", "NMLS100"],
                url: "https://iwasaku.github.io/test4/KMT/index.html",
            });
            window.open(twitterURL);
        };
        tweetButton.setAlpha(0);
        tweetButton.sleep();

        restartButton = tm.app.FlatButton({
            width: 160,
            height: 60,
            text: "RESTERT",
            fontFamily: FONT_FAMILY,
            fontSize: 32,
            bgColor: "#888",
        }).addChildTo(group1);
        restartButton.setPosition(SCREEN_CENTER_X + 160, 650);
        let self = this;
        restartButton.onpointingstart = function () {
            self.app.replaceScene(TitleScene());
        };
        restartButton.setAlpha(0);
        restartButton.sleep();

        enemyCount = 0;
        gameMode = GAME_MODE.FADE_IN;
    },

    onpointingstart: function () {
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

        statusWindowHpLabel.text = "ＨＰ：" + toZenkaku(myStatus.getNowHp(), 4);
        statusWindowLvLabel.text = "ＬＶ：" + toZenkaku(myStatus.getLv(), 4);
        statusWindowGavasssLabel.text = "Ｇ　" + toZenkaku(myStatus.getGavasss(), 5);
    }
});


function statusWindowCtrl(flag) {
    statusWindowSprite.alpha = flag ? 1 : 0;
    statusWindowNameLabel.alpha = flag ? 1 : 0;
    statusWindowHpLabel.alpha = flag ? 1 : 0;
    statusWindowMpLabel.alpha = flag ? 1 : 0;
    statusWindowLvLabel.alpha = flag ? 1 : 0;
    statusWindowGavasssLabel.alpha = flag ? 1 : 0;
}
function messageWindowCtrl(flag) {
    messageWindowSprite.alpha = flag ? 1 : 0;
    messageWindowLabel.alpha = flag ? 1 : 0;
}
function cmdWindowCtrl(flag) {
    cmdWindowSprite.alpha = flag ? 1 : 0;
    cmdWindowAtkButton.setAlpha(flag ? 1 : 0);
    cmdWindowEscButton.setAlpha(flag ? 1 : 0);
    cmdWindowDefButton.setAlpha(flag ? 1 : 0);
    cmdWindowItemButton.setAlpha(flag ? 1 : 0);
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
    enemyWindowSprite.alpha = flag ? 1 : 0;
    enemyWindowLabel.alpha = flag ? 1 : 0;
}
function enemyGraphicCtrl(flag) {
    enemyGraphicSprite.alpha = flag ? 1 : 0;;
}
function itemWindowCtrl(itemFlag, isDrop) {
    itemWindowSprite.alpha = itemFlag ? 1 : 0;
    itemWindowLabel.alpha = itemFlag ? 1 : 0;
    if (isDrop) {
        itemWindowLabel.text = "すてるどうぐをせんたく";
    } else {
        itemWindowLabel.text = "つかうどうぐをせんたく";
    }
    // ボタンを一旦初期化
    for (let ii = 0; ii < 16; ii++) {
        itemWindowItemButton[ii].setAlpha(0);
        itemWindowItemButton[ii].sleep();
        itemWindowItemButton[ii].isDrop = isDrop;
        itemWindowItemLabel[ii].setAlpha(0);
    }
    itemWindowReturnButton.setAlpha(0);
    itemWindowReturnButton.sleep();

    if (itemFlag) {
        for (let ii = 0; ii < myStatus.itemList.length; ii++) {
            itemWindowItemButton[ii].setAlpha(1);
            itemWindowItemButton[ii].wakeUp();
            let tmpItemStr;
            if (myStatus.itemList[ii].eqp) {
                tmpItemStr = "Ｅ";
            } else {
                tmpItemStr = "　";
            }
            tmpItemStr += myStatus.itemList[ii].def.name;
            itemWindowItemLabel[ii].text = tmpItemStr;
            itemWindowItemLabel[ii].setAlpha(1);
        }

        if (isDrop == false) {
            itemWindowReturnButton.setAlpha(1);
            itemWindowReturnButton.wakeUp();
        }
    }
}

/*以下、ゲームモードの処理*/

/*
フェードインの処理
*/
function GameFadeIn() {
    //    console.log("FadeIn");
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            // 表示設定
            statusWindowCtrl(false);
            cmdWindowCtrl(false);
            messageWindowCtrl(false);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(false);
            itemWindowCtrl(false, false);

            fadeInSprite.alpha = 1;
            fadeInSprite.counter = 0;
            fadeInSprite.gotoAndPlay("start");
            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            if (++fadeInSprite.counter >= 42) {
                gameSubMode = GAME_SUB_MODE.FINISH;
            }
            break;
        case GAME_SUB_MODE.FINISH:
            fadeInSprite.alpha = 0;
            gameMode = GAME_MODE.INTRO;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/*
『〜があらわれた！』の処理
*/
function GameIntro() {
    //    console.log("Intro");
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            myStatus.setTmpAgi(0);
            battleCtrl.textBuff = [];
            messageWindowLabel.text = "";

            // 敵を決定
            eneStatus = decideEnemy(enemyCount);

            // 表示内容設定
            enemyWindowLabel.text = eneStatus.name;
            enemyGraphicSprite.remove();
            enemyGraphicSprite = new EnemySprite(eneStatus.eneDef.spriteName, SCREEN_CENTER_X, SCREEN_CENTER_Y - 32, 1.5, 1.5).addChildTo(group0);
            battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.eneDef.name + "があらわれた！" };
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
                gameMode = GAME_MODE.CMD_SELECTER;
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
コマンドセレクターモード
*/
function CmdSelector() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:

            // 表示コントロール
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
function CmdDefence() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            // 表示内容設定
            messageWindowLabel.text = "";

            // 表示コントロール
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
    //    console.log("CmdItemUse");
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            // 表示内容設定
            messageWindowLabel.text = "";

            // 表示コントロール
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
                // 備フラグを設定する
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
            //            console.log("battleCtrl.turnCnt=" + battleCtrl.turnCnt);
            //            console.log("battleCtrl.turnOwner=" + battleCtrl.turnOwner);
            battleCtrl.textBuff = [];
            messageWindowLabel.text = "";
            if (battleCtrl.turnOwner === 0) {
                let buffIdx = 0;
                battleCtrl.turnOwner = 1;
                switch (battleCtrl.gameModeOld) {
                    case GAME_MODE.CMD_ATTACK:
                        let dmg = calcAttackDamage(myStatus, eneStatus, 1.1);
                        battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "の　こうげき！" };
                        if (dmg.val > 0) {
                            let tmpText;
                            if (dmg.krt) tmpText = "かいしんのいちげき！\n";
                            else tmpText = "";
                            tmpText += makeMessageWindowString(eneStatus.name + "は　" + toZenkaku(dmg.val, 1) + "のダメージ");
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpText };
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_HP, isMyStat: false, prm: -dmg.val };
                            battleCtrl.textBuff[buffIdx++] = { frm: 31, cmd: TEXT_BUFFER_CMD.SPRITE_OFF };
                            battleCtrl.textBuff[buffIdx++] = { frm: 33, cmd: TEXT_BUFFER_CMD.SPRITE_ON };
                            battleCtrl.textBuff[buffIdx++] = { frm: 35, cmd: TEXT_BUFFER_CMD.SPRITE_OFF };
                            battleCtrl.textBuff[buffIdx++] = { frm: 37, cmd: TEXT_BUFFER_CMD.SPRITE_ON };
                            battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                        } else {
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　ひらりと　みをかわした！" };
                            battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                        }
                        break;
                    case GAME_MODE.CMD_DEFENCE:
                        battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　みをまもっている！" };
                        battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.FINISH };
                        myStatus.addTmpAgi(1);
                        break;
                    case GAME_MODE.CMD_ESCAPE:
                        battleCtrl.textBuff[buffIdx++] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　にげだした！" };
                        // 成功失敗判定
                        if (Math.random() < (myStatus.getAgi() / (myStatus.getAgi() + eneStatus.calcDefence()))) {
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.FINISH };
                            battleCtrl.isEscape = true;
                        } else {
                            battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　まわりこまれてしまった！" };
                            battleCtrl.textBuff[buffIdx++] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                            battleCtrl.isEscape = false;
                        }
                        break;
                    case GAME_MODE.CMD_ITEM_USE:
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
                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_HP, isMyStat: true, prm: tmpItem.value };
                                break;
                            case ITEM_TYPE.HERB_1:
                                // どくけしそう
                                battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                break;
                            case ITEM_TYPE.HERB_2:
                                // けいけんのみ
                                if (myStatus.getLv() >= 30) {
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
                            case ITEM_TYPE.MAGIC_DIRECT_ATTACK:
                                // 直接攻撃
                                if (Math.floor(Math.random() * 100) > tmpItem.success) {
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: "しかし　なにもおこらなかった！" };
                                } else {
                                    let dmgVal = getRandomValue(tmpItem.min, tmpItem.max);
                                    let tmpText = "";
                                    tmpText += makeMessageWindowString(eneStatus.name + "は　" + toZenkaku(dmgVal, 1) + "のダメージ");
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpText };
                                    battleCtrl.textBuff[buffIdx++] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_HP, isMyStat: false, prm: -dmgVal };
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
                        break;
                }
            } else {
                battleCtrl.turnOwner = 0;

                let eneGameModeOld = null;
                if ((eneStatus.eneDef.isEscape == true) && (myStatus.getAtk() >= eneStatus.getAtk() * 2) && (Math.random() <= 0.25)) {
                    eneGameModeOld = GAME_MODE.CMD_ESCAPE;
                } else if (Math.random() <= 0.031) {
                    eneGameModeOld = GAME_MODE.CMD_DEFENCE;
                } else if (Math.floor(Math.random() * 100) <= eneStatus.eneDef.attackRatio) {
                    eneGameModeOld = GAME_MODE.CMD_ATTACK;
                } else {
                    eneGameModeOld = GAME_MODE.CMD_ITEM_USE;
                }
                switch (eneGameModeOld) {
                    case GAME_MODE.CMD_ATTACK:
                        let dmg = calcAttackDamage(eneStatus, myStatus, 1.0);
                        battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "の　こうげき！" };
                        if (dmg.val > 0) {
                            let tmpText;
                            if (dmg.krt) tmpText = "かいしんのいちげき！\n";
                            else tmpText = "";
                            tmpText += makeMessageWindowString(myStatus.name + "は　" + toZenkaku(dmg.val, 1) + "のダメージ");
                            battleCtrl.textBuff[1] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpText };
                            battleCtrl.textBuff[2] = { frm: 30, cmd: TEXT_BUFFER_CMD.ADD_HP, isMyStat: true, prm: -dmg.val };
                            battleCtrl.textBuff[3] = { frm: 31, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: 5, y: -5 } };
                            battleCtrl.textBuff[4] = { frm: 33, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: -5, y: 5 } };
                            battleCtrl.textBuff[5] = { frm: 35, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: 5, y: -5 } };
                            battleCtrl.textBuff[6] = { frm: 37, cmd: TEXT_BUFFER_CMD.SHAKE, prm: { x: -5, y: 5 } };
                            battleCtrl.textBuff[7] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                        } else {
                            battleCtrl.textBuff[1] = { frm: 30, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　ひらりと　みをかわした！" };
                            battleCtrl.textBuff[2] = { frm: 60, cmd: TEXT_BUFFER_CMD.FINISH };
                        }
                        break;
                    case GAME_MODE.CMD_DEFENCE:
                        battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　みをまもっている！" };
                        battleCtrl.textBuff[1] = { frm: 30, cmd: TEXT_BUFFER_CMD.FINISH };
                        eneStatus.addTmpAgi(1);
                        break;
                    case GAME_MODE.CMD_ESCAPE:
                        battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP, text: eneStatus.name + "は　にげだした！" };
                        battleCtrl.textBuff[1] = { frm: 30, cmd: TEXT_BUFFER_CMD.FINISH };
                        battleCtrl.isEscape = true;
                        break;
                    case GAME_MODE.CMD_ITEM_USE:
                        break;
                }
            }

            // 表示コントロール
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
                    gameMode = GAME_MODE.CMD_SELECTER;
                }
            }
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}
/*
*/
function GameBatleFinish() {
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
                tmpStr += makeMessageWindowString("ちか" + toZenkaku((enemyCount + 1), 1) + "かいの　" + eneStatus.name + "を　やっつけた！") + "\n";
                battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpStr };

                tmpStr = makeMessageWindowString(toZenkaku(tmpExp) + "ポイントの　けいけんちを　かくとく！") + "\n";
                myStatus.addExp(tmpExp);
                tmpStr += makeMessageWindowString(toZenkaku(tmpGavasss, 1) + "ガバスを　てにいれた！") + "\n";
                myStatus.addGavasss(tmpGavasss);
                battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpStr };

                // レベルアップ処理
                let result = checkLevelUp();
                if (result.isLevelUp) {
                    tmpStr = makeMessageWindowString(myStatus.name + "は　レベルが上った") + "\n";
                    if (result.hp > 0) {
                        tmpStr += makeMessageWindowString("さいだいＨＰが　" + toZenkaku(result.hp) + "あがった！") + "\n";
                    }
                    if (result.atk > 0) {
                        tmpStr += makeMessageWindowString("ちからが　" + toZenkaku(result.atk) + "あがった！") + "\n";
                    }
                    if (result.agi > 0) {
                        tmpStr += makeMessageWindowString("すばやさが　" + toZenkaku(result.agi) + "あがった！");
                    }
                    battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpStr };
                }

                // アイテム獲得処理
                let tmpItem = decideItem(eneStatus.eneDef);
                tmpStr = makeMessageWindowString(eneStatus.name + "は　" + tmpItem.name + "　を　もっていた！") + "\n";
                myStatus.addItemList(tmpItem)
                if (myStatus.itemList.length <= 15) {
                    tmpStr += makeMessageWindowString(myStatus.name + "は　" + tmpItem.name + "　を　てにいれた！");
                    battleCtrl.isItemFull = false;
                } else {
                    tmpStr += makeMessageWindowString("しかし　これいじょう　どうぐを　もつことはできない！");
                    battleCtrl.isItemFull = true;
                    battleCtrl.getItemName = tmpItem.name;
                }
                battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpStr };
                battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.FINISH };
            } else {
                battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30, cmd: TEXT_BUFFER_CMD.DISP, text: myStatus.name + "は　ちからつきた．．．" };
                battleCtrl.textBuff[tmpIdx++] = { frm: (tmpIdx - 1) * 30 + 90, cmd: TEXT_BUFFER_CMD.FINISH };
            }

            // 表示コントロール
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
                if (battleCtrl.isItemFull) {
                    gameMode = GAME_MODE.ITEM_DROP;
                } else {
                    gameMode = GAME_MODE.FADE_IN;
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
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(false);
            itemWindowCtrl(false, false);

            gameCounter = 0;
            gameSubMode = GAME_SUB_MODE.MAIN;

            let tmpStr = makeMessageWindowString("わたしを　たおすとは・・・みごとだ") + "\n";
            tmpStr += makeMessageWindowString("だが、おまえのたたかいは　ほんとうにこれでおわりかな？") + "\n";

            battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpStr };
            battleCtrl.textBuff[1] = { frm: 300, cmd: TEXT_BUFFER_CMD.FINISH };
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
            statusWindowCtrl(false);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(false);
            itemWindowCtrl(false, false);

            gameCounter = 0;
            gameSubMode = GAME_SUB_MODE.MAIN;

            let tmpStr = "";
            if (enemyCount === 0) {
                tmpStr = makeMessageWindowString("こんかい　" + myStatus.name + "は　ちか１かいで　ちからつきた") + "\n";
                tweetStr = "地下１階で力尽きた\n";
            } else if (enemyCount === 100) {
                tmpStr = makeMessageWindowString("こんかい　" + myStatus.name + "は　ちか１００かい　すべてクリアした！") + "\n";
                tweetStr = "地下１００階すべてクリアした\n";
            } else {
                tmpStr = makeMessageWindowString("こんかい　" + myStatus.name + "は　ちか" + toZenkaku(enemyCount, 1) + "かいまで　クリアした！") + "\n";
                tweetStr = "地下" + toZenkaku(enemyCount, 1) + "階までクリアした\n";
            }
            if (myStatus.gavasss > 0) {
                tmpStr += makeMessageWindowString(toZenkaku(myStatus.gavasss, 1) + "ガバス　を　かくとく！") + "\n";
                tweetStr += toZenkaku(myStatus.gavasss, 1) + "ガバスを獲得した\n";
            }

            battleCtrl.textBuff[0] = { frm: 0, cmd: TEXT_BUFFER_CMD.DISP_NO_CHK, text: tmpStr };
            battleCtrl.textBuff[1] = { frm: 90, cmd: TEXT_BUFFER_CMD.FINISH };

            //            tweetButton.wakeUp();
            //            tweetButton.setAlpha(1);
            restartButton.wakeUp();
            restartButton.setAlpha(1);
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
                messageWindowLabel.text = makeMessageWindowString(tmp.text);
                break;
            case TEXT_BUFFER_CMD.DISP_NO_CHK:
                messageWindowLabel.text = tmp.text;
                break;

            case TEXT_BUFFER_CMD.ADD_HP:
                if (tmp.isMyStat) {
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
tm.define("FadeInSprite", {
    superClass: "tm.app.AnimationSprite",

    init: function () {
        let ss = tm.asset.SpriteSheet({
            // 画像
            image: "fade_in",
            // １コマのサイズ指定および全コマ数
            frame: {
                width: 8,
                height: 8,
                count: 16
            },
            // アニメーションの定義（開始コマ、終了コマ、次のアニメーション）
            animations: {
                "init": [0, 1, "init", 1],
                "start": [2, 16, "stop", 3],
                "stop": [15, 16, "stop", 1],
            }
        });

        this.superInit(ss, SCREEN_WIDTH, SCREEN_HEIGHT);
        this.direct = '';
        this.zRot = 0;
        this.setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y).setScale(1, 1);
        this.setInteractive(false);
        this.setBoundingType("rect");
        this.gotoAndPlay("stop");
        this.alpha = 0;
        this.counter = 0;
    },

    update: function (app) {
    },
});

/*
 * フレーム用スプライトの定義
 */
tm.define("FrameSprite", {
    superClass: "tm.app.Sprite",

    init: function (spriteName, xPos, yPos, xScl, yScl) {
        this.superInit(spriteName);
        this.direct = '';
        this.zRot = 0;
        this.setPosition(xPos, yPos).setScale(xScl, yScl);
        this.setInteractive(false);
        this.setBoundingType("rect");
        this.alpha = 0;
    },

    update: function (app) {
    },
});
tm.define("EnemySprite", {
    superClass: "tm.app.Sprite",

    init: function (spriteName, xPos, yPos, xScl, yScl) {
        this.superInit(spriteName);
        this.direct = '';
        this.zRot = 0;
        this.setPosition(xPos, yPos).setScale(xScl, yScl);
        this.setInteractive(false);
        this.setBoundingType("rect");
        this.alpha = 0;
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
    if (tmpDmg.val > 0) dmg = tmpDmg;
    //    console.log(">>>>dmg=" + JSON.stringify(dmg));
    return dmg;
}
// 通常攻撃ダメージ計算
function calcNormalAattackDamage(myStat, eneStat) {
    let tmpAtk = myStat.calcAttack();
    let tmpDef = eneStat.calcDefence();
    //    console.log(">" + tmpAtk + "," + tmpDef);
    tmpAtk = myStat.calcAttack() / 2;
    tmpDef = eneStat.calcDefence() / 4;
    //    console.log(">>" + tmpAtk + "," + tmpDef);
    let basicDmg = (myStat.calcAttack() / 2) - (eneStat.calcDefence() / 4);    // 「攻撃側の攻撃力」÷2 -「受ける側の守備力」÷4
    let range = (basicDmg / 16) + 1;    // ダメージ基本値÷16 + 1
    let rndDmg = (Math.random() * (range * 2)) - range;
    //    console.log(">>>" + basicDmg + "," + rndDmg);
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
    //    console.log(name + ":" + nameVal + ":" + (nameVal % 24))
    // ネムレス:83:11
    // うてな★:2423:23
    if ((nameVal === 83) || (nameVal === 2423)) {
        return growthTypeTable[24];
    } else {
        return growthTypeTable[nameVal % 24];
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
    //    console.log("target=" + target);
    for (let ii = 0; ii < eaArray.length; ii++) {
        tmpRatio += eaArray[ii].ratio;
        //        console.log("tmpRatio=" + tmpRatio);
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
    //    console.log("target=" + target);
    for (let ii = 0; ii < enemyDef.magicList.length; ii++) {
        tmpRatio += enemyDef.magicList[ii].ratio;
        //        console.log("tmpRatio=" + tmpRatio);
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
    //    console.log("target=" + target);
    for (let ii = 0; ii < enemyDef.itemList.length; ii++) {
        tmpRatio += enemyDef.itemList[ii].ratio;
        //        console.log("tmpRatio=" + tmpRatio);
        if (tmpRatio < target) {
            continue;
        }
        item = enemyDef.itemList[ii].item;
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
 * メッセージウインドウの幅に合わせて改行した文字列を生成
 * @param {*} inStr 
 */
function makeMessageWindowString(inStr) {
    let num = 17;   // １行１７文字
    let ret = "";
    for (let ii = 0; ii < inStr.length; ii += num) {
        ret += inStr.slice(ii, ii + num) + "\n";
    }
    return ret.slice(0, -1);    // 最後の改行を削除
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
 * 
 * @param {*} min 
 * @param {*} max 
 */
function getRandomValue(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
/*
○○は　レベルがあがった！
さいだいＨＰが　○あがった！
ちからが　　○あがった！
すばやさが　○あがった！
*/