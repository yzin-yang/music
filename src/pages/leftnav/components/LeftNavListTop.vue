<template>
	<div class="wrapper">
		<ul>
			<li
				class="list-item"
				v-for="(item, index) in leftNavIconsTop"
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
	name: 'LeftNavListTop',
	computed: {
		...mapState('leftNav', ['leftNavIconsTop'])
	}
};
</script>

<style lang="less" scoped>
@import '~@styles/leftNav.less';

.wrapper {
	.after-border-margin(60vw;1vw 4.5vw 5vw);
}
</style>
