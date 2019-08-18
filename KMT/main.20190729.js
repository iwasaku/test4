let SCREEN_WIDTH = 640;              // スクリーン幅
let SCREEN_HEIGHT = 1136;              // スクリーン高さ
let SCREEN_CENTER_X = SCREEN_WIDTH / 2;   // スクリーン幅の半分
let SCREEN_CENTER_Y = SCREEN_HEIGHT / 2;  // スクリーン高さの半分

let FONT_FAMILY = "'misaki_gothic','Meiryo',sans-serif";
let ASSETS = {
    "player": "./resource/angus_128_anim.png",
    "fade_in": "./resource/fadein_8_amin.png",
    "frame_256_288": "./resource/frame_256_288.png",
    "frame_576_192": "./resource/frame_576_192.png",
    "frame_320_96": "./resource/frame_320_96.png",

    "utena1": "./resource/utena1.png",
    "utena2": "./resource/utena2.png",
    "utena3": "./resource/utena3.png",
    "utena5": "./resource/utena5.png",
    "utena6": "./resource/utena6.png",
    "utena7": "./resource/utena7.png",

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
        func: null,
    },
    CMD_ITEM_DROP: {
        func: null,
    },
    WIN: {
        func: null,
    },
    LOOSE: {
        func: null,
    },
    ENDING: {
        func: null,
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
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 100 },],  // Lv1
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],    // Lv2
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],    // Lv3
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],    // Lv4
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 100 },],    // 10:中ボス

    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],    // Lv5
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],    // Lv6
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 100 },],    // 20:中ボス

    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 100 },],    // 30:中ボス

    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 100 },],    // 40:中ボス

    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 100 },],    // 50:中ボス

    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 100 },],    // 60:中ボス

    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 100 },],    // 70:中ボス

    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 100 },],    // 80:中ボス

    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 100 },],    // 90:中ボス

    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],    // Lv21
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],    // Lv22
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 50 }, { ene: ENEMY_DEF.ENEMY_1, ratio: 50 },],    // Lv23
    [{ ene: ENEMY_DEF.ENEMY_0, ratio: 100 },],    // 100:ラスボス   Lv24

];

