const ENEMY_DEF = defineEnum({
    DUMMY: {
        name: "だみーダミー",   // 最大：全角９文字
        spriteName: "utena1",
        growthTypeIdx: { min: 0, max: 5 },
        lv: 0,
        hp: 0,              // 0以下：growthType&expTableに従う 1以上：固定値
        exp: { min: 1, max: 2 },    // 獲得経験値
        attackRatio: 100,   // 通常攻撃確率（％）。90なら90%の確率で物理攻撃、10%の確率で魔法攻撃
        krtRatio: 16,       // クリティカル確率（1000分率）。16なら約1.6%=約1/64の確率で、31なら約3.1%=約1/32の確率で『会心の一撃』が発生
        isEscape: true,     // 『にげる』か？true:にげる false:にげない
        magicList: [        // 使用魔法リスト。ratioは合計で100になるようにする
            { magic: ITEM_DEF.MAGIC_00, ratio: 40 },
            { magic: ITEM_DEF.MAGIC_01, ratio: 60 },
        ],
        itemList: [         // ドロップアイテムリスト。ratioは合計で100になるようにする
            { item: ITEM_DEF.HERB_00, ratio: 30 },
            { item: ITEM_DEF.HERB_01, ratio: 70 },
        ],
        gavasss: { min: 1, max: 5, },   // ドロップガバス
    },
    ENEMY_0_SP: {
        name: "ＰＩＺＺＺＡ",
        spriteName: "pizzza",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 0,
        hp: 0,
        exp: { min: 1, max: 4 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: false,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 100 },
        ],
        gavasss: { min: 1, max: 5, },
    },
    ENEMY_0: {
        name: "ＰＩＺＺＺＡ",
        spriteName: "pizzza",
        growthTypeIdx: { min: 0, max: 2 },
        lv: 1,
        hp: 0,
        exp: { min: 1, max: 4 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 100 },
        ],
        gavasss: { min: 1, max: 5, },
    },
    ENEMY_1: {
        name: "ネギ",
        spriteName: "negi",
        growthTypeIdx: { min: 0, max: 5 },
        lv: 1,
        hp: 0,
        exp: { min: 3, max: 7 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 100 },
        ],
        gavasss: { min: 1, max: 5, },
    },
    ENEMY_2: {
        name: "ＧＯ−ＨＡＮ",
        spriteName: "gohan",
        growthTypeIdx: { min: 0, max: 5 },
        lv: 2,
        hp: 0,
        exp: { min: 6, max: 8 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 100 },
        ],
        gavasss: { min: 1, max: 5, },
    },
    ENEMY_3: {
        name: "食いしん坊",
        spriteName: "glutton",
        growthTypeIdx: { min: 0, max: 5 },
        lv: 3,
        hp: 0,
        exp: { min: 7, max: 20 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 100 },
        ],
        gavasss: { min: 1, max: 5, },
    },
    ENEMY_4_SP: {
        name: "幻の肉",
        spriteName: "meat",
        growthTypeIdx: { min: 4, max: 5 },
        lv: 4,
        hp: 0,
        exp: { min: 20, max: 27 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: false,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 10, max: 15, },
    },
    ENEMY_4: {
        name: "幻の肉",
        spriteName: "meat",
        growthTypeIdx: { min: 0, max: 5 },
        lv: 4,
        hp: 0,
        exp: { min: 20, max: 27 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 1, max: 5, },
    },
    ENEMY_5: {
        name: "てのひらサイズ",
        spriteName: "small",
        growthTypeIdx: { min: 1, max: 5 },
        lv: 5,
        hp: 0,
        exp: { min: 27, max: 58 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 10, max: 15, },
    },
    ENEMY_6: {
        name: "ティッシュ",
        spriteName: "tissue",
        growthTypeIdx: { min: 1, max: 5 },
        lv: 6,
        hp: 0,
        exp: { min: 57, max: 90 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 10, max: 15, },
    },
    ENEMY_7_SP: {
        name: "コウイカ",
        spriteName: "ika",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 7,
        hp: 0,
        exp: { min: 89, max: 100 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: false,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 15, max: 20, },
    },
    ENEMY_7: {
        name: "コウイカ",
        spriteName: "ika",
        growthTypeIdx: { min: 1, max: 5 },
        lv: 7,
        hp: 0,
        exp: { min: 89, max: 100 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 10, max: 15, },
    },
    ENEMY_8: {
        name: "怒ってる人",
        spriteName: "anger",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 8,
        hp: 0,
        exp: { min: 99, max: 140 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 15, max: 20, },
    },
    ENEMY_9_SP: {
        name: "刺客",
        spriteName: "assassin",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 9,
        hp: 0,
        exp: { min: 139, max: 180 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: false,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 20, max: 25, },
    },
    ENEMY_9: {
        name: "刺客",
        spriteName: "assassin",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 9,
        hp: 0,
        exp: { min: 139, max: 180 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 15, max: 20, },
    },
    ENEMY_10: {
        name: "加圧の人",
        spriteName: "comp",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 10,
        hp: 0,
        exp: { min: 179, max: 220 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 20, max: 25, },
    },
    ENEMY_11_SP: {
        name: "パリピの民",
        spriteName: "party",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 11,
        hp: 0,
        exp: { min: 219, max: 300 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: false,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 25 },
            { item: ITEM_DEF.HERB_01, ratio: 25 },
            { item: ITEM_DEF.HERB_05, ratio: 50 },
        ],
        gavasss: { min: 25, max: 30, },
    },
    ENEMY_11: {
        name: "パリピの民",
        spriteName: "party",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 11,
        hp: 0,
        exp: { min: 219, max: 300 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 20, max: 25, },
    },
    ENEMY_12: {
        name: "ヨーヨーチャンプ",
        spriteName: "champ",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 12,
        hp: 0,
        exp: { min: 299, max: 400 },
        attackRatio: 100,
        krtRatio: 16,
        isEscape: true,
        magicList: [
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
        ],
        gavasss: { min: 25, max: 30, },
    },
    ENEMY_13_SP: {
        name: "４倍チーズ",
        spriteName: "cheese",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 13,
        hp: 0,
        exp: { min: 399, max: 500 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: false,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 20 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 10 },
            { item: ITEM_DEF.HERB_04, ratio: 50 },
        ],
        gavasss: { min: 30, max: 35, },
    },
    ENEMY_13: {
        name: "４倍チーズ",
        spriteName: "cheese",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 13,
        hp: 0,
        exp: { min: 399, max: 500 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 25, max: 30, },
    },
    ENEMY_14: {
        name: "落ち着きのない人",
        spriteName: "nasa",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 14,
        hp: 0,
        exp: { min: 499, max: 600 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 30, max: 35, },
    },
    ENEMY_15_SP: {
        name: "めそめそしてる人",
        spriteName: "meso",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 15,
        hp: 0,
        exp: { min: 599, max: 800 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: false,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 20 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 10 },
            { item: ITEM_DEF.HERB_05, ratio: 50 },
        ],
        gavasss: { min: 35, max: 40, },
    },
    ENEMY_15: {
        name: "めそめそしてる人",
        spriteName: "meso",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 15,
        hp: 0,
        exp: { min: 599, max: 800 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 30, max: 35, },
    },
    ENEMY_16: {
        name: "フェモ",
        spriteName: "femo",
        growthTypeIdx: { min: 3, max: 5 },
        lv: 16,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 35, max: 40, },
    },
    ENEMY_17_SP: {
        name: "光る人",
        spriteName: "saint",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 17,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: false,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 20 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 10 },
            { item: ITEM_DEF.HERB_04, ratio: 50 },
        ],
        gavasss: { min: 40, max: 45, },
    },
    ENEMY_17: {
        name: "光る人",
        spriteName: "saint",
        growthTypeIdx: { min: 3, max: 5 },
        lv: 17,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 35, max: 40, },
    },
    ENEMY_18: {
        name: "究極完全態",
        spriteName: "parfect",
        growthTypeIdx: { min: 3, max: 5 },
        lv: 18,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 40, max: 45, },
    },
    ENEMY_19_SP: {
        name: "でんでんむし",
        spriteName: "denden",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 19,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: false,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 20 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 10 },
            { item: ITEM_DEF.HERB_05, ratio: 50 },
        ],
        gavasss: { min: 45, max: 50, },
    },
    ENEMY_19: {
        name: "でんでんむし",
        spriteName: "denden",
        growthTypeIdx: { min: 3, max: 5 },
        lv: 19,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 40, max: 45, },
    },
    ENEMY_20: {
        name: "赤ちゃん",
        spriteName: "baby",
        growthTypeIdx: { min: 3, max: 5 },
        lv: 20,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 45, max: 50, },
    },
    ENEMY_21_SP: {
        name: "女子",
        spriteName: "girl",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 21,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: false,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 20 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 10 },
            { item: ITEM_DEF.HERB_05, ratio: 50 },
        ],
        gavasss: { min: 50, max: 60, },
    },
    ENEMY_21: {
        name: "女子",
        spriteName: "girl",
        growthTypeIdx: { min: 3, max: 5 },
        lv: 21,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 45, max: 50, },
    },
    ENEMY_22: {
        name: "課金勢",
        spriteName: "kakin",
        growthTypeIdx: { min: 4, max: 5 },
        lv: 22,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 60, max: 70, },
    },
    ENEMY_23: {
        name: "かなしみ",
        spriteName: "sad",
        growthTypeIdx: { min: 4, max: 5 },
        lv: 23,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 70, max: 80, },
    },
    ENEMY_24: {
        name: "ブラキオサウルス",
        spriteName: "brachio",
        growthTypeIdx: { min: 4, max: 5 },
        lv: 24,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 50 },
            { magic: ITEM_DEF.MAGIC_01, ratio: 50 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 80, max: 90, },
    },
    ENEMY_25: {
        name: "忍者",
        spriteName: "ninja",
        growthTypeIdx: { min: 4, max: 5 },
        lv: 25,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 128,
        isEscape: true,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 90 },
            { item: ITEM_DEF.HERB_01, ratio: 9 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
        ],
        gavasss: { min: 90, max: 100, },
    },
    ENEMY_26: {
        name: "実写版",
        spriteName: "last",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 30,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 50,
        krtRatio: 256,
        isEscape: false,
        magicList: [
            { magic: ITEM_DEF.MAGIC_00, ratio: 30 },
            { magic: ITEM_DEF.MAGIC_01, ratio: 70 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 50 },
            { item: ITEM_DEF.HERB_01, ratio: 50 },
        ],
        gavasss: { min: 1000, max: 1000, },
    },
});