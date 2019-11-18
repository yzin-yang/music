<template>
	<div class="container">
		<swiper :swiperList="swiperList" />
	</div>
</template>
<script>
import swiper from '@components/swiper';
// import icon from './components/icons';
import axios from 'axios';
export default {
	name: 'findIndex',
	components: {
		swiper
		// icon
	},
	data() {
		return {
			swiperList: []
		};
	},
	methods: {
		getFindInfo() {
			axios
				.get('http://140.143.128.100:3000/banner?type=1')
				.then(this.getFindInfoSuc);
		},
		getFindInfoSuc(res) {
			console.log(res);
			this.swiperList = res.data.banners;
		}
	},
	mounted() {
		this.getFindInfo();
	}
};
</script>

<style lang="less" scoped></style>
