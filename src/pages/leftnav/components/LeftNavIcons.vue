<template>
	<div class="wrapper ">
		<ul class="icon-list">
			<li
				class="icon-item"
				v-for="(item, index) in leftNavIcons"
				:key="index"
			>
				<div class="icon">
					<i class="iconfont" :class="item.icon"></i>
				</div>
				<span class="icon-text">{{ item.text }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'LeftNavIcons',
	computed: {
		...mapState('leftNav', ['leftNavIcons'])
	}
};
</script>

<style lang="less" scoped>
@import '~@styles/leftNav.less';

.wrapper {
	.icon-list {
		display: flex;
		justify-content: space-around;
		.icon-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			.icon {
				.iconfont {
					vertical-align: bottom;
					font-size: 6vw;
					color: #e54546;
				}
			}
			.icon-text {
				font-size: 3vw;
			}
		}
	}
	.after-border-margin(60vw;5vw 4.5vw 5vw);
}
</style>
