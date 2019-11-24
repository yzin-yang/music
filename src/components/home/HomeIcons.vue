<template>
	<div class="container border-bottom">
		<!-- <swiper :options="swiperOption"> -->
		<!-- <swiper-slide class="wrapper"> -->
		<swiper :options="swiperOption">
			<div class="icon-wrapper">
				<swiper-slide>
					<div
						class="icon-list"
						v-for="(item, index) in homeIcons"
						:key="index"
					>
						<div class="icon">
							<i class="iconfont" :class="item.icon" />
						</div>
						<span class="icon-text">{{ item.text }}</span>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="icon exit-icon">
						<i class="iconfont iconnav"></i>
					</div>
					<span class="icon-text">编辑</span>
				</swiper-slide>
			</swiper-slide>
		</swiper>
		<!-- </div> -->
		<!-- </swiper> -->
	</div>
</template>

<script>
import { mapState } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
	name: "HomeIcon",
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: "auto",
				freeMode: true,
				freeModeMomentum: false,
				scrollbar: {
					el: ".swiper-scrollbar"
				}
			}
		};
	},
	computed: {
		...mapState(["homeIcons"])
	}
};
</script>
<style lang="less" scoped>
@import url("https://at.alicdn.com/t/font_1301440_eoa9vxvejgq.css");

.container {
	// box-sizing: border-box;
	// padding: 0.2rem 0 0;
	// overflow: scroll;
	// height: 1.8rem;

	.icon-wrapper {
		// overflow-x: scroll;
		// height: 1.5rem;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		// white-space: nowrap;
		// width: auto;
		// min-width: 100%;
		.icon-list {
			// min-width: 1.6rem;
			// height: 100%;
			display: flex;
			flex-direction: column;
			// justify-content: space-around;
			align-items: center;
			.icon {
				width: 15vw;
				height: 15vw;
				border-radius: 50%;
				background: linear-gradient(to right, #ff5a4c, #ff1d11);
				text-align: center;
				line-height: 15vw;
				// position: relative;
				color: #fff;
				.iconfont {
					font-size: 8vw;
				}
			}
			.exit-icon {
				background: #ccc;
			}
			.icon-text {
				font-size: 1rem;
			}
		}
	}
}
// ::-webkit-scrollbar {
// 	display: none;
// }
</style>
