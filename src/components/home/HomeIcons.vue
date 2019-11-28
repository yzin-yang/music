<template>
	<div class="container">
		<swiper :options="swiperOption">
			<swiper-slide
				class="icon-slide"
				v-for="(item, index) in homeIcons"
				:key="index"
			>
				<div class="icon-wrapper">
					<div class="icon">
						<i class="iconfont" :class="item.icon" />
					</div>
					<span class="icon-text">{{ item.text }}</span>
				</div>
			</swiper-slide>
			<swiper-slide class="icon-slide">
				<div class="icon-wrapper">
					<div class="icon exit-icon">
						<i class="iconfont iconnav"></i>
					</div>
					<span class="icon-text">编辑</span>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
	name: 'HomeIcon',
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: 'auto',
				freeMode: true,
				freeModeMomentum: false,
				scrollbar: {
					el: '.swiper-scrollbar'
				}
			}
		};
	},
	computed: {
		...mapState('home', ['homeIcons'])
	}
};
</script>
<style lang="less" scoped>
@import url('https://at.alicdn.com/t/font_1301440_eoa9vxvejgq.css');
@import '~@styles/common.less';

.container {
	.border-bottom(3vw);
	margin-top: 5vw;
	.icon-slide {
		width: 18.5vw;
		.icon-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			.icon {
				width: 12vw;
				height: 12vw;
				border-radius: 50%;
				background: linear-gradient(to right, #ff5a4c, #ff1d11);
				text-align: center;
				line-height: 12vw;
				color: #fff;
				.iconfont {
					font-size: 6.5vw;
				}
			}
			.exit-icon {
				background: #ccc;
			}
			.icon-text {
				margin: 2.5vw 0;
				font-size: 3.5vw;
			}
		}
	}
}
</style>
