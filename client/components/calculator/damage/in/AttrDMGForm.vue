<template>
  <v-card dark tile elevation="0" color="#30303a">
    <v-card-subtitle>{{ attr.description }}</v-card-subtitle>
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            :md="
              attr.title === 'Additional DMG'
                ? 4
                : attr.title === 'Monster DEF/RES'
                ? 4
                : 12 / +attr.attrs.length
            "
            v-for="(item, index) in attr.attrs"
            :key="index"
          >
            <v-text-field
              v-model="input[item.var]"
              :rules="inputRules[item.var]"
              :counter="counter[item.var]"
              :counter-value="v => (!Number.isNaN(+v) ? +v : 0)"
              error-count="3"
              :label="item.attr"
              autocomplete=""
              @input="sendInput"
              @blur="sendInput"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: ["attr"],
  data: () => ({
    input: {},
    counter: {
      ATK: 20000,
      baseATK: 2000,
      percentATK: 300,
      flatATK: 2000,
      DEF: 20000,
      baseDEF: 2000,
      percentDEF: 300,
      flatDEF: 2000,
      HP: 100000,
      baseHP: 20000,
      percentHP: 300,
      flatHP: 20000,
      critRate: 200,
      critDMG: 500,
      elemDMG: 300,
      normallDMG: 100,
      chargedDMG: 100,
      plungingDMG: 100,
      elementalSkillDMG: 100,
      elementalBurstDMG: 100,
      charLVL: 90,
      monsterLVL: 110,
      monsterDEFReduc: 53,
      monsterRES: 300,
      monsterRESReduc: 250
    },
    inputRules: {
      ATK: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Value must by grater than 0",
        v => +v <= 20000 || v == null || v === "" || "Input real value"
      ],
      baseATK: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Value must by grater than 0",
        v => +v <= 2000 || v == null || v === "" || "Input real value"
      ],
      percentATK: [
        v =>
          Number.isInteger(+v * 10) === true ||
          v == null ||
          v === "" ||
          "Value must by integer or decimal",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 300 || v == null || v === "" || "Input real value"
      ],
      flatATK: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 2000 || v == null || v === "" || "Input real value"
      ],
      DEF: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Value must by grater than 0",
        v => +v <= 20000 || v == null || v === "" || "Input real value"
      ],
      baseDEF: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Value must by grater than 0",
        v => +v <= 2000 || v == null || v === "" || "Input real value"
      ],
      percentDEF: [
        v =>
          Number.isInteger(+v * 10) === true ||
          v == null ||
          v === "" ||
          "Value must by integer or decimal",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 300 || v == null || v === "" || "Input real value"
      ],
      flatDEF: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 2000 || v == null || v === "" || "Input real value"
      ],
      HP: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Value must by grater than 0",
        v => +v <= 100000 || v == null || v === "" || "Input real value"
      ],
      baseHP: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Value must by grater than 0",
        v => +v <= 20000 || v == null || v === "" || "Input real value"
      ],
      percentHP: [
        v =>
          Number.isInteger(+v * 10) === true ||
          v == null ||
          v === "" ||
          "Value must by integer or decimal",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 300 || v == null || v === "" || "Input real value"
      ],
      flatHP: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 20000 || v == null || v === "" || "Input real value"
      ],
      critRate: [
        v =>
          Number.isInteger(+v * 10) === true ||
          v == null ||
          v === "" ||
          "Value must by integer or decimal",
        v => +v > 5 || v == null || v === "" || "Value must by grater than 5",
        v => +v <= 200 || v == null || v === "" || "Input real value"
      ],
      critDMG: [
        v =>
          Number.isInteger(+v * 10) === true ||
          v == null ||
          v === "" ||
          "Value must by integer or decimal",
        v => +v > 50 || v == null || v === "" || "Value must by grater than 50",
        v => +v <= 500 || v == null || v === "" || "Input real value"
      ],
      elemDMG: [
        v =>
          Number.isInteger(+v * 10) === true ||
          v == null ||
          v === "" ||
          "Value must by integer or decimal",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 300 || v == null || v === "" || "Input real value"
      ],
      normallDMG: [
        v =>
          Number.isInteger(+v * 10) === true ||
          v == null ||
          v === "" ||
          "Value must by integer or decimal",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 100 || v == null || v === "" || "Input real value"
      ],
      chargedDMG: [
        v =>
          Number.isInteger(+v * 10) === true ||
          v == null ||
          v === "" ||
          "Value must by integer or decimal",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 100 || v == null || v === "" || "Input real value"
      ],
      plungingDMG: [
        v =>
          Number.isInteger(+v * 10) === true ||
          v == null ||
          v === "" ||
          "Value must by integer or decimal",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 100 || v == null || v === "" || "Input real value"
      ],
      elementalSkillDMG: [
        v =>
          Number.isInteger(+v * 10) === true ||
          v == null ||
          v === "" ||
          "Value must by integer or decimal",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 100 || v == null || v === "" || "Input real value"
      ],
      elementalBurstDMG: [
        v =>
          Number.isInteger(+v * 10) === true ||
          v == null ||
          v === "" ||
          "Value must by integer or decimal",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 100 || v == null || v === "" || "Input real value"
      ],
      charLVL: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 90 || v == null || v === "" || "Input real value"
      ],
      monsterLVL: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by grater than 0",
        v => +v <= 110 || v == null || v === "" || "Input real value"
      ],
      monsterDEFReduc: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > -1 || v == null || v === "" || "Field must by positive",
        v => +v <= 53 || v == null || v === "" || "Input real value"
      ],
      monsterRES: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v =>
          +v >= -300 ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Field must by grater than -300%",
        v => +v <= 300 || v == null || v === "" || "Input real value"
      ],
      monsterRESReduc: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > -1 || v == null || v === "" || "Field must by positive",
        v => +v <= 250 || v == null || v === "" || "Input real value"
      ]
    }
  }),
  methods: {
    sendInput() {
      this.$emit("inputStat", { attr: this.attr.title, input: this.input });
    }
  }
};
</script>
