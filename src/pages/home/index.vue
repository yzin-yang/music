<template>
	<div class="container">
		<home-icons />
		<home-list />
		<created-song-list />
	</div>
</template>
<script>
import HomeList from './components/HomeList';
import HomeIcons from './components/HomeIcons';
import CreatedSongList from './components/CreatedSongList';

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
