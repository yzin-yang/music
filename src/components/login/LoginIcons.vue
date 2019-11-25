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
	width: 100%;
	box-sizing: border-box;
	padding: 1rem 0.13rem 0.5rem;
	display: flex;
	.icon-list {
		min-width: 1.6rem;
		height: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		.icon {
			width: 0.72rem;
			height: 0.72rem;
			line-height: 0.72rem;
			.iconfont {
				font-size: 0.4rem;
				color: #e54546;
			}
		}
		.icon-text {
			font-size: 0.2rem;
		}
	}
}
</style>
