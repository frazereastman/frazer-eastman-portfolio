<template>
	<v-app :class="[isOnHomeRoute ? 'home-bg' : 'bg-white']">
		<v-app-bar
			:elevation="0"
			class="bg-transparent"
    >
			<navigation-bar :transparent="isOnHomeRoute"/>
		</v-app-bar>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script setup>
	const route = useRoute();

	const isOnHomeRoute = computed(() => {
		return route.path === '/' | route.path === '/my-work' ;
	});
</script>

<style scoped>
	.home-bg {
		background-color: #000000;
		opacity: 1;
		background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #121212 26px),
			repeating-linear-gradient(#1a1a1a55, #1a1a1a);
	}
</style>
