<template>
	<div class="container">
		<swiper />
		<featureIcons />
		<personalSongList />
		<newDish />
	</div>
</template>
<script>
import swiper from '@components/find/swiper';
import featureIcons from '@components/find/featureIcons';
import personalSongList from '@components/find/personalSongList';
import newDish from '@components/find/newDish';

export default {
	name: 'findIndex',
	components: {
		swiper,
		featureIcons,
		personalSongList,
		newDish
	},
	data() {
		return {};
	}
};
</script>

<style lang="less" scoped></style>
