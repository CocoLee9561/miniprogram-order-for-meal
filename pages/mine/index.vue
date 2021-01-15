<template>
	<view class="page-mine">
		<view class="my-card">
			<view class="card-item flex-space-between card-item-border">
				<view class="flex" style="height: 100px; line-height: 100px;">
					<image src="../../static/mine.png" mode="aspectFit" style="width: 100px;height: 100px;border-radius: 50%;"></image>
					<view>姓名</view> 
				</view>
				<view style="line-height: 100px;">
					<uni-icons type="person" size="26"></uni-icons>
				</view>
			</view>
			<view class="card-item flex-space-between">
				<view class="flex-direct-column "> 
					<view class="text-align-center">0.00</view> 
					<view>储值金</view>
				</view>
				<view class="flex-direct-column"> 
					<view class="text-align-center">0</view> 
					<view>积分</view>
				</view>
				<view class="flex-direct-column"> 
					<view class="text-align-center">0</view> 
					<view>优惠券</view>
				</view>
			</view>
		</view>
		<view class="my-card">
			<view class="card-item flex-space-between card-item-border">
				<view>订单</view>
				<view>
					<uni-icons type="arrowright"></uni-icons>
				</view>
			</view>
			<view class="card-item flex-space-between">
				<view class="flex-direct-column" @click="gotoOrderDetail('waitForPay')"> 
					<view class="text-align-center"><uni-icons type="shop"></uni-icons></view> 
					<view>待付款</view>
				</view>
				<view class="flex-direct-column" @click="gotoOrderDetail('waitForSend')"> 
					<view class="text-align-center"><uni-icons type="shop"></uni-icons></view> 
					<view>待发货</view>
				</view>
				<view class="flex-direct-column" @click="gotoOrderDetail('waitForSign')"> 
					<view class="text-align-center"><uni-icons type="shop"></uni-icons></view> 
					<view>待收货</view>
				</view>
				<view class="flex-direct-column" @click="gotoOrderDetail('afterSign')"> 
					<view class="text-align-center"><uni-icons type="shop"></uni-icons></view> 
					<view>售后</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods:{
			gotoOrderDetail(type) {
				console.log('dsajdsjakjdl')
				uni.navigateTo({
					url: '../order/order-list/order-list'
				})
			}
		}
	}
</script>

<style lang="scss">
	.page-mine{
		background-color: lightskyblue;
		height: 150px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		border-radius: 0 0 20px 20px;
		padding: 10px 5px;
	}
	.flex{
		display: flex;
	}
	.flex-space-between{
		display: flex;
		justify-content: space-between;
	}
	.flex-direct-column{
		display: flex;
		flex-direction: column;
	}
	.text-align-center{
		text-align: center;
	}
	.my-card{
		display: flex;
		flex: 1;
		box-shadow: 0 0 0 rgba(0, 0, 0, 0);
		margin: 12px 15px;
		background-color: #ffffff;
		position: relative;
		flex-direction: column;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
		z-index: 1;
		.card-item{
			padding: 12px;
		}
		.card-item-border{
			border-bottom: 1px solid #e5e5e5;
		}
	}
</style>
