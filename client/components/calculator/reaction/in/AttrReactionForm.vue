<template>
  <v-card dark tile elevation="0" color="#30303a">
    <v-card-subtitle>{{ attr.description }}</v-card-subtitle>
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            :md="
              attr.title === 'Reaction Multiplier' ? 3 : 12 / +attr.attrs.length
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
      charLVL: 90,
      monsterRES: 300,
      monsterRESReduc: 250,
      mastery: 2000,
      vaporize: 150,
      melt: 150,
      electroCharged: 150,
      overloaded: 150,
      superconduct: 150,
      frozen: 150,
      swirl: 150,
      crystalize: 150
    },
    inputRules: {
      mastery: [
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
      ],
      vaporize: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by positive",
        v => +v <= 150 || v == null || v === "" || "Input real value"
      ],
      melt: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by positive",
        v => +v <= 150 || v == null || v === "" || "Input real value"
      ],
      electroCharged: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by positive",
        v => +v <= 150 || v == null || v === "" || "Input real value"
      ],
      overloaded: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by positive",
        v => +v <= 150 || v == null || v === "" || "Input real value"
      ],
      superconduct: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by positive",
        v => +v <= 150 || v == null || v === "" || "Input real value"
      ],
      frozen: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by positive",
        v => +v <= 150 || v == null || v === "" || "Input real value"
      ],
      swirl: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by positive",
        v => +v <= 150 || v == null || v === "" || "Input real value"
      ],
      crystalize: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Field must by positive",
        v => +v <= 150 || v == null || v === "" || "Input real value"
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
