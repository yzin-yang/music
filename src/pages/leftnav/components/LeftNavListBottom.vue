<template>
	<div class="wrapper">
		<ul>
			<li
				class="list-item"
				v-for="(item, index) in leftNavIconsBottom"
				:key="index"
			>
				<i class="iconfont" :class="item.icon"></i>
				<span class="list-text">{{ item.text }}</span>
			</li>
		</ul>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'LeftNavListBottom',
	data() {
		return {};
	},
	computed: {
		...mapState('leftNav', ['leftNavIconsBottom'])
	}
};
</script>

<style lang="less" scoped>
@import '~@styles/leftNav.less';
</style>
