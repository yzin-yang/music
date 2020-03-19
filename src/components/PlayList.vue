<template>
	<popup
		:value="isShowPlayList"
		:style="{ height: '45vh' }"
		round
		position="bottom"
		class="popup-list"
		@click-overlay="showPlayList"
	>
		<article>当前播放</article>
		<!-- <header>列表循环</header> -->
		<song-list :tracks="playListArr" type="playList" />
	</popup>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { popup } from 'vant';
import SongList from './SongList';
export default {
	components: {
		popup,
		SongList
	},
	data() {
		return {};
	},
	computed: {
		...mapState({ isShowPlayList: 'showPlayList' }),
		...mapState('player', ['playListArr'])
	},
	methods: {
		...mapMutations({
			showPlayList: 'SHOW_PLAY_LIST'
		})
		// ...mapMutations('player', ['getPlayList'])
	}
};
</script>

<style lang="less" scoped>
.popup-list {
	& > article {
		margin: 1vh 0 1vh 2vw;
	}
	& > header {
		margin: 1vh 0 0 2vw;
	}
}
</style>
