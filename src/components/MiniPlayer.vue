<template>
	<div class="mini-wrapper" @click="testShowPlayer">
		<img
			:src="playingSong.picUrl"
			class="mini-poster"
			:class="{ rotate: playState }"
		/>
		<div class="mini-info">
			<p>{{ playingSong.name }}</p>
			<p class="mini-artists">{{ artists }}</p>
		</div>
		<span class="mini-buttons">
			<i
				class="audio mini-button"
				:class="{
					audiozantingtingzhi: playState,
					audiobofang2: !playState
				}"
				@click.stop="toggle"
			/>
			<i
				class="audio audioliebiao mini-button"
				@click.stop="showAudioList"
			/>
		</span>
	</div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
	name: 'MiniPlayer',
	computed: {
		...mapState('player', ['playState', 'playingSong']),
		...mapGetters('player', ['artists'])
	},
	methods: {
		...mapMutations({ showPlayer: 'SHOW_PLAYER' }),
		...mapMutations('player', {
			play: 'PLAY',
			pause: 'PAUSE'
		}),
		testShowPlayer() {
			this.showPlayer();
		},
		toggle() {
			if (this.playState) {
				this.pause();
			} else {
				this.play();
			}
		}
	}
};
</script>
<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_1410851_orgxdud5s8j.css');
.mini-wrapper {
    width: 100vw;
    height: 6.2vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .mini-button {
        font-size: 5vw;
        &:first-child {
            margin-right: 3vw;
        }
    }
    .mini-info {
        width: 60vw;
        font-size: 3.8vw;
        line-height: 1.6;
        .mini-artists {
            font-size: 0.6em;
        }
    }
    .mini-poster {
        width: 4.5vh;
        height: 4.5vh;
        border-radius: 50%;
        .pause-rotating();
    }
}
.rotate {
    animation-play-state: running !important;
}
</style>
