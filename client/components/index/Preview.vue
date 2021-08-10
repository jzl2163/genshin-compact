<template>
    <v-container fluid fill-height>
        <v-row style="width: 100%;">
            <v-col>
                <div class="white--text font-weight-black display-3 text-center">
                    Welcome in Genshin compact
                </div>
            </v-col>
        </v-row>
        <v-row style="width: 100%">
            <v-col v-for="(item, i) in this.$store.state.main.preview" :key="i">
                <v-card
                    dark
                    tile
                    elevation="2"
                    width="100%"
                    height="100%"
                    color="#33333e"
                    class="pa-3 d-flex flex-column"
                >
                    <v-card-title class="justify-center">{{ item.title }}</v-card-title>
                    <v-card-text>{{ item.description }}</v-card-text>
                    <v-spacer> </v-spacer>
                    <v-card-actions>
                        <v-row>
                            <v-col v-for="(btn, i) in item.content" :key="i">
                                <v-btn color="#d3bc8e" class="black--text" nuxt no-prefetch :to="btn.src" block
                                    ><v-icon left>{{ btn.icon }}</v-icon>
                                    {{ btn.title }}
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss"></style>
