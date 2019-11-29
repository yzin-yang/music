<template>
	<div class="wrapper">
		<ul>
			<li
				class="list-item"
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
@import '~@styles/login/index.less';

.wrapper {
	.after-border-padding(60vw;1vw 3vw 5vw);
}
</style>
