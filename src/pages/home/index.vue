<template>
	<div class="container">
		<home-icons />
		<home-list />
		<created-song-list />
	</div>
</template>
<script>
import HomeList from '@components/home/HomeList';
import HomeIcons from '@components/home/HomeIcons';
import CreatedSongList from '@components/home/CreatedSongList';

export default {
	name: 'HomeIndex',
	components: {
		HomeList,
		HomeIcons,
		CreatedSongList
	}
};
</script>
<style lang="less" scoped></style>
