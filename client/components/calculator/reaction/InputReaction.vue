<template>
  <v-container dark fluid fill-height>
    <v-card
      dark
      color="#1c1c22"
      height="100%"
      width="100%"
      class="rounded-lg pb-3"
    >
      <v-card-title class="justify-center text-truncate">Stats</v-card-title>
      <v-tabs dark class="rounded-0" show-arrows background-color="#1c1c22">
        <v-tab
          v-for="(item, index) in this.$store.state.calculator
            .ReactionCalculator"
          :key="index"
        >
          {{ item.title }}
        </v-tab>
        <v-tab-item
          v-for="(item, index) in this.$store.state.calculator
            .ReactionCalculator"
          :key="index"
        >
          <AttrForm @inputStat="getInput" v-bind="{ attr: item }" />
        </v-tab-item>
      </v-tabs>
      <v-card-title class="justify-center text-truncate pb-0"
        >Rotation of abilities</v-card-title
      >
      <v-tabs
        v-model="selectAbility"
        dark
        class="rounded-0"
        show-arrows
        background-color="#1c1c22"
      >
        <v-tab v-for="index in abilityLength" :key="index" class="pr-0"
          >{{ "Ability " + index }}
          <v-btn
            color="#1c1c22"
            tile
            elevation="0"
            @click.prevent="deleteAbility(index)"
            height="100%"
            class="ml-3"
          >
            &times
          </v-btn>
        </v-tab>
        <v-btn
          color="#1c1c22"
          height="100%"
          tile
          elevation="0"
          @click.prevent="addAbility"
          >+</v-btn
        >
        <v-tab-item v-for="index in abilityLength" :key="index">
          <SkillForm v-bind="{ index: index - 1 }" @inputStat="getInput" />
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import AttrForm from "@/components/calculator/reaction/in/attrReactionForm";
import SkillForm from "@/components/calculator/reaction/in/SkillReactionForm";

