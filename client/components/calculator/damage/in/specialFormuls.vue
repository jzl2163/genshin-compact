<template>
  <v-form>
    <v-container>
      <v-radio-group v-model="input.character" @change="sendInput">
        <v-radio label="None" value="null"></v-radio>
        <v-radio label="Zhongli 2nd passive skill" value="Zhongli"></v-radio>
        <v-radio label="Noelle Elemental Burst" value="Noelle"></v-radio>
      </v-radio-group>
      <v-row>
        <v-col>
          <v-expand-transition>
            <v-select
              v-show="input.character === 'Noelle'"
              v-model="input.level"
              :items="items.levels"
              label="Ability level"
              @input="sendInput"
            ></v-select>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    input: { character: "null", level: 0 },
    items: { levels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }
  }),
  methods: {
    sendInput() {
      this.$emit("inputStat", { attr: "special", input: this.input });
    }
  }
};
</script>
