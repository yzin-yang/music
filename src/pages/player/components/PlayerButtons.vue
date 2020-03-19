<template>
	<div class="player-buttons">
		<i class="audio audioxunhuan" />
		<i class="audio audioxiayishou1" @click="playPrev" />
		<i
			class="audio"
			:class="{ audiobofang1: isPlay, audiobofang: !isPlay }"
			@click="toggle"
		/>
		<i class="audio audioxiayishou" @click="playNext" />
		<i class="audio audioliebiao" @click.stop="showPlayList" />
	</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
	name: 'PlayerButtons',
	computed: {
		...mapState('player', { isPlay: 'playState' })
	},
	methods: {
		...mapMutations({
			showPlayList: 'SHOW_PLAY_LIST'
		}),
		toggle() {
			this.$emit('toggle');
		},
		playNext() {
			this.$emit('next');
		},
		playPrev() {
			this.$emit('prev');
		}
	}
};
</script>
<style lang="less" scoped>
.player-buttons {
	display: flex;
	justify-content: space-around;
	align-items: center;
	.pinglun {
		position: relative;
		.com-num {
			position: absolute;
			top: 0;
			right: 0;
			font-size: 4vw;
			padding: 0.03rem;
			box-sizing: border-box;
			background-color: #7f8c8d;
			color: #bdc3c7;
		}
	}
	.audio {
		font-size: 5vw;
		color: #bdc3c7;
		&:nth-of-type(3) {
			font-size: 10vw;
		}
	}
}
</style>