export default {
  data: () => ({
    selectAbility: 0,
    abilityLength: 1,
    input: {
      ATK: 0,
      baseATK: 0,
      percentATK: 0,
      flatATK: 0,
      DEF: 0,
      baseDEF: 0,
      percentDEF: 0,
      flatDEF: 0,
      HP: 0,
      baseHP: 0,
      percentHP: 0,
      flatHP: 0,
      critRate: 5,
      critDMG: 50,
      elemDMG: 0,
      normallDMG: 0,
      chargedDMG: 0,
      plungingDMG: 0,
      elementalSkillDMG: 0,
      elementalBurstDMG: 0,
      charLVL: 1,
      monsterLVL: 1,
      monsterDEFReduc: 0,
      monsterRES: 10,
      monsterRESReduc: 0,
      special: { character: null, level: 0 },

      abilities: [
        {
          abilityDMG: null,
          abilitySPD: null,
          abilityATTR: "ATK",
          abilityType: "Normall Attack"
        }
      ]
    }
  }),
  components: { AttrForm, SkillForm },
  methods: {
    getInput(input) {
      let inp = input.input;
      if (input.attr === "ATK") {
        inp.ATK ? (this.input.ATK = +inp.ATK) : (this.input.ATK = 0);
        inp.baseATK
          ? (this.input.baseATK = +inp.baseATK)
          : (this.input.baseATK = 0);
        inp.percentATK
          ? (this.input.percentATK = +inp.percentATK)
          : (this.input.percentATK = 0);
        inp.flatATK
          ? (this.input.flatATK = +inp.flatATK)
          : (this.input.flatATK = 0);
      }
      if (input.attr === "DEF") {
        inp.DEF ? (this.input.DEF = +inp.DEF) : (this.input.DEF = 0);
        inp.baseDEF
          ? (this.input.baseDEF = +inp.baseDEF)
          : (this.input.baseDEF = 0);
        inp.percentDEF
          ? (this.input.percentDEF = +inp.percentDEF)
          : (this.input.percentDEF = 0);
        inp.flatDEF
          ? (this.input.flatDEF = +inp.flatDEF)
          : (this.input.flatDEF = 0);
      }
      if (input.attr === "HP") {
        inp.HP ? (this.input.HP = +inp.HP) : (this.input.HP = 0);
        inp.baseHP
          ? (this.input.baseHP = +inp.baseHP)
          : (this.input.baseHP = 0);
        inp.percentHP
          ? (this.input.percentHP = +inp.percentHP)
          : (this.input.percentHP = 0);
        inp.flatHP
          ? (this.input.flatHP = +inp.flatHP)
          : (this.input.flatHP = 0);
      }
      if (input.attr === "Crit") {
        inp.critRate
          ? (this.input.critRate = +inp.critRate)
          : (this.input.critRate = 5);
        inp.critDMG
          ? (this.input.critDMG = +inp.critDMG)
          : (this.input.critDMG = 50);
      }
      if (input.attr === "Additional DMG") {
        inp.elemDMG
          ? (this.input.elemDMG = +inp.elemDMG)
          : (this.input.elemDMG = 0);
        inp.normallDMG
          ? (this.input.normallDMG = +inp.normallDMG)
          : (this.input.normallDMG = 0);
        inp.chargedDMG
          ? (this.input.chargedDMG = +inp.chargedDMG)
          : (this.input.chargedDMG = 0);
        inp.plungingDMG
          ? (this.input.plungingDMG = +inp.plungingDMG)
          : (this.input.plungingDMG = 0);
        inp.elementalSkillDMG
          ? (this.input.elementalSkillDMG = +inp.elementalSkillDMG)
          : (this.input.elementalSkillDMG = 0);
        inp.elementalBurstDMG
          ? (this.input.elementalBurstDMG = +inp.elementalBurstDMG)
          : (this.input.elementalBurstDMG = 0);
      }
      if (input.attr === "Monster DEF/RES") {
        inp.charLVL
          ? (this.input.charLVL = +inp.charLVL)
          : (this.input.charLVL = 1);
        inp.monsterLVL
          ? (this.input.monsterLVL = +inp.monsterLVL)
          : (this.input.monsterLVL = 1);
        inp.monsterDEFReduc
          ? (this.input.monsterDEFReduc = +inp.monsterDEFReduc)
          : (this.input.monsterDEFReduc = 0);
        inp.monsterRES
          ? (this.input.monsterRES = +inp.monsterRES)
          : (this.input.monsterRES = 10);
        inp.monsterRESReduc
          ? (this.input.monsterRESReduc = +inp.monsterRESReduc)
          : (this.input.monsterRESReduc = 0);
      }
      if (input.attr === "ability") {
        inp.abilityDMG
          ? (this.input.abilities[input.index].abilityDMG = +inp.abilityDMG)
          : (this.input.abilities[input.index].abilityDMG = 0);
        inp.abilitySPD
          ? (this.input.abilities[input.index].abilitySPD = +inp.abilitySPD)
          : (this.input.abilities[input.index].abilitySPD = 0);
        this.input.abilities[input.index].abilityATTR = inp.abilityATTR;
        this.input.abilities[input.index].abilityType = inp.abilityType;
      }
      if (input.attr === "special") {
        this.input.special = inp;
      }
    },
    addAbility() {
      this.abilityLength++;
      this.input.abilities.push({
        abilityDMG: null,
        abilitySPD: null,
        abilityATTR: "ATK",
        abilityType: "Normall Attack"
      });
      setTimeout(() => {
        this.selectAbility = this.abilityLength - 1;
      }, 0);
    },
    deleteAbility(index) {
      if (this.abilityLength > 1) {
        this.input.abilities.splice(index - 1, 1);
        setTimeout(() => {
          if (this.selectAbility === index - 1) {
            this.selectAbility--;
          }
        }, 0);
        setTimeout(() => {
          this.abilityLength--;
        }, 10);
      }
    }
  },
  watch: {
    input: {
      handler(val) {
        this.$emit("inputStat", { input: this.input });
      },
      deep: true
    }
  }
};
</script>

<style lang="scss">
.v-window__container {
  background: #33333e;
}
</style>
