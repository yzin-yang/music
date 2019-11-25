<template>
	<div class="container border-bottom">
		<div
			class="icon-wrapper"
			v-for="(item, index) in findIcons"
			:key="index"
		>
			<div class="icon">
				<span class="today" v-if="item.text === '每日推荐'">
					{{ today }}
				</span>
				<i :class="item.icon" class="iconfont" />
			</div>
			<span class="icon-text">{{ item.text }}</span>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
	name: 'FindIcons',
	computed: {
		today() {
			return new Date().getDate();
		},
		...mapState(['findIcons'])
	}
};
</script>
<style lang="less" scoped>
@import url('http://at.alicdn.com/t/font_1295705_hdzk2gocoyo.css');
.container {
	display: flex;
	width: 100%;
	// height: 3rem;
	justify-content: space-around;
	align-items: center;
	// padding: 0.2rem 0 0.3rem;
	.icon-wrapper {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.icon {
			width: 15vw;
			height: 15vw;
			border-radius: 50%;
			background: linear-gradient(to right, #ff5a4c, #ff1d11);
			text-align: center;
			line-height: 15vw;
			position: relative;
			color: #fff;
			.iconfont {
				font-size: 8vw;
			}
			.today {
				position: absolute;
				top: 1.3vw;
				left: 5.5vw;
				font-size: 3.5vw;
			}
		}
		.icon-text {
			margin-top: 1rem;
			font-size: 1.8rem;
		}
	}
}
</style>
