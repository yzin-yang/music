<template>
	<div ref="find-container" class="container">
		<find-swiper />
		<find-icons />
		<personal-song-list />
		<new-dish />
	</div>
</template>
<script>
import FindSwiper from './components/FindSwiper';
import FindIcons from './components/FindIcons';
import PersonalSongList from './components/PersonalSongList';
import NewDish from './components/NewDish';

export default {
	name: 'FindIndex',
	components: {
		FindSwiper,
		FindIcons,
		PersonalSongList,
		NewDish
	},
	mounted() {
		this.goBottom();
	},
	methods: {
		goBottom() {
			document.documentElement.scrollTop = 204;
		}
	}
};
</script>

<style lang="less" scoped></style>
