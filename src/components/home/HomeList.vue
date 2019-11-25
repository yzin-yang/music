<template>
	<div class="container border-bottom">
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
		...mapState(['homeList'])
	}
};
</script>
<style lang="less" scoped>
@import url('https://at.alicdn.com/t/font_1306085_nryhea053g.css');
.list-item {
	display: flex;
	&:last-child .wrapper {
		border: none;
		padding: 0;
	}
	.wrapper {
		flex: 1;
		font-size: 2.5rem;
		border-bottom: 1px solid #ccc;
		padding: 0 0 3.5vw 0;
		margin: 0 7vw 3.5vw 3.5vw;
		.num {
			font-size: smaller;
			margin-left: 0.5vw;
			color: #ccc;
		}
	}
	.iconfont {
		font-size: 5.5vw;
	}
}
</style>
