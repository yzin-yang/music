<template>
	<div class="wrapper">
		<ul>
			<li
				v-for="(item, index) in leftNavIconsBottom"
				:key="index"
				class="list-item"
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
	name: 'LeftNavListBottom',
	computed: {
		...mapState('leftNav', ['leftNavIconsBottom'])
	}
};
</script>

<style lang="less" scoped>
@import '~@styles/leftNav.less';
</style>
