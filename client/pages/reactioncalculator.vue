<template>
  <v-container fluid dark fill-height width="100%">
    <v-row no-gutters>
      <v-col lg="9" md="12">
        <Input @inputStat="getInput" />
      </v-col>
      <v-col lg="3" md="12">
        <Output v-bind:input="input" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Input from "@/components/calculator/reaction/InputReaction";
import Output from "@/components/calculator/reaction/OutputReaction";

export default {
  data: () => {
    return {
      input: null
    };
  },
  components: {
    Input,
    Output
  },
  methods: {
    getInput(input) {
      this.input = input;
    }
  }
};
</script>

<style lang="scss"></style>
