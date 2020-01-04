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
const ITEM_ATTR = defineEnum({
    // 全ての属性にマイナス
    ALL_M: {
        id: -3,
    },
    // 全ての属性にプラス
    ALL_P: {
        id: -2,
    },
    // 中性
    NEUTRAL: {
        id: -1,
    },
    // 火
    FIRE: {
        id: 0,
    },
    // 水
    WATER: {
        id: 1,
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
        name: 'ふつうの棒',
        value: 2,
    },
    WEAPON_01: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'すごい棒',
        value: 4,
    },
    WEAPON_02: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'ヤバい棒',
        value: 7,
    },
    WEAPON_03: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'スーパーな棒',
        value: 9,
    },
    WEAPON_04: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'ハイパーな棒',
        value: 11,
    },
    WEAPON_05: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'ウルトラな棒',
        value: 14,
    },
    WEAPON_06: {
        type: ITEM_TYPE.WEAPON,
        exec: ITEM_EXEC.EQUIP,
        name: 'ボス専用の棒',
        value: 11,  // ボスだと20
    },

    // 盾
    SHIELD_00: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'ふつうの盾',
        value: 2,
    },
    SHIELD_01: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'すごい盾',
        value: 3,
    },
    SHIELD_02: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'ヤバい盾',
        value: 6,
    },
    SHIELD_03: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'スーパーな盾',
        value: 9,
    },
    SHIELD_04: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'ハイパーな盾',
        value: 10,
    },
    SHIELD_05: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'ウルトラな盾',
        value: 13,
    },
    SHIELD_06: {
        type: ITEM_TYPE.SHIELD,
        exec: ITEM_EXEC.EQUIP,
        name: 'ボス専用の盾',
        value: 10,  //ボスだと15
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
    HERB_ANTIDOTE: {
        type: ITEM_TYPE.HERB_1,
        exec: ITEM_EXEC.USE,
        id: 3,
        name: 'どくけしそう',
        value: 0,   // どくから回復
    },
    HERB_EXP: {
        type: ITEM_TYPE.HERB_2,
        exec: ITEM_EXEC.USE,
        name: 'けいけんのみ',
        value: 0,   // Lv+1
    },
    HERB_HP: {
        type: ITEM_TYPE.HERB_3,
        exec: ITEM_EXEC.USE,
        id: 5,
        name: 'いのちのみ',
        value: 5,   // MaxHP+5
    },

    // 魔法（直接攻撃）
    MAGIC_FIRE_LV1: {
        type: ITEM_TYPE.MAGIC_DIRECT_ATTACK,
        attr: ITEM_ATTR.FIRE,
        exec: ITEM_EXEC.USE,
        name: '炎の巻物',
        success: 70,  //　成功確率（％）
        min: 15,  //　最小ダメージ
        max: 25,  //　最大ダメージ
    },
    MAGIC_FIRE_LV2: {
        type: ITEM_TYPE.MAGIC_DIRECT_ATTACK,
        attr: ITEM_ATTR.FIRE,
        exec: ITEM_EXEC.USE,
        name: '火炎の巻物',
        success: 60,  //　成功確率（％）
        min: 25,  //　最小ダメージ
        max: 35,  //　最大ダメージ
    },
    MAGIC_FIRE_LV3: {
        type: ITEM_TYPE.MAGIC_DIRECT_ATTACK,
        attr: ITEM_ATTR.FIRE,
        exec: ITEM_EXEC.USE,
        name: '焦熱地獄の巻物',
        success: 50,  //　成功確率（％）
        min: 35,  //　最小ダメージ
        max: 45,  //　最大ダメージ
    },
    MAGIC_WATER_LV1: {
        type: ITEM_TYPE.MAGIC_DIRECT_ATTACK,
        attr: ITEM_ATTR.WATER,
        exec: ITEM_EXEC.USE,
        name: '小波の巻物',
        success: 70,  //　成功確率（％）
        min: 15,  //　最小ダメージ
        max: 25,  //　最大ダメージ
    },
    MAGIC_WATER_LV2: {
        type: ITEM_TYPE.MAGIC_DIRECT_ATTACK,
        attr: ITEM_ATTR.WATER,
        exec: ITEM_EXEC.USE,
        name: '津波の巻物',
        success: 60,  //　成功確率（％）
        min: 25,  //　最小ダメージ
        max: 35,  //　最大ダメージ
    },
    MAGIC_WATER_LV3: {
        type: ITEM_TYPE.MAGIC_DIRECT_ATTACK,
        attr: ITEM_ATTR.WATER,
        exec: ITEM_EXEC.USE,
        name: '大津波の巻物',
        success: 50,  //　成功確率（％）
        min: 35,  //　最小ダメージ
        max: 45,  //　最大ダメージ
    },

    // 魔法（間接攻撃）
    MAGIC_SLEEP: {
        type: ITEM_TYPE.MAGIC_INDIRCT_ATTACK,
        attr: ITEM_ATTR.NEUTRAL,
        exec: ITEM_EXEC.USE,
        name: 'ネムりの巻物', // 相手が一定確率で眠る
        success: 30,  //　成功確率（％）
        min: 3,
        max: 3,
    },
    MAGIC_CURSE: {
        type: ITEM_TYPE.MAGIC_INDIRCT_ATTACK,
        attr: ITEM_ATTR.NEUTRAL,
        exec: ITEM_EXEC.USE,
        name: 'のろいの巻物',   // 相手の呪文を無効化
        success: 100,  //　成功確率（％）
        min: 0,
        max: 0,
    },
    MAGIC_DARKNESS_LV1: {
        type: ITEM_TYPE.MAGIC_INDIRCT_ATTACK,
        attr: ITEM_ATTR.NEUTRAL,
        exec: ITEM_EXEC.USE,
        name: '砂けむりの巻物',   // 相手の攻撃成功率が75%になる
        success: 75,  //　成功確率（％）
        min: 75,
        max: 75,
    },
    MAGIC_DARKNESS_LV2: {
        type: ITEM_TYPE.MAGIC_INDIRCT_ATTACK,
        attr: ITEM_ATTR.NEUTRAL,
        exec: ITEM_EXEC.USE,
        name: '砂あらしの巻物',   // 相手の攻撃成功率が50%になる
        success: 50,  //　成功確率（％）
        min: 25,
        max: 25,
    },
    MAGIC_ATK_SCF: {
        type: ITEM_TYPE.MAGIC_INDIRCT_ATTACK,
        attr: ITEM_ATTR.NEUTRAL,
        exec: ITEM_EXEC.USE,
        name: '攻めの巻物',
        success: 100,  //　成功確率（％）
        min: 2, // 攻撃力2倍
        max: 2,
    },
    MAGIC_AGI_SCF: {
        type: ITEM_TYPE.MAGIC_INDIRCT_ATTACK,
        attr: ITEM_ATTR.NEUTRAL,
        exec: ITEM_EXEC.USE,
        name: '受けの巻物',
        success: 100,  //　成功確率（％）
        min: 1.5,   // 防御力1.5倍
        max: 1.5,
    },
});