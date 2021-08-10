<template>
  <v-container dark fluid fill-height>
    <v-card
      dark
      color="#33333e"
      height="100%"
      width="100%"
      class="rounded-lg pb-3"
    >
      <v-card-title class="justify-center text-truncate">Stats</v-card-title>
      <v-card-text>
        <v-row>
          <v-col class="text-center">
            <p>ATK: {{ ATK.toFixed() }}</p>
          </v-col>
          <v-col class="text-center">
            <p>DEF: {{ DEF.toFixed() }}</p>
          </v-col>
          <v-col class="text-center">
            <p>HP: {{ HP.toFixed() }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Dialog v-bind="{ DMGMulti, DMGMultiWithDEF, monsterDEF }" />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-title class="justify-center text-truncate">Rotation</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-data-table
              style="background: #33333e"
              :headers="abilityDMG"
              :items="ability.rotation"
              :items-per-page="5"
            ></v-data-table>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-title class="justify-center text-truncate">DPS</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-simple-table style="background: #33333e">
              <template v-slot:default>
                <thead style="background: #33333e" class="rounded-lg">
                  <tr>
                    <th class="text-left">
                      Time
                    </th>
                    <th class="text-left">
                      No Crit
                    </th>
                    <th class="text-left">
                      AVG
                    </th>
                    <th class="text-left">
                      Crit
                    </th>
                  </tr>
                </thead>
                <tbody style="background: #33333e">
                  <tr>
                    <td>{{ rotation.time.toFixed() }}</td>
                    <td>{{ rotation.DPS.noCrit.toFixed() }}</td>
                    <td>{{ rotation.DPS.crit.toFixed() }}</td>
                    <td>{{ rotation.DPS.AVG.toFixed() }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Dialog from "@/components/calculator/damage/in/DialogMultiplier";
import getAVGDMG from "@/static/AVG";
export default {
  components: { Dialog },
  data: () => {
    return {
      abilityDMG: [
        {
          text: "Ability",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "No Crit", value: "noCrit" },
        { text: "AVG", value: "AVG" },
        { text: "Crit", value: "crit" }
      ],

      data: 0,

      ATK: 0,
      DEF: 0,
      HP: 0,
      attr: "",

      monsterDEF: 0,
      DMGMulti: {
        normallDMG: 1,
        chargedDMG: 1,
        plungingDMG: 1,
        elementalSkillDMG: 1,
        elementalBurstDMG: 1
      },
      DMGMultiWithDEF: {
        normallDMG: 0,
        chargedDMG: 0,
        plungingDMG: 0,
        elementalSkillDMG: 0,
        elementalBurstDMG: 0
      },

      vaporize: 2,
      melt: 1.5,

      ability: {
        noCrit: [],
        crit: [],
        AVG: [],
        rotation: []
      },
      rotation: {
        DMG: {
          AVG: 0,
          noCrit: 0,
          crit: 0
        },
        DPS: {
          AVG: 0,
          noCrit: 0,
          crit: 0
        },
        time: 0
      }
    };
  },
  props: ["input"],
  methods: {
    validate(stat, min, max, rank = 1) {
      return +stat >= min && +stat <= max && Number.isInteger(+stat * rank);
    },
    setATK() {
      if (!this.validate(+this.data.baseATK, 1, 2000)) {
        this.data.baseATK = 0;
      }
      if (!this.validate(+this.data.percentATK, 1, 300, 10)) {
        this.data.percentATK = 0;
      }
      if (!this.validate(+this.data.flatATK, 1, 2000)) {
        this.data.flatATK = 0;
      }
      if (!this.validate(+this.data.ATK, 1, 20000)) {
        this.data.ATK = 0;
      }
      let sum =
        +this.data.baseATK * (1 + +this.data.percentATK / 100) +
        +this.data.flatATK;
      sum > this.data.ATK ? (this.ATK = sum) : (this.ATK = this.data.ATK);
    },
    setDEF() {
      if (!this.validate(+this.data.baseDEF, 1, 2000)) {
        this.data.baseDEF = 0;
      }
      if (!this.validate(+this.data.percentDEF, 1, 300, 10)) {
        this.data.percentDEF = 0;
      }
      if (!this.validate(+this.data.flatDEF, 1, 2000)) {
        this.data.flatDEF = 0;
      }
      if (!this.validate(+this.data.DEF, 1, 20000)) {
        this.data.DEF = 0;
      }
      let sum =
        +this.data.baseDEF * (1 + +this.data.percentDEF / 100) +
        +this.data.flatDEF;
      sum > this.data.DEF ? (this.DEF = sum) : (this.DEF = this.data.DEF);
    },
    setHP() {
      if (!this.validate(+this.data.baseHP, 1, 20000)) {
        this.data.baseHP = 0;
      }
      if (!this.validate(+this.data.percentHP, 1, 300, 10)) {
        this.data.percentHP = 0;
      }
      if (!this.validate(+this.data.flatHP, 1, 20000)) {
        this.data.flatHP = 0;
      }
      if (!this.validate(+this.data.HP, 1, 100000)) {
        this.data.HP = 0;
      }
      let sum =
        +this.data.baseHP * (1 + +this.data.percentHP / 100) +
        +this.data.flatHP;
      sum > this.data.HP ? (this.HP = sum) : (this.HP = this.data.HP);
    },
    setAddDMG() {
      if (!this.validate(+this.data.elemDMG, 0.1, 300, 10)) {
        this.data.elemDMG = 0;
      }
      if (!this.validate(+this.data.normallDMG, 0.1, 100, 10)) {
        this.data.normallDMG = 0;
      }
      if (!this.validate(+this.data.chargedDMG, 0.1, 100, 10)) {
        this.data.chargedDMG = 0;
      }
      if (!this.validate(+this.data.plungingDMG, 0.1, 100, 10)) {
        this.data.plungingDMG = 0;
      }
      if (!this.validate(+this.data.elementalSkillDMG, 0.1, 100, 10)) {
        this.data.elementalSkillDMG = 0;
      }
      if (!this.validate(+this.data.elementalBurstDMG, 0.1, 100, 10)) {
        this.data.elementalBurstDMG = 0;
      }

      this.DMGMulti.normallDMG = Number.isNaN(
        1 + (+this.data.normallDMG + +this.data.elemDMG) / 100
      )
        ? 1
        : 1 + (+this.data.normallDMG + +this.data.elemDMG) / 100;
      this.DMGMulti.chargedDMG = Number.isNaN(
        1 + (+this.data.chargedDMG + +this.data.elemDMG) / 100
      )
        ? 1
        : 1 + (+this.data.chargedDMG + +this.data.elemDMG) / 100;
      this.DMGMulti.plungingDMG = Number.isNaN(
        1 + (+this.data.plungingDMG + +this.data.elemDMG) / 100
      )
        ? 1
        : 1 + (+this.data.plungingDMG + +this.data.elemDMG) / 100;
      this.DMGMulti.elementalSkillDMG = Number.isNaN(
        1 + (+this.data.elementalSkillDMG + +this.data.elemDMG) / 100
      )
        ? 1
        : 1 + (+this.data.elementalSkillDMG + +this.data.elemDMG) / 100;
      this.DMGMulti.elementalBurstDMG = Number.isNaN(
        1 + (+this.data.elementalBurstDMG + +this.data.elemDMG) / 100
      )
        ? 1
        : 1 + (+this.data.elementalBurstDMG + +this.data.elemDMG) / 100;
    },
    setMonsterDEF() {
      if (!this.validate(+this.data.charLVL, 1, 90)) {
        this.data.charLVL = 1;
      }
      if (!this.validate(+this.data.monsterLVL, 1, 110)) {
        this.data.monsterLVL = 1;
      }
      if (!this.validate(+this.data.monsterDEFReduc, 1, 53)) {
        this.data.monsterDEFReduc = 0;
      }

      this.monsterDEF =
        (+this.data.charLVL + 100) /
        ((1 - +this.data.monsterDEFReduc / 100) *
          (+this.data.monsterLVL + 100) +
          +this.data.charLVL +
          100);
    },
    setDMGMultiWithDef() {
      if (!this.validate(+this.data.monsterRES, -300, 300)) {
        this.data.monsterRES = 10;
      }
      if (!this.validate(+this.data.monsterRESReduc, 0, 250)) {
        this.data.monsterRESReduc = 0;
      }
      for (let item in this.DMGMulti) {
        if (this.data.monsterRES < 0) {
          this.DMGMultiWithDEF[item] =
            this.monsterDEF *
            this.DMGMulti[item] *
            (1 - (+this.data.monsterRES - +this.data.monsterRESReduc) / 200);
        } else if (this.data.monsterRES >= 75) {
          this.DMGMultiWithDEF[item] =
            this.monsterDEF *
            this.DMGMulti[item] *
            (1 /
              ((4 * (+this.data.monsterRES - +this.data.monsterRESReduc)) /
                100 +
                1));
        } else {
          this.DMGMultiWithDEF[item] =
            this.monsterDEF *
            this.DMGMulti[item] *
            (1 - (+this.data.monsterRES - +this.data.monsterRESReduc) / 100);
        }
      }
    },
    setNoelleBonus() {
      this.ATK =
        this.ATK +
        this.$store.state.calculator.Noelle[+this.data.special.level] *
          this.DEF;
    },
    setAbilityNoCrit() {
      for (let i = 0; i < this.data.abilities.length; i++) {
        if (!this.validate(+this.data.abilities[i].abilityDMG, 1, 2000)) {
          this.data.abilities[i].abilityDMG = 0;
        }
        if (!this.validate(+this.data.abilities[i].abilitySPD, 0.01, 10, 100)) {
          this.data.abilities[i].abilitySPD = 0;
        }
        let DMGMulti = 0;
        switch (this.data.abilities[i].abilityType) {
          case "Normall Attack": {
            DMGMulti = this.DMGMultiWithDEF.normallDMG;
            break;
          }
          case "Charged Attack": {
            DMGMulti = this.DMGMultiWithDEF.chargedDMG;
            break;
          }
          case "Plunging Attack": {
            DMGMulti = this.DMGMultiWithDEF.plungingDMG;
            break;
          }
          case "Elemental Skill": {
            DMGMulti = this.DMGMultiWithDEF.elementalSkillDMG;
            break;
          }
          case "Elemental Burst": {
            DMGMulti = this.DMGMultiWithDEF.elementalBurstDMG;
            break;
          }
        }
        // prettier-ignore
        this.ability.noCrit[i] =
          (+this.data.abilities[i].abilityDMG / 100) * +DMGMulti * +this[this.data.abilities[i].abilityATTR];
        if (this.data.special.character === "Zhongli") {
          // prettier-ignore
          this.ability.noCrit[i] += (+this.$store.state.calculator.Zhongli[this.data.abilities[i].abilityType] / 100) * DMGMulti * this.HP;
        }
      }
    },
    setAbilityCrit() {
      for (let i = 0; i < this.ability.noCrit.length; i++) {
        this.ability.crit[i] =
          +this.ability.noCrit[i] * (1 + +this.data.critDMG / 100);
      }
    },
    setAbilityAVG() {
      for (let i = 0; i < this.ability.noCrit.length; i++) {
        let avg = +getAVGDMG(
          this.ability.noCrit[i],
          this.data.critRate,
          this.data.critDMG
        );
        Number.isNaN(avg)
          ? (this.ability.AVG[i] = 0)
          : (this.ability.AVG[i] = avg);
      }
    },
    setDPS() {
      this.rotation.time = 0;
      let validateDPS = { DMG: 0, SPD: 0 };
      for (let i = 0; i < this.data.abilities.length; i++) {
        this.data.abilities[i].abilityDMG > 0 ? validateDPS.DMG++ : null;
        this.data.abilities[i].abilitySPD > 0 ? validateDPS.SPD++ : null;
        this.rotation.time += this.data.abilities[i].abilitySPD;
        this.rotation.DMG.noCrit += this.ability.noCrit[i];
        this.rotation.DMG.crit += this.ability.crit[i];
        this.rotation.DMG.AVG += this.ability.AVG[i];
      }
      if (
        validateDPS.DMG === this.data.abilities.length &&
        validateDPS.SPD === this.data.abilities.length
      ) {
        this.rotation.DPS.noCrit =
          this.rotation.DMG.noCrit / this.rotation.time;
        this.rotation.DPS.crit = this.rotation.DMG.crit / this.rotation.time;
        this.rotation.DPS.AVG = this.rotation.DMG.AVG / this.rotation.time;
      } else {
        this.rotation.DPS.noCrit = 0;
        this.rotation.DPS.crit = 0;
        this.rotation.DPS.AVG = 0;
        this.rotation.time = 0;
      }
    },
    createDMGTable() {
      for (let i = 0; i < this.ability.noCrit.length; i++) {
        this.ability.rotation[i] = {
          name: i + 1,
          noCrit: this.ability.noCrit[i].toFixed(),
          crit: this.ability.crit[i].toFixed(),
          AVG: this.ability.AVG[i].toFixed()
        };
      }
      this.ability.rotation.splice(0, 1, this.ability.rotation[0]);
    },
    refreshAbilities() {
      this.ability.noCrit = [];
      this.ability.crit = [];
      this.ability.AVG = [];
      this.ability.rotation = [];

      this.rotation.DMG.AVG = 0;
      this.rotation.DMG.crit = 0;
      this.rotation.DMG.noCrit = 0;

      this.rotation.DPS.AVG = 0;
      this.rotation.DPS.crit = 0;
      this.rotation.DPS.noCrit = 0;

      this.rotation.time = 0;
    }
  },
  watch: {
    input: {
      handler(val) {
        this.refreshAbilities();
        this.data = JSON.parse(JSON.stringify(val.input));
        this.setATK();
        this.setDEF();
        this.setHP();
        this.setAddDMG();
        this.setMonsterDEF();
        this.setDMGMultiWithDef();
        if (this.data.special.character === "Noelle") {
          this.setNoelleBonus();
        }
        this.setAbilityNoCrit();
        this.setAbilityCrit();
        this.setAbilityAVG();
        this.setDPS();
        this.createDMGTable();
      },
      deep: true
    }
  }
};
</script>

<style lang="scss"></style>
