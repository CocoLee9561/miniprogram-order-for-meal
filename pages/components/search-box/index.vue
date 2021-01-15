<template>
	<view class="input-view">
		<uni-search-bar class="search-bar"  :placeholder="placeholder"  :radius="100" @confirm="search" @input="onInputChange" />
		<text class="text-confirm" @click="search">搜索</text>		
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: '请输入关键字'
		},
		data() {
			return {
				
			}
		},
		methods: {
			search(e) {
				this.$emit('onSearchClick', e)
			},
			onInputChange(e) {
				this.$emit('onInputChange', e.value)
			}
		}
	}
</script>

<style lang="scss">
	.input-view {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */    
		padding: 0 0 0 8px;
		height: 59px;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #eee;
		.search-bar{
			width: 80%;
		}
		.text-confirm{
			display: inline-block;
			padding: 0 15px 0 10px;
		}
	}

</style>
