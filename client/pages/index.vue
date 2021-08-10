<template>
    <v-container fluid dark fill-height width="100%">
        <v-row no-gutters>
            <v-col>
                <Preview />
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col>
                <Links />
            </v-col>
            <v-col class="hidden-lg-and-down">
                <News />
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="hidden-xl-only">
                <News />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Preview from "~/components/index/Preview";
import Links from "~/components/index/Links";
import News from "~/components/index/News";

export default {
    components: {
        Preview,
        Links,
        News,
    },
    head() {
        return {
            title: "Home",
        };
    },
};
</script>

<style lang="scss"></style>
