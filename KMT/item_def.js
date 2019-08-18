const ITEM_TYPE = defineEnum({
    // ダミー
    DUMMY: {
        id: -1,
    },
    // 武器
    WEAPON: {
        id: 0,
    },
    // 盾
    SHIELD: {
        id: 1,
    },
    // 薬草
    HERB_0: {
        id: 2,
    },
    // 薬草
    HERB_1: {
        id: 3,
    },
    // 薬草
    HERB_2: {
        id: 4,
    },
    // 薬草
    HERB_3: {
        id: 5,
    },
    // 魔法（直接魔法）
    MAGIC_DIRECT_ATTACK: {
        id: 6,
    },
    // 魔法（間接魔法）
    MAGIC_INDIRECT_ATTACK: {
        id: 7,
    },
});
const ITEM_EXEC = defineEnum({
    // ダミー
    DUMMY: {
        id: -1,
    },
    // 使う
    USE: {
        id: 0,
    },
    // 装備
    EQUIP: {
        id: 1,
    },
});
const ITEM_DEF = defineEnum({
    // ダミー
    EMPTY: {
        type: ITEM_TYPE.DUMMY,
        exec: ITEM_EXEC.DUMMY,
        name: 'N/A',
        success: 100,  //　成功確率（％）
        value: 0,
        min: 0,
        max: 0,
    },
    // 武器
    WEAPON_00: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'こんぼう',
        value: 2,
    },
    WEAPON_01: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'せいどうのけん',
        value: 4,
    },
    WEAPON_02: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'もくせいバット',
        value: 10,
    },
    WEAPON_03: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'きんぞくバット',
        value: 20,
    },
    WEAPON_04: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'ひっさつのけん',
        value: 28,
    },
    ITEM_05: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'ステンレスのけん',
        value: 30,
    },
    WEAPON_06: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'ひっちゅうのけん',
        value: 30,  // 命中率100%、攻30
    },

    // 盾
    SHIELD_00: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'ベニヤのたて',
        value: 2,
    },
    SHIELD_01: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'ＦＲＰのたて',
        value: 4,
    },
    SHIELD_02: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'てつのたて',
        value: 10,
    },
    SHIELD_03: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'ぼうどくのたて',
        value: 16,
    },
    SHIELD_04: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'まほうのたて',
        value: 24,  // 特殊攻撃半減
    },
    SHIELD_05: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'ドラゴンのたて',
        value: 24,  // 火炎暴風雪半減
    },
    SHIELD_06: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'きめんのたて',
        value: 40,
    },

    // 薬草
    HERB_00: {
        type: ITEM_TYPE.HERB_0,
        exec: ITEM_EXEC.USE,
        name: 'やくそう',
        value: 30,
    },
    HERB_01: {
        type: ITEM_TYPE.HERB_0,
        exec: ITEM_EXEC.USE,
        name: 'いいやくそう',
        value: 50,
    },
    HERB_02: {
        type: ITEM_TYPE.HERB_0,
        exec: ITEM_EXEC.USE,
        name: 'すごいやくそう',
        value: 2100000000,   // 全回復
    },
    HERB_03: {
        type: ITEM_TYPE.HERB_1,
        exec: ITEM_EXEC.USE,
        id: 3,
        name: 'どくけしそう',
        value: 0,   // どくから回復
    },
    HERB_04: {
        type: ITEM_TYPE.HERB_2,
        exec: ITEM_EXEC.USE,
        name: 'けいけんのみ',
        value: 0,   // Lv+1
    },
    HERB_05: {
        type: ITEM_TYPE.HERB_3,
        exec: ITEM_EXEC.USE,
        id: 5,
        name: 'いのちのみ',
        value: 5,   // MaxHP+5
    },

    // 魔法（直接攻撃）
    MAGIC_00: {
        type: ITEM_TYPE.MAGIC_DIRECT_ATTACK,
        exec: ITEM_EXEC.USE,
        name: 'ほのうのしょ',
        success: 70,  //　成功確率（％）
        min: 15,  //　最小ダメージ
        max: 25,  //　最大ダメージ
    },
    MAGIC_01: {
        type: ITEM_TYPE.MAGIC_DIRECT_ATTACK,
        exec: ITEM_EXEC.USE,
        name: 'かえんのしょ',
        success: 50,  //　成功確率（％）
        min: 55,  //　最小ダメージ
        max: 65,  //　最大ダメージ
    },

    // 魔法（間接攻撃）
    MAGIC_02: {
        type: ITEM_TYPE.MAGIC_INDIRCT_ATTACK,
        exec: ITEM_EXEC.USE,
        name: 'スリープのしょ', // 相手が３回眠る（３ターンスキップ）
        success: 40,  //　成功確率（％）
        min: 3,
        max: 3,
    },
    MAGIC_03: {
        type: ITEM_TYPE.MAGIC_INDIRCT_ATTACK,
        exec: ITEM_EXEC.USE,
        name: 'くらやみのしょ',   // 相手の攻撃命中率を半減
        success: 40,  //　成功確率（％）
        min: 45,
        max: 55,
    },
    MAGIC_04: {
        type: ITEM_TYPE.MAGIC_INDIRCT_ATTACK,
        exec: ITEM_EXEC.USE,
        name: 'アタックのしょ', // 攻撃力2倍
        success: 100,  //　成功確率（％）
        min: 2,
        max: 2,
    },
    MAGIC_05: {
        type: ITEM_TYPE.MAGIC_INDIRCT_ATTACK,
        exec: ITEM_EXEC.USE,
        name: 'ガードのしょ',   // 防御力1.5倍
        success: 100,  //　成功確率（％）
        min: 1.5,
        max: 1.5,
    },
});