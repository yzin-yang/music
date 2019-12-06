<template>
	<div class="container">
		<ul>
			<li
				v-for="(item, index) in homeList"
				:key="index"
				class="list-item"
			>
				<i class="iconfont" :class="item.icon" />
				<div class="wrapper">
					<span class="list-content">{{ item.text }}</span>
					<span ref="homeNum" class="num">({{ item.num }})</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import { SET_LIST_NUM } from '@types';
import { mapState, mapMutations } from 'vuex';
export default {
	name: 'HomeList',
	props: ['nums'],
	computed: {
		...mapState('home', ['homeList'])
	},
	watch: {
		nums: {
			deep: true,
			handler(val, oldVal) {
				this.recordNum = val.recordNum;
				this.djNum = val.djNum;
				this[SET_LIST_NUM]({ changeNums: [] });
			}
		}
	},
	mounted() {
		this.recordNum = this.nums.recordNum;
		this.djNum = this.nums.djNum;
	},
	methods: {
		...mapMutations('home', [SET_LIST_NUM])
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
			.after-border-margin(auto; 5vw 10vw 5vw 0);
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
