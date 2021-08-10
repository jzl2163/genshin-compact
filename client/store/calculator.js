export const state = () => ({
  DMGcalculator: [
    {
      title: "ATK",
      description: "Enter base, percent and flat ATK or calculated full ATK",
      attrs: [
        { attr: "Full ATK", var: "ATK" },
        { attr: "Base ATK", var: "baseATK" },
        { attr: "Percent ATK", var: "percentATK" },
        { attr: "Flat ATK", var: "flatATK" }
      ]
    },
    {
      title: "DEF",
      description: "Enter base, percent and flat DEF or calculated full DEF",
      attrs: [
        { attr: "Full DEF", var: "DEF" },
        { attr: "Base DEF", var: "baseDEF" },
        { attr: "Percent DEF", var: "percentDEF" },
        { attr: "Flat DEF", var: "flatDEF" }
      ]
    },
    {
      title: "HP",
      description: "Enter base, percent and flat HP or calculated full HP",
      attrs: [
        { attr: "Full HP", var: "HP" },
        { attr: "Base HP", var: "baseHP" },
        { attr: "Percent HP", var: "percentHP" },
        { attr: "Flat HP", var: "flatHP" }
      ]
    },
    {
      title: "Crit",
      description:
        "Enter crit rate and crit damage for calculated ability crit and AVG damage",
      attrs: [
        { attr: "Crit Rate", var: "critRate" },
        { attr: "Crit Damage", var: "critDMG" }
      ]
    },
    {
      title: "Additional DMG",
      description:
        "Enter elemental or physical damage and additional damage as Normall Attack damage, Charged Attack damage and etc. for calculated output ability damage multiplier",
      attrs: [
        { attr: "Elemental/Physical Damage", var: "elemDMG" },
        { attr: "Normall Attack DMG", var: "normallDMG" },
        { attr: "Charged Attack DMG", var: "chargedDMG" },
        { attr: "Plunging Attack DMG", var: "plungingDMG" },
        { attr: "Elemental Skill DMG", var: "elementalSkillDMG" },
        { attr: "Elemental Burst DMG", var: "elementalBurstDMG" }
      ]
    },
    {
      title: "Monster DEF/RES",
      description:
        "Enter character level, monster level, monster DEF reduction (C4 Razor, C2 Klee, P2 Liza) and monster RES (if left blank, the default is 10%) for calculated input ability damage multiplier",
      attrs: [
        { attr: "Character Level", var: "charLVL" },
        { attr: "Monster Level", var: "monsterLVL" },
        { attr: "Monster DEF Reduction", var: "monsterDEFReduc" },
        { attr: "Monster RES", var: "monsterRES" },
        { attr: "Monster RES Reduction", var: "monsterRESReduc" }
      ]
    }
  ],
  ReactionCalculator: [
    {
      title: "Stats",
      description: "Enter base, percent and flat ATK or calculated full ATK",
      attrs: [
        { attr: "Elemental Mastery", var: "mastery" },
        { attr: "Character level", var: "charLVL" },
        { attr: "Monster RES", var: "monsterRES" },
        { attr: "Monster RES Reduction", var: "monsterRESReduc" }
      ]
    },
    {
      title: "Reaction Multiplier",
      description: "Enter base, percent and flat DEF or calculated full DEF",
      attrs: [
        { attr: "Vaporize", var: "vaporize" },
        { attr: "Melt", var: "melt" },
        { attr: "Electro-Charged", var: "electroCharged" },
        { attr: "Overloaded", var: "overloaded" },
        { attr: "Superconduct", var: "superconduct" },
        { attr: "Frozen", var: "frozen" },
        { attr: "Swirl", var: "swirl" },
        { attr: "Crystalize", var: "crystalize" }
      ]
    }
  ],
  Noelle: [
    0,
    0.4,
    0.43,
    0.46,
    0.5,
    0.53,
    0.56,
    0.6,
    0.64,
    0.68,
    0.72,
    0.76,
    0.8,
    0.85,
    0.9,
    0.95
  ],
  Zhongli: {
    "Normall Attack": 1.39,
    "Charged Attack": 1.39,
    "Plunging Attack": 1.39,
    "Elemental Skill": 1.9,
    "Elemental Burst": 33
  }
});
