<template>
  <v-card dark tile elevation="0" color="#30303a">
    <v-card-subtitle class="py-0 pt-3"
      >For calculations, be sure to enter the damage of the
      ability.</v-card-subtitle
    >
    <v-card-subtitle class="py-0"
      >Enter the type, if you use special formulas (for example
      Jongli)</v-card-subtitle
    >
    <v-card-subtitle class="py-0"
      >Enter the attribute, if the ability deals damage not from an attack (for
      example E Albedo)</v-card-subtitle
    >
    <v-card-subtitle class="py-0"
      >Enter the ability speed to determine rotation DPS. * All abilitys speed
      must be entered for DPS calculations</v-card-subtitle
    >
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" :md="3">
            <v-text-field
              v-model="input.abilityDMG"
              :rules="inputRules.DMG"
              :counter="counter.DMG"
              :counter-value="v => (!Number.isNaN(+v) ? +v : 0)"
              error-count="3"
              label="Ability Damage"
              autocomplete=""
              @input="sendInput"
            ></v-text-field>
          </v-col>
          <v-col cols="12" :md="3">
            <v-text-field
              v-model="input.abilitySPD"
              :rules="inputRules.SPD"
              :counter="counter.SPD"
              :counter-value="v => (!Number.isNaN(+v) ? +v : 0)"
              error-count="3"
              label="Ability SPD *"
              autocomplete=""
              @input="sendInput"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
              v-model="input.abilityATTR"
              :items="items.ATTR"
              label="Ability attribute"
              @input="sendInput"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              v-model="input.abilityType"
              :items="items.type"
              label="Ability type"
              @input="sendInput"
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: ["index"],
  data: () => ({
    input: {
      abilityDMG: null,
      abilitySPD: null,
      abilityATTR: "ATK",
      abilityType: "Normall Attack"
    },
    counter: {
      DMG: 2000,
      SPD: 10
    },
    items: {
      ATTR: ["ATK", "DEF", "HP"],
      type: [
        "Normall Attack",
        "Charged Attack",
        "Plunging Attack",
        "Elemental Skill",
        "Elemental Burst"
      ]
    },
    inputRules: {
      DMG: [
        v =>
          Number.isInteger(+v) === true ||
          v == null ||
          v === "" ||
          "Value must by integer",
        v => +v > 0 || v == null || v === "" || "Value must by grater than 0",
        v => +v <= 2000 || v == null || v === "" || "Input real value"
      ],
      SPD: [
        v =>
          Number.isInteger(+v * 100) === true ||
          v == null ||
          v === "" ||
          "Value must by within hundredths",
        v => +v >= 0 || v == null || v === "" || "Value must by positive",
        v => +v <= 10 || v == null || v === "" || "Input real value"
      ]
    }
  }),
  methods: {
    sendInput() {
      this.$emit("inputStat", {
        attr: "ability",
        index: this.index,
        input: this.input
      });
    }
  }
};
</script>