// 名前リール
const nameCharaReel = [
    'ネ', 'ム', 'レ', 'ス', 'う', 'て', 'な', '★',
];

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
        this.weapon = ITEM.EMPTY;
        this.armor = ITEM.EMPTY;
        this.gavasss = 0;
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
        this.weapon = ITEM.EMPTY;
        this.armor = ITEM.EMPTY;
        this.gavasss = 0;
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
        this.weapon = ITEM.EMPTY;;
        this.armor = ITEM.EMPTY;;
        this.gavasss = this.eneDef.gavasss.base + Math.floor(Math.random() * this.eneDef.gavasss.ofs);
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

    subNowHp(dmg) {
        this.nowHp -= dmg;
        if (this.nowHp < 0) {
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
    setMaxHpOfs(maxHpOfs) {
        this.maxHpOfs = maxHpOfs;
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
    turnCnt: 0,
    turnOwner: -1,
    textBuff: [],
    isDead: false,
    isEscape: false,
    isWin: false,   // true:自分の勝利 false:敵の勝利
    gameModeOld: null,
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
                    text: "NMLS ONE HUNDRED",
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
            height: 64,
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
            height: 64,
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
            height: 64,
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
            height: 64,
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
        enemyGraphicSprite = new FrameSprite("utena1", SCREEN_CENTER_X, SCREEN_CENTER_Y - 32, 2, 2).addChildTo(group0);

        this.fromJSON({
            children: [
                // 道具ウィンドウ
                {
                    type: "Label", name: "itemWindowLabel",
                    x: SCREEN_WIDTH - 16,
                    y: 80,
                    fillStyle: "#fff",
                    shadowColor: "#000",
                    shadowBlur: 10,
                    fontSize: 32,
                    fontFamily: FONT_FAMILY,
                    text: "10",
                    align: "right",
                },
                // 道具0〜9
                {
                    type: "FlatButton", name: "item0Button",
                    init: [
                        {
                            text: "どうぐ0",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            bgColor: "hsl(240, 80%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X - 160,
                    y: 580,
                    alpha: 0.0,
                },
                {
                    type: "FlatButton", name: "item1Button",
                    init: [
                        {
                            text: "どうぐ1",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            bgColor: "hsl(240, 80%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X - 160,
                    y: 580,
                    alpha: 0.0,
                },
                {
                    type: "FlatButton", name: "item2Button",
                    init: [
                        {
                            text: "どうぐ2",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            bgColor: "hsl(240, 80%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X - 160,
                    y: 580,
                    alpha: 0.0,
                },
                {
                    type: "FlatButton", name: "item3Button",
                    init: [
                        {
                            text: "どうぐ3",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            bgColor: "hsl(240, 80%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X - 160,
                    y: 580,
                    alpha: 0.0,
                },
                {
                    type: "FlatButton", name: "item4Button",
                    init: [
                        {
                            text: "どうぐ4",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            bgColor: "hsl(240, 80%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X - 160,
                    y: 580,
                    alpha: 0.0,
                },
                {
                    type: "FlatButton", name: "item5Button",
                    init: [
                        {
                            text: "どうぐ5",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            bgColor: "hsl(240, 80%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X - 160,
                    y: 580,
                    alpha: 0.0,
                },
                {
                    type: "FlatButton", name: "item6Button",
                    init: [
                        {
                            text: "どうぐ6",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            bgColor: "hsl(240, 80%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X - 160,
                    y: 580,
                    alpha: 0.0,
                },
                {
                    type: "FlatButton", name: "item7Button",
                    init: [
                        {
                            text: "どうぐ7",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            bgColor: "hsl(240, 80%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X - 160,
                    y: 580,
                    alpha: 0.0,
                },
                {
                    type: "FlatButton", name: "item8Button",
                    init: [
                        {
                            text: "どうぐ8",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            bgColor: "hsl(240, 80%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X - 160,
                    y: 580,
                    alpha: 0.0,
                },
                {
                    type: "FlatButton", name: "item9Button",
                    init: [
                        {
                            text: "どうぐ9",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            bgColor: "hsl(240, 80%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X - 160,
                    y: 580,
                    alpha: 0.0,
                },

                {
                    type: "FlatButton", name: "restartButton",
                    init: [
                        {
                            text: "RESTART",
                            fontFamily: FONT_FAMILY,
                            fontSize: 32,
                            cornerRadius: 8,
                            bgColor: "hsl(240, 0%, 70%)",
                        }
                    ],
                    x: SCREEN_CENTER_X + 160,
                    y: 580,
                    alpha: 0.0,
                },
            ]
        });

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
    enemyWindowSprite.alpha = flag ? 1 : 0;;
    enemyWindowLabel.alpha = flag ? 1 : 0;;
}
function enemyGraphicCtrl(flag) {
    enemyGraphicSprite.alpha = flag ? 1 : 0;;
}


/*
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
*/
function GameIntro() {
    //    console.log("Intro");
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            myStatus.setTmpAgi(0);
            // 敵を決定
            eneStatus = decideEnemy(enemyCount);

            // 先攻／後攻を決定

            // アンブッシュを決定

            // 表示内容設定
            enemyWindowLabel.text = eneStatus.name;
            enemyGraphicSprite.remove();
            enemyGraphicSprite = new FrameSprite(eneStatus.eneDef.spriteName, SCREEN_CENTER_X, SCREEN_CENTER_Y - 32, 2, 2).addChildTo(group0);
            messageWindowLabel.text = makeMessageWindowString(eneStatus.eneDef.name + "があらわれた！");

            // 表示コントロール
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(true);

            gameSubMode = GAME_SUB_MODE.MAIN;
            gameCounter = 0;
        // fall through
        case GAME_SUB_MODE.MAIN:
            if (++gameCounter > (30 * 0.5)) {
                gameSubMode = GAME_SUB_MODE.FINISH;
            }
            break;
        case GAME_SUB_MODE.FINISH:
            gameMode = GAME_MODE.CMD_SELECTER;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
    }
}

/*
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

            gameSubMode = GAME_SUB_MODE.MAIN;
        // fall through
        case GAME_SUB_MODE.MAIN:
            break;
        case GAME_SUB_MODE.FINISH:
            break;
    }
}
function initBattleCtrl() {
    battleCtrl.turnCnt = 0;
    battleCtrl.turnOwner = calcMove(myStatus, eneStatus);
    battleCtrl.isDead = false;
    battleCtrl.isWin = false;
    battleCtrl.isEscape = false;
    battleCtrl.gameModeOld = gameMode;
}
/*
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
*/
function CmdItem() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:

            // 表示コントロール
            statusWindowCtrl(true);
            cmdWindowCtrl(true);
            messageWindowCtrl(false);
            enemyWindowCtrl(true);
            enemyGraphicCtrl(true);

            gameSubMode = GAME_SUB_MODE.MAIN;
            break;
        case GAME_SUB_MODE.MAIN:
            break;
        case GAME_SUB_MODE.FINISH:
            gameMode = GAME_MODE.BATTLE_START;
            gameSubMode = GAME_SUB_MODE.INIT;
            break;
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
            let dmg;
            if (battleCtrl.turnOwner == 0) {
                battleCtrl.turnOwner = 1;
                switch (battleCtrl.gameModeOld) {
                    case GAME_MODE.CMD_ATTACK:
                        dmg = calcDamage(myStatus, eneStatus, 1.1);
                        battleCtrl.textBuff[0] = myStatus.name + "の　こうげき！";
                        if (dmg.val > 0) {
                            if (dmg.krt) battleCtrl.textBuff[1] = "かいしんのいちげき！\n";
                            else battleCtrl.textBuff[1] = "";
                            battleCtrl.textBuff[1] += makeMessageWindowString(eneStatus.name + "は　" + toZenkaku(dmg.val, 1) + "のダメージ");
                            eneStatus.subNowHp(dmg.val);
                            if (eneStatus.getNowHp() <= 0) {
                                battleCtrl.isDead = true;
                                battleCtrl.isWin = true;
                            }
                        } else {
                            battleCtrl.textBuff[0] = makeMessageWindowString(eneStatus.name + "は　ひらりと　みをかわした！");
                        }
                        break;
                    case GAME_MODE.CMD_DEFENCE:
                        battleCtrl.textBuff[0] = myStatus.name + "は　みをまもっている！";
                        myStatus.addTmpAgi(1);
                        break;
                    case GAME_MODE.CMD_ESCAPE:
                        battleCtrl.textBuff[0] = myStatus.name + "は　にげだした！";
                        // 成功失敗判定
                        if (Math.random() < myStatus.getAgi() / (myStatus.getAgi() + eneStatus.calcDefence())) {
                            battleCtrl.isEscape = true;
                        } else {
                            battleCtrl.textBuff[1] = "しかし　まわりこまれてしまった！";
                            battleCtrl.isEscape = false;
                        }
                        break;
                    case GAME_MODE.CMD_ITEM_USE:
                        break;
                    case GAME_MODE.CMD_ITEM_DROP:
                        break;
                }
            } else {
                /*
敵が逃げる条件
主人公の攻撃力　≧　敵の攻撃力×2
敵が逃げる確率
1/4
http://dqff.sakura.ne.jp/dq1fc/battle/escape.html
                */
                dmg = calcDamage(eneStatus, myStatus, 1);
                battleCtrl.turnOwner = 0;
                battleCtrl.textBuff[0] = eneStatus.name + "のこうげき！";
                if (dmg.val > 0) {
                    if (dmg.krt) battleCtrl.textBuff[1] = "かいしんのいちげき！\n";
                    else battleCtrl.textBuff[1] = "";
                    battleCtrl.textBuff[1] += makeMessageWindowString(myStatus.name + "は　" + toZenkaku(dmg.val, 1) + "のダメージ");
                    myStatus.subNowHp(dmg.val);
                    if (myStatus.getNowHp() <= 0) {
                        battleCtrl.isDead = true;
                        battleCtrl.isWin = false;
                    }
                } else {
                    battleCtrl.textBuff[1] = makeMessageWindowString(myStatus.name + "は　みをかわした！");
                }
            }

            // 表示コントロール
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(true);

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
function messageAndModeCtrl() {
    let textBuffNum = battleCtrl.textBuff.length;
    if (gameCounter > 30 * textBuffNum) {
        gameSubMode = GAME_SUB_MODE.FINISH;
    }
    if (gameCounter % 30 === 0) {
        let idx = Math.floor(gameCounter / 30);
        messageWindowLabel.text = battleCtrl.textBuff[idx];
    }
    gameCounter++;

}
/*
*/
function GameBatleFinish() {
    switch (gameSubMode) {
        case GAME_SUB_MODE.INIT:
            battleCtrl.textBuff = [];
            messageWindowLabel.text = "";
            if (battleCtrl.isEscape) {
                // 何もしない
            } else if (battleCtrl.isWin) {
                let tmpStr = "";
                tmpStr += makeMessageWindowString((enemyCount + 1) + "ひきめ　" + eneStatus.name + "を　やつけた！") + "\n";
                tmpStr += makeMessageWindowString(eneStatus.eneDef.exp + "ポイントの　けいけんちを　かくとく！") + "\n";
                tmpStr += makeMessageWindowString(eneStatus.eneDef.gavasss.min + "ガバスを　てにいれた！");
                myStatus.addExp(eneStatus.eneDef.exp);
                myStatus.addGavasss(eneStatus.eneDef.gavasss.min);
                battleCtrl.textBuff[0] = tmpStr;
            } else {
                battleCtrl.textBuff[0] = makeMessageWindowString(myStatus.name + "は　しんでしまった");
            }

            // 表示コントロール
            statusWindowCtrl(true);
            cmdWindowCtrl(false);
            messageWindowCtrl(true);
            enemyWindowCtrl(false);
            enemyGraphicCtrl(false);
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
                gameSubMode = GAME_SUB_MODE.INIT;
            } if (battleCtrl.isWin) {
                enemyCount++;
                gameMode = GAME_MODE.FADE_IN;
                gameSubMode = GAME_SUB_MODE.INIT;
            } else {
                // BAD END
            }
            break;
    }
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
function calcDamage(myStat, eneStat, scaleFactor) {
    let rnd = Math.floor(Math.random() * 100);
    let dmg = { val: 0, krt: false, };
    let tmpDmg = { val: 0, krt: false, };
    if (myStat.eneDef != null) {
        if (rnd <= myStat.eneDef.attackRatio) {
            tmpDmg = calcAttackDamage(myStat, eneStat);
        } else {
            tmpDmg = calcMagicDamage(myStat, eneStat);
        }
    } else {
        tmpDmg = calcAttackDamage(myStat, eneStat);
    }

    tmpDmg.val = Math.round(tmpDmg.val * scaleFactor);
    if (tmpDmg.val > 0) dmg = tmpDmg;

    return dmg;
}
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
function calcAttackDamage(myStat, eneStat) {
    let krtRnd = Math.floor(Math.random() * 1000);
    let dmg = {
        val: 0,
        krt: false,
    };
    if (krtRnd <= myStat.krt) {
        dmg.val = calcCriticalAttackDamage(myStat);
        dmg.krt = true;
    } else {
        dmg.val = calcNormalAattackDamage(myStat, eneStat);
        dmg.krt = false;
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

// 名前から成長タイプを取得
function decideGrowthType(name) {
    let nameVal = 0;
    nameVal += (decideGrowthTypeSub(name.charAt(0)) * (8 ** 3));
    nameVal += (decideGrowthTypeSub(name.charAt(1)) * (8 ** 2));
    nameVal += (decideGrowthTypeSub(name.charAt(2)) * (8 ** 1));
    nameVal += (decideGrowthTypeSub(name.charAt(3)) * (8 ** 0));
    console.log(name + ":" + nameVal + ":" + (nameVal % 24))
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

// 敵を決定
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

/*
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

// 半角全角変換
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

// メッセージウインドウの幅に合わせて改行した文字列を生成
function makeMessageWindowString(inStr) {
    let num = 17;   // １行１７文字
    let ret = "";
    for (let ii = 0; ii < inStr.length; ii += num) {
        ret += inStr.slice(ii, ii + num) + "\n";
    }
    return ret.slice(0, -1);    // 最後の開業を削除
}