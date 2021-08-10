<template>
	<v-app id="app">
		<!--  -->
		<v-app-bar app dark color="#1c1c22">
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Genshin compact </v-toolbar-title>
		</v-app-bar>
		<!--  -->
		<v-navigation-drawer
			v-model="drawer"
			bottom
			disable-resize-watcher
			dark
			app
			color="#1c1c22"
			width="300"
		>
			<v-list>
				<v-list-item-group
					v-model="selectedItem"
					color="white"
					v-for="(item, i) in this.$store.state.main.menu"
					:key="i"
				>
					<!--  -->
					<v-list-item
						v-if="!item.content"
						nuxt
						no-prefetch
						:to="item.src"
					>
						<v-list-item-icon>
							<v-icon v-text="item.icon"></v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title
								v-text="item.title"
							></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<!--  -->
					<v-expansion-panels
						focusable
						v-else
						flat
						style="transform: translateX(-1px)"
					>
						<v-expansion-panel>
							<v-expansion-panel-header
								color="#1c1c22"
								class="rounded-0 nav-expansion"
							>
								{{ item.title }}
							</v-expansion-panel-header>
							<v-expansion-panel-content color="#1c1c22">
								<!--  -->
								<v-list-item
									v-for="(content, i) in item.content"
									:key="i"
									nuxt
									no-prefetch
									:to="content.src"
								>
									<v-list-item-icon>
										<v-icon v-text="content.icon"></v-icon>
									</v-list-item-icon>

									<v-list-item-content>
										<v-list-item-title
											v-text="content.title"
										></v-list-item-title>
									</v-list-item-content>
								</v-list-item>
								<!--  -->
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
					<!--  -->
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<v-main dark style="background: #141418">
			<Nuxt />
		</v-main>
		<v-footer padless>
			<v-card flat tile width="100%" class="text-center" color="#33333e">
				<v-card-text class="white--text pa-0">
					<span
						>Genshin compact ©{{ new Date().getFullYear() }}
					</span>
					<v-btn
						x-small
						dark
						nuxt
						no-prefetch
						color="#33333e"
						to="/privacy"
						>Privacy</v-btn
					>
					|
					<v-btn
						x-small
						dark
						nuxt
						no-prefetch
						color="#33333e"
						to="/disclaimer"
						>Disclaimer</v-btn
					>
				</v-card-text>
			</v-card>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
			selectedItem: null
		};
	}
};
</script>

<style lang="scss">
.v-expansion-panel-content__wrap {
	padding: 0;
}
html {
	overflow-y: auto;
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background-color: #33333e;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 50px;
		background-color: #55555e;
	}
}
.theme--dark.v-expansion-panels.v-expansion-panels--focusable
	.nav-expansion.v-expansion-panel-header--active:hover::before,
.theme--dark.v-expansion-panels.v-expansion-panels--focusable
	.nav-expansion.v-expansion-panel-header--active::before {
	color: black;
}
</style>
