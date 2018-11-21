<template>
	<div class="homeSwipes">
		<mu-carousel hide-controls>
			<mu-carousel-item v-for="(s,index) in swipes" :key="index">
				<img :src="s">
			</mu-carousel-item>
		</mu-carousel>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				swipes: [
					require('../assets/swipe1.jpg'),
					require('../assets/swipe2.jpg'),
					require('../assets/swipe3.jpg'),
					require('../assets/swipe4.jpg'),
					require('../assets/swipe5.jpg'),
					require('../assets/swipe6.jpg'),
					require('../assets/swipe7.jpg'),
				]
			}
		}
	}
</script>

<style scoped>
	div {
		height: 180px;
	}
	
	div img {
		width: 100%;
		height: 180px;
	}
</style>