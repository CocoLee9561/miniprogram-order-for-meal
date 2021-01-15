<template>
	<view class="page-shop-car">
		<view class="activity">
			<uni-tag text="促销" type="error" inverted="true" size="small"></uni-tag>
			<view class="activity-desc">购物满188.00元包邮</view>
		</view>
		<scroll-view scroll-y="true" >
			<view class="list-item flex">
				<view class="check" @click="selected = !selected">
					<uni-icons :type="selected ? 'checkbox-filled' : 'circle'" :color="selected ? 'red' : '#aaa'" size="24" />
				</view>
				<view class="flex">
					<view style="width: 100px;height: 100px;">
						<image src="../../static/c1.png" mode="aspectFit" style="width: 100px;height: 100px;"></image>
					</view>
					<view class="">
						<view class="title">【鲜活】海捕鲍鱼（绝不泡淡水）</view>
						<view class="sub-title">（小鲍鱼约30粒）</view>
						<view class="price-box flex">
							<view class="price">￥49.80</view>
							<uni-number-box @change=""></uni-number-box>
						</view>
					</view>
					
				</view>				
			</view>
		</scroll-view>
		<view class="footer flex">			
			<view class="">
				<uni-icons class="check" :type="selected ? 'checkbox-filled' : 'circle'" :color="selected ? 'red' : '#aaa'" size="24"  @click="selected = !selected"/>
				<uni-icons class="delete" :type="'trash'" :color="'#aaa'" size="24"  @click="deleteItems"/>
				合计：￥49.80	
			</view>
			<view class="buttonBuy">结算(1)</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				selected: false,
				selectAll: false
			}
		}
	}
</script>

<style lang="scss">
	.page-shop-car{
		.activity{
			display: flex;
			height: 30px;
			padding: 10px;
		}
		.activity-desc{
			margin-left: 10px;
			font-size: 13px;
			color: #AAAAAA;
		}
		.list-item{
			padding: 10px 0;
			border-bottom: 1px solid #efefef;
			.check{
				line-height: 100px;
				margin-left: 5px;
			}
			.title{	
				color: #333;	
				
			}
			.sub-title{
				color: #999;
				font-size: 14px;
				margin-top: 5px;
			}
			.price-box{
				margin-top: 15px;
				justify-content: space-between;
			}
			.price{
				color: red;
				line-height: 36px;
			}
		}
		.footer{
			position: fixed;
			bottom: 50px;
			left: 0;
			right: 0;
			background-color: white;
			border-top: 1px solid #E5E5E5;
			height: 50px;
			line-height: 50px;
			justify-content: space-between;
			.check,.delete{
				margin: 0 0 0 5px;
			}
			.buttonBuy{
				height: 50px;
				line-height: 50px;
				width: 100px;
				text-align: center;
				background-color: #C0C0C0;
			}
			.buttonBuy-active,.buttonBuy:active{
				background-color: red;
				color: white;
			}
		}
	}
</style>
