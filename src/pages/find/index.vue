<template>
	<div class="container">
		<!-- <swiper /> -->
		<featureIcons />
		<personalSongList />
	</div>
</template>
<script>
import swiper from '@components/find/swiper';
import featureIcons from '@components/find/featureIcons';
import personalSongList from '@components/find/personalSongList';

export default {
	name: 'findIndex',
	components: {
		swiper,
		featureIcons,
		personalSongList
	},
	data() {
		return {};
	}
};
</script>

<style lang="less" scoped></style>
