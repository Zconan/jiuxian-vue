<template>
	<div class="homeGoodslist">
		<h4>爆款推荐</h4>
		<ul>
			<li v-for="(g,index) in goodslist" :key="index">
				<img :src="g.commonProductInfo.imgPath" alt="" />
				<p v-text="g.commonProductInfo.pname"></p>
				<span v-text="g.commonProductInfo.actPrice"></span>
				<del v-text="g.commonProductInfo.jxPrice" v-if="g.commonProductInfo.actPrice!==g.commonProductInfo.jxPrice"></del>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goodslist: [],
				page: 1
			}
		},
		methods: {
			getGoodslist() {
				this.$http.get('http://localhost:9999/goodslist', {
					params: {
						page: this.page
					},
					header: {}
				}).then(data => {
					let res = data.data.promoList;
					this.goodslist = this.goodslist.concat(res);
				});
			}
		},
		mounted() {
			this.getGoodslist();
			//滚动监听
			window.addEventListener('scroll', () => {
				let scroll_y = window.scrollY;
				let window_height = window.innerHeight;
				let total_height = document.body.offsetHeight;
				//判断是否滚动到底部
				if(scroll_y + window_height >= total_height) {
					if(this.page <= 6) {
						this.page++;
						this.getGoodslist();
					}
				}
			});
		}
	}
</script>

<style scoped>
	div {
		padding-bottom: 47px;
	}
	
	div h4 {
		height: 33px;
		line-height: 33px;
		text-align: center;
		font-weight: normal;
		background: #fff;
	}
	
	div ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	div ul li {
		width: 49.5%;
		height: 244px;
		padding: 20px 10px 5px;
		margin-bottom: 3px;
		background: #fff;
	}
	
	div ul li img {
		width: 165px;
		height: 165px;
	}
	
	div ul li p {
		height: 32px;
		line-height: 16px;
		color: #252525;
		overflow: hidden;
	}
	
	div ul li span {
		line-height: 20px;
		color: #fc5a5a;
		font-size: 14px;
		padding-right: 5px;
	}
	
	div ul li span:before,
	div ul li del:before {
		content: '￥';
		color: #fc5a5a;
	}
	
	div ul li del:before {
		color: #999;
	}
</style>