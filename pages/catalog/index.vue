<template>
	<view>
		<SEARCHBOX></SEARCHBOX>
		<view class="page-catalog">
			<view class="scroll-view-container">
				<scroll-view scroll-y="true">
					<view class="scroll-view-single" 
						  v-for="(item,index) in catalogs" 
						  :key="index"
						  :class="{'selected': selectedCataIndex == index}" 
						  @click="onCatalogChange(index)">
						<text>{{item.name}}</text>
					</view>
				</scroll-view>	
			</view>
			<view class="catalog-content-container">
				<view class="catalog-content-item" 
					v-for="(good, idx) in goodList"
					:key="idx"
					:class="{'content-border': goodList.length > 1}" 
					@click="gotoDetail(idx)"
				>
					<view class="left">
						<image :src="good.url" mode="aspectFit" style="width: 100px;height: 100px;"></image>						
					</view>
					<view class="right">
							<text class="title">【{{good.tag}}】{{good.title}} {{good.spec}}</text>
						<view class="desc">
							<view class="price">￥{{good.price}}</view>
							<view class="iconfont icon-gouwuche shopCar" @click="showCartPanel(idx)"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="shop-cart-panel">
				<view class="panel-head content-border">
					<view>
						<image src="../../static/c1.png" mode="aspectFit" style="width: 100px;height: 100px;margin: 10px;"></image>						
					</view>
					<view class="desc">
						<view class="">【鲜活】小象蚌</view>
						<view class="">￥29.00</view>
					</view>
				</view>
				<view class="panel-body content-border">
					<view class="spec content-border">
						<view><text>大小</text></view>
						<view class="spec-tags">
							<uni-tag class="spec-tag" text="12-15头鲍" type="error" inverted="false"></uni-tag>
							<uni-tag class="spec-tag" text="8-10头鲍" type="default" ></uni-tag>
						</view>				
					</view>
					<view class="quantity">
						<view class="left">
							<text>购买数量：</text>
							<uni-number-box @change=""></uni-number-box>
						</view>
						<view class="right">
							<text>剩余：{{'546斤'}}</text>
						</view>
					</view>
				</view>
				<view class="panel-footer">
					<view class="btn" @click="addToCart">加入购物车</view>
					<view class="btn btn-red" @click="buyNow">立刻购买</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>	
	import SEARCHBOX from '../components/search-box/index'
	export default {
		components: { SEARCHBOX },
		data() {
			return {
				selectedCataIndex: 0,
				catalogs: [
					{
						name: '宝宝辅食'
					},
					{
						name: '生猛虾蟹'
					},
					{
						name: '深海鱼类'
					}
				],
				goodList: [
					{
						title: '小象蚌',
						oriPrice: '59',
						price: '59',
						spec: '500g/5~10个',
						tag: '鲜活',
						url: '/static/c1.png'
					},
					{
						title: '小象蚌',
						oriPrice: '59',
						price: '59',
						spec: '500g/5~10个',
						tag: '鲜活',
						url: '/static/c2.png'
					},
				]
			}
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh')
		},
		methods: {
			onCatalogChange(idx) {
				this.selectedCataIndex = idx 
			},
			gotoDetail(idx) {},
			showCartPanel(idx) {
				this.$refs.popup.open()				
			},
			addToCart() {},
			buyNow() {}
		}
	}
</script>

<style lang="scss">
	.page-catalog{
		display: flex;
		height: calc(100vh - 154px);
	}
	.scroll-view-container{
		height: 100%;
		border-right: 1px solid #EEEEEE;
		background-color: #E5E5E5;
		.scroll-view-single{
			width: 160rpx;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			color: #333333;
		}
		.selected{
			background-color: white;
			border-left: 2px solid red;
		}
	}
	.catalog-content-container{
		.catalog-content-item{
			display: flex;
			height: 100px;
			.left{
				width: 100px;
				height: 100%;
			}
			.right{
				height: 100%;
				line-height: 24px;
				padding: 10px;
				width: 100%;
			}
			.desc{
				display: flex;
				justify-content: space-between;
				margin-top: 10px;
				font-size: 20px;
				font-weight: 600;
				.price{
					color: red;
				}
				.shopCar{
					font-size: 20px;
				}
			}
		}
	}
	.content-border{
		border-bottom: 1px solid #ebebeb;
	}
	.shop-cart-panel{
		position: fixed;
		bottom: 50px;
		left: 0;
		right: 0;
		background-color: #fefefe;
		.panel-head{
			display: flex;
			.desc{
				margin-top: 15px;
				line-height: 24px;
			}
		}
		.panel-body{
			padding: 5px 10px;
		}
		.spec-tags{
			display: flex;
			margin:  5px 0;
		}
		.spec-tag{
			padding: 3px 7px;
			margin:  5px 10px 5px 0;
		}
		.spec-tag-selected{
			background-color: red;
			color: white !important;
		}
		.quantity{
			display: flex;
			justify-content: space-between;
			padding: 10px 0;
			line-height: 36px;
			.left{
				display: flex;
			}
			.right{
				color: red;
			}
		}
		.panel-footer{
			display: flex;
			.btn{
				width: 375rpx;
				height: 40px;
				line-height: 40px;
				text-align: center;
			}
			.btn-red{
				background-color: red;
				color: white;
			}
		}
	}
</style>
