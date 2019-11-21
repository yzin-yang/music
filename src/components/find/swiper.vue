<template>
	<div class="banner-container">
		<swiper :options="swiperOption" v-if="swiperList.length > 1">
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
import 'swiper/dist/css/swiper.css'; //TODO css的loader设置不正确会导致slide纵向排列
import axios from 'axios';
export default {
	name: 'findSwiper',
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
			swiperList: [],
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				},
				loop: true,
				autoplay: {
					// 3000毫秒自动播放
					delay: 3000,
					disableOnInteraction: false
				}
			}
		};
	},
	methods: {
		getSwiperList() {
			axios
				.get('http://140.143.128.100:3000/banner?type=1')
				.then(this.setSwiperList);
		},
		setSwiperList(res) {
			if (res.status === 200 && res.statusText === 'OK') {
				res = res.data.banners;
				this.swiperList = res;
			}
		}
	},
	mounted() {
		this.getSwiperList();
	}
};
</script>

<style lang="less" scoped>
.banner-container /deep/ .swiper-pagination-bullet-active {
	background: #c20c0c;
}
.swiper-container {
	border-radius: 1.5rem;
}
.banner-container {
	box-sizing: border-box;
	overflow: hidden;
	padding: 0.2rem;
	width: 100%;
	height: 0;
	padding-bottom: 40%;
	border-radius: 0.15rem;
	.banner-img {
		width: 100%;
		height: 100%;
	}
	.title {
		position: absolute;
		right: 0;
		bottom: 0;
		color: #fff;
		font-size: smaller;
		padding: 3px 6px;
		opacity: 0.8;
		border-top-left-radius: 0.15rem;
	}
}
</style>
