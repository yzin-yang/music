<template>
	<div class="container border-bottom">
		<ul class="icons-wrapper">
			<li
				class="icon-list"
				v-for="(item, index) in loginIcons"
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
	name: 'LoginIcons',
	computed: {
		...mapState(['loginIcons'])
	}
};
</script>

<style lang="less" scoped>
@import url('https://at.alicdn.com/t/font_1310719_61p4mqsq7ea.css');
.icons-wrapper {
	padding: 0;
	display: flex;
	justify-content: space-around;
	.icon-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		.icon {
			.iconfont {
				line-height: 0.3;
				font-size: 6vw;
				color: #e54546;
			}
			margin: 0 0 1.5vw;
		}
		.icon-text {
			font-size: 1.5rem;
		}
	}
}
</style>
