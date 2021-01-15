<template>
	<view class="page-shop-index">
		<SEACHBOX @onSearchClick="doSearch" @onInputChange="onInputChange"></SEACHBOX>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item swiper-item-1"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item swiper-item-2"></view>
			</swiper-item>
		</swiper>
		<uni-notice-bar scrollable="true" single="true" :speed="50" :text="tips" background-color="#ffffff" color="#ff0000" showIcon="true"></uni-notice-bar>

		<view class="grid-box">
			<uni-grid :column="5" :highlight="true" :showBorder="false" @change="onCatalogChange">
				<uni-grid-item v-for="(item, index) in catalogList" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<image :src="item.url" class="image" mode="aspectFill" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="good-grid-box" v-for="(goodItems,goodkey) in goodList" :key="goodkey">
			<view class="grid-box-title">
				{{goodItems.type}}				
			</view>		
			<view class="grid-box-body">
				<view class="grid-item-box" v-for="(item, index) in goodItems.goods" :index="index" :key="index" @change="onGridChange">
						<image :src="item.url" class="image" mode="aspectFill" />
						<view class="text">{{ item.title }}</view>
						<view class="text" v-if="item.sales">销量：{{ item.sales }}</view>
						<view class="text">
							<text class="cur-price">￥{{ item.price }}</text>
							<text class="ori-price" v-if="item.oriPrice">{{item.oriPrice}}</text>
						</view>
				</view>					
			</view>
		</view>
		<view>
			
		</view>
	</view>
</template>

<script>
	import SEACHBOX from '../components/search-box/index'
	export default{
		components: { SEACHBOX },
		data() {
			return {
				tips: '全国统一满188包邮（偏远地区除外）',
				searchKeyword: '',
				catalogList: [{
						url: '/static/c1.png',
						text: '宝宝辅食',
						badge: '0',
						type: "primary"
					},
					{
						url: '/static/c2.png',
						text: '生猛虾蟹',
						badge: '1',
						type: "success"
					},
					{
						url: '/static/c3.png',
						text: '深海鱼类',
						badge: '99',
						type: "warning"
					},
					{
						url: '/static/c4.png',
						text: '甄选软体',
						badge: '2',
						type: "error"
					},
					{
						url: '/static/c5.png',
						text: '鲜美贝螺'
					},
					{
						url: '/static/c6.png',
						text: '火锅食材'
					},
					{
						url: '/static/c7.png',
						text: '安心肉品'
					},
					{
						url: '/static/c8.png',
						text: '匠心小食'
					},
					{
						url: '/static/c9.png',
						text: '精品干货'
					},
					{
						url: '/static/c9.png',
						text: '海鲜礼包'
					}
				],
				goodList: [
					{
						type: '活动专区',
						goods: [
							{
								title: '澳洲菲力牛排黑椒味',
								oriPrice: '298',
								price: '198',
								sales: '700',
								spec: '10',
								unit: '片',
								tag: '招牌',
								url: '/static/c9.png'
							},
							{
								title: '澳洲菲力牛排黑椒味',
								oriPrice: '298',
								price: '198',
								sales: '700',
								spec: '10',
								unit: '片',
								tag: '招牌',
								url: '/static/c9.png'
							}
						]
					},
					{
						type: '活动专区',
						goods: [
							{
								title: '澳洲菲力牛排黑椒味',
								oriPrice: '298',
								price: '198',
								sales: '700',
								spec: '10',
								unit: '片',
								tag: '招牌',
								url: '/static/c9.png'
							}
						]
					}
				]
			}
		},
		methods:{
			doSearch() {
				console.log(this.searchKeyword)
			},
			onCatalogChange(e) {},
			onGridChange(e) {
				console.log(e)				
			},
			onInputChange(data) {
				this.searchKeyword = data
				console.log("onInputChange1:", data)
			}
		}
	}
</script>

<style lang="scss">
	.swiper-item{
		width: 100%;
		height: 100%;
	}
	.swiper-item-1 {
		background-color: red;
	}
	.swiper-item-2 {
		background-color: green;
	}
	.grid-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
		width: 100%;
	}
	.grid-item-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;		
	}
	.image {
		width: 50rpx;
		height: 50rpx;
	}
	.text {
		font-size: 26rpx;
		margin-top: 10rpx;
	}
	.good-grid-box .uni-grid-wrap{
		align-items: center;
	}
	.grid-box-title{
		text-align: center;
	}
	.grid-box-body{
		width: 100%;
		.grid-item-box {
			width: 50%;
			display: inline-block;
			text-align: center;
		}
		.cur-price{
			color: red;
		}
	}
</style>
