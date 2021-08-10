<template>
  <v-container dark fill-height width="80%">
    <v-card dark color="#33333e" class="text-center" style="margin: 0 auto">
      <v-card-title
        ><h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1></v-card-title
      >
      <v-card-text class="text-center">
        <v-img
          justify-center
          max-height="500"
          max-width="500"
          src="/image/paimon.png"
        ></v-img>
        <v-btn
          nuxt
          dark
          color="#d3bc8e"
          class="black--text"
          height="75px"
          block
          to="/"
          >Home page</v-btn
        >
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["error"],
  layout: "error" // you can set a custom layout for the error page
};
</script>
