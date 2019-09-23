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
        attr: ITEM_ATTR.NEUTRAL,    // 魔法に対する属性
        magicList: [        // 使用魔法リスト。ratioは合計で100になるようにする
            { magic: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 40 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 60 },
        ],
        itemList: [         // ドロップアイテムリスト。ratioは合計で100になるようにする
            { item: ITEM_DEF.HERB_00, ratio: 30 },
            { item: ITEM_DEF.HERB_01, ratio: 70 },
        ],
        gavasss: { min: 1, max: 5, },   // ドロップガバス
    },
    ENEMY_0_BS: {
        name: "ＰＩＺＺＺＡ",
        spriteName: "pizzza",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 0,
        hp: 0,
        exp: { min: 1, max: 4 },
        attackRatio: 100,
        krtRatio: 15,
        isEscape: false,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
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
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 85 },
            { item: ITEM_DEF.WEAPON_00, ratio: 10 },
            { item: ITEM_DEF.SHIELD_00, ratio: 5 },
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
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 85 },
            { item: ITEM_DEF.WEAPON_00, ratio: 5 },
            { item: ITEM_DEF.SHIELD_00, ratio: 10 },
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
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 85 },
            { item: ITEM_DEF.WEAPON_00, ratio: 10 },
            { item: ITEM_DEF.SHIELD_00, ratio: 5 },
        ],
        gavasss: { min: 1, max: 5, },
    },
    ENEMY_2_P: {
        name: "３本二百五十円",
        spriteName: "negikko",
        growthTypeIdx: { min: 0, max: 5 },
        lv: 4,
        hp: 0,
        exp: { min: 20, max: 27 },
        attackRatio: 100,
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 85 },
            { item: ITEM_DEF.WEAPON_00, ratio: 5 },
            { item: ITEM_DEF.SHIELD_00, ratio: 10 },
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
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 85 },
            { item: ITEM_DEF.WEAPON_00, ratio: 10 },
            { item: ITEM_DEF.SHIELD_00, ratio: 5 },
        ],
        gavasss: { min: 1, max: 5, },
    },
    ENEMY_3_P: {
        name: "アイスクリーム",
        spriteName: "ice",
        growthTypeIdx: { min: 1, max: 5 },
        lv: 5,
        hp: 0,
        exp: { min: 27, max: 58 },
        attackRatio: 100,
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.MAGIC_ATK_SCF, ratio: 50 },
            { item: ITEM_DEF.MAGIC_AGI_SCF, ratio: 50 },
        ],
        gavasss: { min: 1, max: 5, },
    },
    ENEMY_4_BS: {
        name: "幻の肉",
        spriteName: "meat",
        growthTypeIdx: { min: 4, max: 5 },
        lv: 4,
        hp: 0,
        exp: { min: 20, max: 27 },
        attackRatio: 100,
        krtRatio: 30,
        isEscape: false,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 75 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.WEAPON_00, ratio: 10 },
            { item: ITEM_DEF.SHIELD_00, ratio: 5 },
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
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 60 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.WEAPON_00, ratio: 5 },
            { item: ITEM_DEF.SHIELD_00, ratio: 10 },
            { item: ITEM_DEF.MAGIC_ATK_SCF, ratio: 5 },
            { item: ITEM_DEF.MAGIC_AGI_SCF, ratio: 10 },
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
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 75 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.WEAPON_00, ratio: 10 },
            { item: ITEM_DEF.SHIELD_00, ratio: 5 },
        ],
        gavasss: { min: 10, max: 15, },
    },
    ENEMY_5_P: {
        name: "けだま",
        spriteName: "kedama",
        growthTypeIdx: { min: 1, max: 5 },
        lv: 7,
        hp: 0,
        exp: { min: 89, max: 100 },
        attackRatio: 100,
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 75 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.WEAPON_01, ratio: 3 },
            { item: ITEM_DEF.WEAPON_02, ratio: 2 },
            { item: ITEM_DEF.SHIELD_01, ratio: 5 },
            { item: ITEM_DEF.SHIELD_02, ratio: 5 },
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
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 75 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.WEAPON_01, ratio: 10 },
            { item: ITEM_DEF.SHIELD_01, ratio: 5 },
        ],
        gavasss: { min: 10, max: 15, },
    },
    ENEMY_6_P: {
        name: "許さない人",
        spriteName: "yurusan",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 8,
        hp: 0,
        exp: { min: 99, max: 140 },
        attackRatio: 100,
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 75 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.WEAPON_01, ratio: 5 },
            { item: ITEM_DEF.SHIELD_01, ratio: 10 },
        ],
        gavasss: { min: 10, max: 15, },
    },
    ENEMY_7: {
        name: "コウイカ",
        spriteName: "ika",
        growthTypeIdx: { min: 1, max: 5 },
        lv: 7,
        hp: 0,
        exp: { min: 89, max: 100 },
        attackRatio: 100,
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 75 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.WEAPON_01, ratio: 10 },
            { item: ITEM_DEF.SHIELD_01, ratio: 5 },
        ],
        gavasss: { min: 10, max: 15, },
    },
    ENEMY_8_BS: {
        name: "怒ってる人",
        spriteName: "anger",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 7,
        hp: 10,
        exp: { min: 89, max: 100 },
        attackRatio: 20,
        krtRatio: 30,
        isEscape: false,
        attr: ITEM_ATTR.FIRE,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 45 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 34 },
            { item: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 1 },
            { item: ITEM_DEF.WEAPON_01, ratio: 10 },
        ],
        gavasss: { min: 15, max: 20, },
    },
    ENEMY_8: {
        name: "怒ってる人",
        spriteName: "anger",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 8,
        hp: 10,
        exp: { min: 99, max: 140 },
        attackRatio: 20,
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.FIRE,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 45 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 34 },
            { item: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 1 },
            { item: ITEM_DEF.SHIELD_01, ratio: 10 },
        ],
        gavasss: { min: 15, max: 20, },
    },
    ENEMY_8_P: {
        name: "ストレスフルな人",
        spriteName: "stress",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 9,
        hp: 0,
        exp: { min: 139, max: 180 },
        attackRatio: 100,
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 50 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.WEAPON_01, ratio: 10 },
            { item: ITEM_DEF.SHIELD_01, ratio: 5 },
            { item: ITEM_DEF.MAGIC_ATK_SCF, ratio: 10 },
            { item: ITEM_DEF.MAGIC_AGI_SCF, ratio: 5 },
        ],
        gavasss: { min: 15, max: 20, },
    },
    ENEMY_9_BS: {
        name: "刺客",
        spriteName: "assassin",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 9,
        hp: 20,
        exp: { min: 139, max: 180 },
        attackRatio: 20,
        krtRatio: 30,
        isEscape: false,
        attr: ITEM_ATTR.FIRE,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 95 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 5 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 35 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.HERB_02, ratio: 5 },
            { item: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 34 },
            { item: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 1 },
            { item: ITEM_DEF.WEAPON_01, ratio: 5 },
            { item: ITEM_DEF.SHIELD_01, ratio: 10 },
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
        attackRatio: 50,
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.FIRE,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 100 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 35 },
            { item: ITEM_DEF.HERB_01, ratio: 15 },
            { item: ITEM_DEF.HERB_02, ratio: 5 },
            { item: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 34 },
            { item: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 1 },
            { item: ITEM_DEF.WEAPON_01, ratio: 10 },
        ],
        gavasss: { min: 15, max: 20, },
    },
    ENEMY_10: {
        name: "あっしゅくマニア",
        spriteName: "comp",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 10,
        hp: 0,
        exp: { min: 179, max: 220 },
        attackRatio: 100,
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 35 },
            { item: ITEM_DEF.HERB_01, ratio: 15 },
            { item: ITEM_DEF.HERB_02, ratio: 5 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 34 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 1 },
            { item: ITEM_DEF.SHIELD_01, ratio: 10 },
        ],
        gavasss: { min: 20, max: 25, },
    },
    ENEMY_10_P: {
        name: "英語をしゃべる人",
        spriteName: "vibes",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 11,
        hp: 0,
        exp: { min: 219, max: 300 },
        attackRatio: 100,
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 55 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 10 },
            { item: ITEM_DEF.WEAPON_01, ratio: 5 },
            { item: ITEM_DEF.WEAPON_02, ratio: 5 },
            { item: ITEM_DEF.SHIELD_01, ratio: 3 },
            { item: ITEM_DEF.SHIELD_02, ratio: 2 },
        ],
        gavasss: { min: 20, max: 25, },
    },
    ENEMY_11_BS: {
        name: "パリピの民",
        spriteName: "party",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 11,
        hp: 0,
        exp: { min: 219, max: 300 },
        attackRatio: 20,
        krtRatio: 30,
        isEscape: false,
        attr: ITEM_ATTR.WATER,
        magicList: [
            { magic: ITEM_DEF.MAGIC_WATER_LV1, ratio: 80 },
            { magic: ITEM_DEF.MAGIC_WATER_LV2, ratio: 20 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 15 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_HP, ratio: 50 },
            { item: ITEM_DEF.WEAPON_02, ratio: 5 },
            { item: ITEM_DEF.SHIELD_02, ratio: 10 },
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
        attackRatio: 50,
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.WATER,
        magicList: [
            { magic: ITEM_DEF.MAGIC_WATER_LV1, ratio: 85 },
            { magic: ITEM_DEF.MAGIC_WATER_LV2, ratio: 5 },
            { item: ITEM_DEF.WEAPON_02, ratio: 5 },
            { item: ITEM_DEF.SHIELD_02, ratio: 5 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 25 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 5 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 20 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 14 },
            { item: ITEM_DEF.MAGIC_WATER_LV3, ratio: 1 },
            { item: ITEM_DEF.WEAPON_02, ratio: 10 },
            { item: ITEM_DEF.SHIELD_02, ratio: 5 },
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
        krtRatio: 15,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 20 },
            { item: ITEM_DEF.HERB_01, ratio: 15 },
            { item: ITEM_DEF.HERB_02, ratio: 15 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 20 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 14 },
            { item: ITEM_DEF.MAGIC_WATER_LV3, ratio: 1 },
            { item: ITEM_DEF.WEAPON_02, ratio: 5 },
            { item: ITEM_DEF.SHIELD_02, ratio: 10 },
        ],
        gavasss: { min: 25, max: 30, },
    },
    ENEMY_12_P: {
        name: "満更でもない人",
        spriteName: "maane",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 13,
        hp: 0,
        exp: { min: 399, max: 500 },
        attackRatio: 100,
        krtRatio: 30,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 15 },
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.HERB_02, ratio: 10 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 20 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 14 },
            { item: ITEM_DEF.MAGIC_WATER_LV3, ratio: 1 },
            { item: ITEM_DEF.WEAPON_02, ratio: 10 },
            { item: ITEM_DEF.SHIELD_02, ratio: 5 },
            { item: ITEM_DEF.MAGIC_ATK_SCF, ratio: 5 },
            { item: ITEM_DEF.MAGIC_AGI_SCF, ratio: 10 },
        ],
        gavasss: { min: 25, max: 30, },
    },
    ENEMY_13_BS: {
        name: "４倍チーズ",
        spriteName: "cheese",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 13,
        hp: 0,
        exp: { min: 399, max: 500 },
        attackRatio: 60,
        krtRatio: 100,
        isEscape: false,
        attr: ITEM_ATTR.ALL_M,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 60 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 40 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 2 },
            { item: ITEM_DEF.HERB_01, ratio: 2 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
            { item: ITEM_DEF.HERB_EXP, ratio: 95 },
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
        attackRatio: 60,
        krtRatio: 50,
        isEscape: true,
        attr: ITEM_ATTR.ALL_M,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 60 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 40 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 15 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 15 },
            { item: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 20 },
            { item: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 14 },
            { item: ITEM_DEF.MAGIC_FIRE_LV3, ratio: 1 },
            { item: ITEM_DEF.WEAPON_02, ratio: 5 },
            { item: ITEM_DEF.SHIELD_02, ratio: 10 },
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
        attackRatio: 100,
        krtRatio: 50,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 10 },
            { item: ITEM_DEF.HERB_01, ratio: 25 },
            { item: ITEM_DEF.HERB_02, ratio: 15 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 20 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 14 },
            { item: ITEM_DEF.MAGIC_WATER_LV3, ratio: 1 },
            { item: ITEM_DEF.WEAPON_02, ratio: 10 },
            { item: ITEM_DEF.SHIELD_02, ratio: 5 },
        ],
        gavasss: { min: 30, max: 35, },
    },
    ENEMY_14_P: {
        name: "聞かない人",
        spriteName: "kikumimi",
        growthTypeIdx: { min: 2, max: 5 },
        lv: 15,
        hp: 0,
        exp: { min: 599, max: 800 },
        attackRatio: 100,
        krtRatio: 50,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 15 },
            { item: ITEM_DEF.HERB_01, ratio: 50 },
            { item: ITEM_DEF.HERB_02, ratio: 20 },
            { item: ITEM_DEF.WEAPON_02, ratio: 5 },
            { item: ITEM_DEF.SHIELD_02, ratio: 10 },
        ],
        gavasss: { min: 30, max: 35, },
    },
    ENEMY_15_BS: {
        name: "めそめそしてる人",
        spriteName: "meso",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 15,
        hp: 0,
        exp: { min: 599, max: 800 },
        attackRatio: 30,
        krtRatio: 100,
        isEscape: false,
        attr: ITEM_ATTR.WATER,
        magicList: [
            { magic: ITEM_DEF.MAGIC_WATER_LV1, ratio: 30 },
            { magic: ITEM_DEF.MAGIC_WATER_LV2, ratio: 70 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 10 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 20 },
            { item: ITEM_DEF.HERB_HP, ratio: 50 },
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
        attackRatio: 60,
        krtRatio: 55,
        isEscape: true,
        attr: ITEM_ATTR.WATER,
        magicList: [
            { magic: ITEM_DEF.MAGIC_WATER_LV1, ratio: 40 },
            { magic: ITEM_DEF.MAGIC_WATER_LV2, ratio: 60 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 15 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 15 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 10 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 20 },
            { item: ITEM_DEF.MAGIC_WATER_LV3, ratio: 5 },
            { item: ITEM_DEF.WEAPON_02, ratio: 10 },
            { item: ITEM_DEF.SHIELD_02, ratio: 5 },
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
        attackRatio: 100,
        krtRatio: 55,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 10 },
            { item: ITEM_DEF.HERB_01, ratio: 35 },
            { item: ITEM_DEF.HERB_02, ratio: 40 },
            { item: ITEM_DEF.WEAPON_03, ratio: 5 },
            { item: ITEM_DEF.SHIELD_03, ratio: 10 },
        ],
        gavasss: { min: 35, max: 40, },
    },
    ENEMY_16_P: {
        name: "寝耳に水な人",
        spriteName: "nemimi",
        growthTypeIdx: { min: 3, max: 5 },
        lv: 17,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 60,
        krtRatio: 65,
        isEscape: true,
        attr: ITEM_ATTR.WATER,
        magicList: [
            { magic: ITEM_DEF.MAGIC_WATER_LV1, ratio: 40 },
            { magic: ITEM_DEF.MAGIC_WATER_LV2, ratio: 60 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_01, ratio: 10 },
            { item: ITEM_DEF.HERB_02, ratio: 25 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 10 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 20 },
            { item: ITEM_DEF.MAGIC_WATER_LV3, ratio: 5 },
            { item: ITEM_DEF.WEAPON_03, ratio: 10 },
            { item: ITEM_DEF.SHIELD_03, ratio: 5 },
            { item: ITEM_DEF.MAGIC_ATK_SCF, ratio: 10 },
            { item: ITEM_DEF.MAGIC_AGI_SCF, ratio: 5 },
        ],
        gavasss: { min: 35, max: 40, },
    },
    ENEMY_17_BS: {
        name: "光る人",
        spriteName: "saint",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 17,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 35,
        krtRatio: 100,
        isEscape: false,
        attr: ITEM_ATTR.FIRE,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 35 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 60 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV3, ratio: 5 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 2 },
            { item: ITEM_DEF.HERB_01, ratio: 2 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
            { item: ITEM_DEF.HERB_EXP, ratio: 95 },
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
        attackRatio: 60,
        krtRatio: 65,
        isEscape: true,
        attr: ITEM_ATTR.FIRE,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 35 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 60 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV3, ratio: 5 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 30 },
            { item: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 5 },
            { item: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 20 },
            { item: ITEM_DEF.MAGIC_FIRE_LV3, ratio: 10 },
            { item: ITEM_DEF.WEAPON_03, ratio: 5 },
            { item: ITEM_DEF.SHIELD_03, ratio: 10 },
        ],
        gavasss: { min: 35, max: 40, },
    },
    ENEMY_18: {
        name: "究極完全態",
        spriteName: "perfect",
        growthTypeIdx: { min: 3, max: 5 },
        lv: 18,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 100,
        krtRatio: 65,
        isEscape: true,
        attr: ITEM_ATTR.WATER,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 30 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 5 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 20 },
            { item: ITEM_DEF.MAGIC_WATER_LV3, ratio: 10 },
            { item: ITEM_DEF.WEAPON_03, ratio: 10 },
            { item: ITEM_DEF.SHIELD_03, ratio: 5 },
        ],
        gavasss: { min: 40, max: 45, },
    },
    ENEMY_18_P: {
        name: "飛び入り",
        spriteName: "runaway",
        growthTypeIdx: { min: 3, max: 5 },
        lv: 19,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 100,
        krtRatio: 72,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 10 },
            { item: ITEM_DEF.HERB_01, ratio: 35 },
            { item: ITEM_DEF.HERB_02, ratio: 40 },
            { item: ITEM_DEF.WEAPON_03, ratio: 5 },
            { item: ITEM_DEF.SHIELD_03, ratio: 10 },
        ],
        gavasss: { min: 40, max: 45, },
    },
    ENEMY_19_BS: {
        name: "ちこくしそうな人",
        spriteName: "denden",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 19,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 30,
        krtRatio: 100,
        isEscape: false,
        attr: ITEM_ATTR.WATER,
        magicList: [
            { magic: ITEM_DEF.MAGIC_WATER_LV2, ratio: 40 },
            { magic: ITEM_DEF.MAGIC_WATER_LV3, ratio: 60 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 20 },
            { item: ITEM_DEF.HERB_01, ratio: 20 },
            { item: ITEM_DEF.HERB_02, ratio: 10 },
            { item: ITEM_DEF.HERB_HP, ratio: 50 },
        ],
        gavasss: { min: 45, max: 50, },
    },
    ENEMY_19: {
        name: "ちこくしそうな人",
        spriteName: "denden",
        growthTypeIdx: { min: 3, max: 5 },
        lv: 19,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 60,
        krtRatio: 72,
        isEscape: true,
        attr: ITEM_ATTR.WATER,
        magicList: [
            { magic: ITEM_DEF.MAGIC_WATER_LV2, ratio: 20 },
            { magic: ITEM_DEF.MAGIC_WATER_LV3, ratio: 80 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 5 },
            { item: ITEM_DEF.HERB_01, ratio: 30 },
            { item: ITEM_DEF.HERB_02, ratio: 15 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 1 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 20 },
            { item: ITEM_DEF.MAGIC_WATER_LV3, ratio: 14 },
            { item: ITEM_DEF.WEAPON_03, ratio: 10 },
            { item: ITEM_DEF.SHIELD_03, ratio: 5 },
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
        attackRatio: 100,
        krtRatio: 80,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 15 },
            { item: ITEM_DEF.HERB_01, ratio: 40 },
            { item: ITEM_DEF.HERB_02, ratio: 15 },
            { item: ITEM_DEF.WEAPON_03, ratio: 5 },
            { item: ITEM_DEF.SHIELD_03, ratio: 10 },
            { item: ITEM_DEF.MAGIC_ATK_SCF, ratio: 5 },
            { item: ITEM_DEF.MAGIC_AGI_SCF, ratio: 10 },
        ],
        gavasss: { min: 45, max: 50, },
    },
    ENEMY_20_P: {
        name: "イカの人",
        spriteName: "ikacos",
        growthTypeIdx: { min: 3, max: 5 },
        lv: 21,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 100,
        krtRatio: 80,
        isEscape: true,
        attr: ITEM_ATTR.WATER,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 5 },
            { item: ITEM_DEF.HERB_01, ratio: 30 },
            { item: ITEM_DEF.HERB_02, ratio: 15 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 1 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 20 },
            { item: ITEM_DEF.MAGIC_WATER_LV3, ratio: 14 },
            { item: ITEM_DEF.WEAPON_03, ratio: 5 },
            { item: ITEM_DEF.WEAPON_04, ratio: 5 },
            { item: ITEM_DEF.SHIELD_03, ratio: 3 },
            { item: ITEM_DEF.SHIELD_04, ratio: 2 },
        ],
        gavasss: { min: 45, max: 50, },
    },
    ENEMY_21_BS: {
        name: "女子",
        spriteName: "girl",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 21,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 30,
        krtRatio: 100,
        isEscape: false,
        attr: ITEM_ATTR.FIRE,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 20 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV3, ratio: 80 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 2 },
            { item: ITEM_DEF.HERB_01, ratio: 2 },
            { item: ITEM_DEF.HERB_02, ratio: 1 },
            { item: ITEM_DEF.HERB_EXP, ratio: 95 },
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
        attackRatio: 60,
        krtRatio: 92,
        isEscape: true,
        attr: ITEM_ATTR.FIRE,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 20 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV3, ratio: 80 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 5 },
            { item: ITEM_DEF.HERB_01, ratio: 30 },
            { item: ITEM_DEF.HERB_02, ratio: 15 },
            { item: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 1 },
            { item: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 20 },
            { item: ITEM_DEF.MAGIC_FIRE_LV3, ratio: 14 },
            { item: ITEM_DEF.WEAPON_04, ratio: 5 },
            { item: ITEM_DEF.SHIELD_04, ratio: 10 },
        ],
        gavasss: { min: 45, max: 50, },
    },
    ENEMY_22: {
        name: "かきんぜい",
        spriteName: "kakin",
        growthTypeIdx: { min: 4, max: 5 },
        lv: 22,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 100,
        krtRatio: 96,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 5 },
            { item: ITEM_DEF.HERB_01, ratio: 50 },
            { item: ITEM_DEF.HERB_02, ratio: 30 },
            { item: ITEM_DEF.WEAPON_04, ratio: 10 },
            { item: ITEM_DEF.SHIELD_04, ratio: 5 },
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
        attackRatio: 100,
        krtRatio: 96,
        isEscape: true,
        attr: ITEM_ATTR.WATER,
        magicList: [],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 5 },
            { item: ITEM_DEF.HERB_01, ratio: 30 },
            { item: ITEM_DEF.HERB_02, ratio: 15 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 1 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 20 },
            { item: ITEM_DEF.MAGIC_WATER_LV3, ratio: 14 },
            { item: ITEM_DEF.WEAPON_04, ratio: 5 },
            { item: ITEM_DEF.SHIELD_04, ratio: 10 },
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
        attackRatio: 70,
        krtRatio: 96,
        isEscape: true,
        attr: ITEM_ATTR.FIRE,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 20 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV3, ratio: 80 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 5 },
            { item: ITEM_DEF.HERB_01, ratio: 30 },
            { item: ITEM_DEF.HERB_02, ratio: 15 },
            { item: ITEM_DEF.MAGIC_FIRE_LV1, ratio: 1 },
            { item: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 20 },
            { item: ITEM_DEF.MAGIC_FIRE_LV3, ratio: 14 },
            { item: ITEM_DEF.WEAPON_04, ratio: 10 },
            { item: ITEM_DEF.SHIELD_04, ratio: 5 },
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
        attackRatio: 70,
        krtRatio: 96,
        isEscape: true,
        attr: ITEM_ATTR.NEUTRAL,
        magicList: [
            { magic: ITEM_DEF.MAGIC_WATER_LV2, ratio: 20 },
            { magic: ITEM_DEF.MAGIC_WATER_LV3, ratio: 80 },
        ],
        itemList: [
            { item: ITEM_DEF.HERB_00, ratio: 5 },
            { item: ITEM_DEF.HERB_01, ratio: 30 },
            { item: ITEM_DEF.HERB_02, ratio: 15 },
            { item: ITEM_DEF.MAGIC_WATER_LV1, ratio: 1 },
            { item: ITEM_DEF.MAGIC_WATER_LV2, ratio: 20 },
            { item: ITEM_DEF.MAGIC_WATER_LV3, ratio: 14 },
            { item: ITEM_DEF.WEAPON_04, ratio: 5 },
            { item: ITEM_DEF.SHIELD_04, ratio: 10 },
        ],
        gavasss: { min: 90, max: 100, },
    },
    ENEMY_26: {
        name: "じっしゃ版",
        spriteName: "last",
        growthTypeIdx: { min: 5, max: 5 },
        lv: 29,
        hp: 0,
        exp: { min: 700, max: 900 },
        attackRatio: 70,
        krtRatio: 125,
        isEscape: false,
        attr: ITEM_ATTR.ALL_P,
        magicList: [
            { magic: ITEM_DEF.MAGIC_FIRE_LV2, ratio: 5 },
            { magic: ITEM_DEF.MAGIC_FIRE_LV3, ratio: 45 },
            { magic: ITEM_DEF.MAGIC_WATER_LV2, ratio: 5 },
            { magic: ITEM_DEF.MAGIC_WATER_LV3, ratio: 45 },
        ],
        itemList: [],
        gavasss: { min: 1000, max: 1000, },
    },
});