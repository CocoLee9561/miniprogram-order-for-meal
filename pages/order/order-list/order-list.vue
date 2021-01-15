<template>
	<view>
		<uni-segmented-control :current="current" :values="items" styleType="text" @clickItem="onClickItem"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				全部
			</view>
			<view v-show="current === 1">
				待付款
			</view>
			<view v-show="current === 2">
				待发货
			</view>
			<view v-show="current === 3">
				待收货
			</view>
			<view v-show="current === 4">
				退款中
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				items: ['全部', '待付款', '待发货', '待收货', '退款中'],
			};
		},
		methods:{			
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
		}
	}
</script>

<style lang="scss">

</style>
