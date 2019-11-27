<template>
	<div class="wrapper border-top">
		<span @click="toggleMode">
			<i class="login" :class="{ iconyueliang1, icontaiyang }"></i>
			<span>{{ modeText }}间模式</span>
		</span>
		<span>
			<i class="login iconshezhi"></i>
			<span>设置</span>
		</span>
		<span>
			<i class="login icondianyuan"></i>
			<span>退出</span>
		</span>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'LoginBottom',
	data() {
		return {
			iconyueliang1: '',
			icontaiyang: '',
			modeText: '日'
		};
	},
	computed: {},
	methods: {
		toggleMode() {}
	}
};
</script>
<style lang="less" scoped>
.wrapper {
	// width: 6rem;
	// height: 0.9rem;
	background-color: #fff;
	box-sizing: border-box;
	padding: 0.2rem 0.23rem;
	// position: fixed;
	bottom: 0;
	z-index: 2;
	display: flex;
	justify-content: space-between;
	font-size: 3vw;
	.login {
		font-size: 0.4rem;
		vertical-align: -2px;
		margin-right: 0.08rem;
	}
}
</style>
