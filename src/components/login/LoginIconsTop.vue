<template>
	<div class="wrapper border-bottom">
		<ul>
			<li
				class="list"
				v-for="(item, index) in loginIconsTop"
				:key="index"
			>
				<i class="iconfont" :class="item.icon" />
				<span class="list-text">{{ item.text }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'LoginIconsTop',
	computed: {
		...mapState('login', ['loginIconsTop'])
	}
};
</script>

<style lang="less" scoped>
@fontSize: 3vw;
// @height: 0.87rem;
.wrapper {
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;
	.list {
		box-sizing: border-box;
		padding: 0.2rem 0;
		font-size: @fontSize;
		.login {
			font-size: @fontSize * 1.3;
			margin-right: @fontSize / 2;
		}
		.iconfont {
			font-size: 5.5vw;
			height: 1;
		}
	}
}
</style>
