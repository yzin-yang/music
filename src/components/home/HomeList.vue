<template>
	<div class="container">
		<ul>
			<li
				class="list-item"
				v-for="(item, index) in homeList"
				:key="index"
			>
				<i class="iconfont" :class="item.icon" />
				<div class="wrapper">
					<span class="list-content">{{ item.text }}</span>
					<span class="num">({{ item.num }})</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'HomeList',
	computed: {
		...mapState('home', ['homeList'])
	}
};
</script>
<style lang="less" scoped>
@import url('https://at.alicdn.com/t/font_1306085_nryhea053g.css');

.container {
	.border-bottom(5vw);
}
.list-item {
	display: flex;
	&:not(:last-child) {
		.wrapper {
			.after-border-padding(100%; 5vw 5vw 5vw 0);
		}
	}
	.wrapper {
		flex: 1;
		font-size: 4vw;
		margin-left: 8vw;
		.num {
			font-size: smaller;
			margin-left: 0.5vw;
			color: #ccc;
		}
	}
	.iconfont {
		font-size: 5.5vw;
		margin: 0 0 0 5vw;
		color: @icon-color;
	}
}
</style>
