<template>
  <v-container fluid fill-height>
    <v-row style="width: 100%;">
      <v-col>
        <div class="white--text font-weight-black display-2 text-center">
          Links
        </div>
      </v-col>
    </v-row>
    <v-row
      style="width: 100%"
      v-for="(item, index) in this.$store.state.main.links"
      :key="index"
    >
      <v-col>
        <v-card
          dark
          tile
          elevation="2"
          width="100%"
          height="100%"
          color="#33333e"
          class="pa-3 d-flex flex-column"
        >
          <v-card-title class="justify-center text-truncate">
            {{ item.title }}
          </v-card-title>
          <v-card-actions>
            <v-row>
              <v-col v-for="(link, index) in item.links" :key="index">
                <v-btn
                  :color="link.color"
                  class="white--text"
                  link
                  :href="link.src"
                  target="_blank"
                  no-prefetch
                  block
                >
                  {{ link.title }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
