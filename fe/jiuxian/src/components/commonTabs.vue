<template>
	<div class="commonTabs">
		<ul>
			<li v-for="(t,index) in tabs" :key="index" @click="changeTab(index)">
				<img v-if="index===isShow" :src="t.aicon" alt="" />
				<img v-if="index!==isShow" :src="t.icon" alt="" />
				<p :class="index===isShow?'active':''" v-text="t.title"></p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
					aicon: require('../assets/home.png'),
					icon: require('../assets/home1.png'),
					title: '首页'
				}, {
					aicon: require('../assets/menu.png'),
					icon: require('../assets/menu1.png'),
					title: '分类'
				}, {
					aicon: require('../assets/sale.png'),
					icon: require('../assets/sale1.png'),
					title: ''
				}, {
					aicon: require('../assets/cart.png'),
					icon: require('../assets/cart1.png'),
					title: '购物车'
				}, {
					aicon: require('../assets/user.png'),
					icon: require('../assets/user1.png'),
					title: '我的酒仙'
				}],
				isShow: 0
			}
		},
		methods: {
			changeTab(index) {
				this.isShow = index;
			}
		}
	}
</script>

<style scoped>
	div {
		background: #f1f1f1;
		padding-top: 5px;
		box-sizing: border-box;
	}
	
	div ul {
		display: flex;
	}
	
	div ul li {
		flex: 1;
		height: 42px;
		text-align: center;
	}
	
	div ul li img {
		width: 20px;
		height: 20px;
	}
	
	div ul li:nth-child(3) img {
		width: 40px;
		height: 40px;
	}
	
	div ul li p.active {
		color: #fc5a5a;
	}
</style>