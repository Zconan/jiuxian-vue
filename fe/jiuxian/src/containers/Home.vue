<template>
	<div class="home">
		<home-swipes />
		<home-goodslist />
		<common-tabs />
	</div>
</template>

<script>
	import homeSwipes from '../components/homeSwipes.vue';
	import homeGoodslist from '../components/homeGoodslist.vue';
	import commonTabs from '../components/commonTabs.vue';
	export default {
		components: {
			homeSwipes,
			homeGoodslist,
			commonTabs
		}
	}
</script>

<style scoped>
	.home {
		background: #f3f5f6;
	}
	
	.commonTabs {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}
</style>