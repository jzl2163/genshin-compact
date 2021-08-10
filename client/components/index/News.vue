<template>
  <v-container fluid fill-height class="d-flex align-content-space-between">
    <v-row style="width: 100%;">
      <v-col>
        <div class="white--text font-weight-black display-2 text-center">
          Last News
        </div>
      </v-col>
    </v-row>
    <v-row style="width: 100%" v-for="(item, index) in news" :key="index">
      <v-col>
        <v-card
          dark
          tile
          elevation="2"
          width="100%"
          height="100%"
          color="#33333e"
          class="pa-2 d-flex flex-column"
        >
          <v-card-title class="justify-center text-truncate">
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle> {{ item.date }} </v-card-subtitle>
          <v-card-text class="text-truncate"> {{ item.content }} </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    news() {
      let store = this.$store.state.main.news;
      let news = [];
      for (let i = 2; i > 0; i--) {
        news.push(store[store.length - i]);
      }
      news = news.filter(item => {
        if (item != undefined) {
          return true;
        }
      });
      return news;
    }
  }
};
</script>

<style lang="scss"></style>
