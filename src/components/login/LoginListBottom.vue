<template>
	<div class="wrapper">
		<ul>
			<li
				class="list-item"
				v-for="(item, index) in loginIconsBottom"
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
	name: 'LoginIconsBottom',
	data() {
		return {};
	},
	computed: {
		...mapState('login', ['loginIconsBottom'])
	}
};
</script>

<style lang="less" scoped>
@import '~@styles/login/index.less';
</style>
