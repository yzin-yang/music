<template>
	<div class="wrapper">
		<div class="content">
			<p>登陆网易云音乐</p>
			<p>手机电脑多端同步，尽享海量高品质音乐</p>
		</div>
		<router-link
			to="/login"
			tag="button"
			class="to-login"
			@click.native="HIDE_LEFT_NAV"
			>立即登录</router-link
		>
	</div>
</template>

<script>
import { SHOW_LEFT_NAV, HIDE_LEFT_NAV } from '@types';
import { mapMutations } from 'vuex';
export default {
	name: 'LeftNavTop',
	methods: {
		...mapMutations([SHOW_LEFT_NAV, HIDE_LEFT_NAV])
	}
};
</script>

<style lang="less" scoped>
@color: rgba(0, 0, 0, 0.4);
@fontSize: 3.8vw;

.wrapper {
	padding: 2vw 0 3vw;
	margin-bottom: 3vw;
	background-color: rgba(204, 204, 204, 0.3);
	display: flex;
	flex-direction: column;
	align-items: center;
	.content {
		text-align: center;
		p {
			font-size: @fontSize;
			line-height: 1.5;
			color: @color;
		}
	}
	.to-login {
		background-color: transparent;
		border: 1px solid @color;
		border-radius: 3vw;
		font-size: @fontSize;
		color: @color;
	}
}
</style>
