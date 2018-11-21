<template>
	<div id="app">
		<Home />
	</div>
</template>

<script>
	import Home from './containers/Home.vue';
	export default {
		name: 'app',
		components: {
			Home
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	#app {
		font-size: 12px;
		color: #999;
	}
	
	a {
		text-decoration: none;
	}
	
	ul,
	li {
		list-style: none;
	}
</style>