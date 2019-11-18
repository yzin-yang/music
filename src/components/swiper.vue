<template>
	<div class="banner-container">
		<swiper :options="swiperOption">
			<!-- slides a标签跳转 url携带歌曲id信息 -->
			<swiper-slide v-for="(item, index) in swiperList" :key="index">
				<router-link :to="'/song/?id=' + item.targetId">
					<img class="banner-img" :src="item.pic" alt />
					<span class="title" :style="{ background: item.titleColor }"
						>{{ item.typeTitle }}
					</span>
				</router-link>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
	name: 'swiper',
	props: {
		swiperList: Array
	},
	data() {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				},
				loop: true,
				autoplay: {
					// 3000毫秒自动播放
					delay: 5000,
					disableOnInteraction: false
				}
			}
		};
	},
	components: {
		swiper,
		swiperSlide
	}
};
</script>

<style lang="less" scoped></style>
