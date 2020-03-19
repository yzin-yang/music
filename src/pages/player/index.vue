<template>
	<div class="player-container">
		<nav class="nav">
			<i class="phone iconzuojiantou" @click="showPlayer" />
			<span class="song-info">
				<p>{{ playingSong.name }}</p>
				<p class="artists">{{ artists }}</p>
			</span>
			<span v-show="playingSong.br.length" class="br">
				{{ playingSong.br[playingSong.br.length - 1] }}
			</span>
		</nav>
		<div class="wrapper">
			<player-record :picUrl="playingSong.picUrl" />
			<div>
				<player-icons />
				<player-bar
					:duration="duration"
					:currentTime="currentTime"
					:progress="progressWidth"
					@changeTime="changeTime"
				/>
				<player-buttons
					@toggle="toggle"
					@prev="prevSong"
					@next="nextSong"
				/>
			</div>
		</div>
		<audio
			ref="audio"
			:src="songUrl"
			loop
			@timeupdate="setTime"
			@durationchange="setDuration"
			@ended="endedHandler"
		/>
	</div>
</template>

<script>
import API from '@api';
import PlayerRecord from './components/PlayerRecord';
import PlayerIcons from './components/PlayerIcons';
import PlayerBar from './components/PlayerBar';
import PlayerButtons from './components/PlayerButtons';
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import { formatTime } from '@utils/format';

export default {
	name: 'PlayerIndex',
	components: {
		PlayerRecord,
		PlayerIcons,
		PlayerBar,
		PlayerButtons
	},
	data() {
		return {
			songUrl: '',
			currentTime: '00:00',
			duration: '00:00',
			progressWidth: 0,
			artist: [],
			imgUrl: '',
			readyPlay: false,
			canPlay: true,
			songName: '',
			songId: 0
		};
	},
	computed: {
		...mapState('player', [
			'playingSong',
			'playState',
			'songIndex',
			'playList'
		]),
		...mapGetters('player', ['artists'])
		// ...mapState('player', ['selectedSong']),
	},
	watch: {
		playingSong(track) {
			this.checkSong(track.id);
		}
	},
	mounted() {
		this.initAudio({ audio: this.$refs.audio });
		// setTimeout(() => {
		//     window.scrollTo(0, 20);
		// }, 1000);
	},
	methods: {
		// ...mapMutations({
		// 	hidePlayer: 'HIDE_PLAYER'
		// }),
		...mapMutations({ showPlayer: 'SHOW_PLAYER' }),
		...mapMutations('player', {
			setState: 'SET_PLAY_STATE',
			setIndex: 'SET_AUDIO_INDEX',
			play: 'PLAY',
			pause: 'PAUSE',
			prev: 'PLAY_PREV_SONG',
			next: 'PLAY_NEXT_SONG'
		}),
		...mapActions('player', { initAudio: 'INIT_AUDIO' }),
		getSongUrl(id) {
			API.getWySongUrl(id).then(res => {
				const data = res.data;
				if (data.code === 200) {
					this.songUrl = data.data[0].url;
				}
			});
		},
		/**
		 * 查看歌曲是否可以播放
		 */
		checkSong(id) {
			if (typeof id === 'number') {
				API.checkWySong(id)
					.then(res => {
						const data = res.data;
						// 当可以播放的时候请求歌曲url
						if (data.success) {
							this.getSongUrl(id);
						}
					})
					.catch(err => {
						if (err) {
							console.error(err);
							// 不能播放的时候选择下一首进行播放
							this.next();
						}
					});
			} else {
				const brArr = this.playingSong.br;
				const br = brArr[brArr.length - 1];
				API.getQqSongUrl(id, br)
					.then(res => {
						// 当可以播放的时候请求歌曲url
						if (res.status === 200) {
							this.songUrl = res.data.data;
						}
					})
					.catch(err => {
						if (err) {
							console.error(err);
							// 不能播放的时候选择下一首进行播放
							this.next();
						}
					});
			}
		},
		/**
		 * 播放暂停事件
		 */
		toggle() {
			if (this.playState) {
				this.pause();
			} else {
				this.play();
			}
		},
		prevSong() {
			if (this.playList.size > 1) {
				this.prev();
			} else {
				this.changeTime(0);
			}
		},
		nextSong() {
			if (this.playList.size > 1) {
				this.next();
			} else {
				this.changeTime(0);
			}
		},
		/**
		 * 更新当前播放时长
		 */
		changeTime(occupancy) {
			const audio = this.$refs.audio;
			const current = occupancy * audio.duration;
			audio.currentTime = current;
		},
		/**
		 * 更新当前播放时长
		 */
		setTime() {
			const audio = this.$refs.audio;
			// 格式化时间
			this.currentTime = formatTime(audio.currentTime);
			// 进度条的长度计算
			let progress = (audio.currentTime / audio.duration) * 100;
			this.setProgress(progress);
		},
		setProgress(val) {
			if (val < 0 || val > 100) {
				return;
			}
			this.progressWidth = val;
		},
		/**
		 * 更新歌曲时长
		 */
		setDuration() {
			this.duration = formatTime(this.$refs.audio.duration);
		},
		endedHandler() {
			if (this.playList.size > 1) {
				this.next();
			} else {
				this.changeTime(0);
			}
		}
	}
};
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_1410851_1kpmn0o6bx5.css');
@import url('//at.alicdn.com/t/font_1351323_oxqdjg3rufq.css');
// @import url('~styles/global.less');
.player-container {
	//TODO 滚动穿透未解决
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	z-index: 10;
	background-color: #7f8c8d;
	display: flex;
	flex-direction: column;
	.wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.nav {
		display: flex;
		align-items: center;
		color: #fff;
		.phone {
			font-size: 7vw;
			margin-right: 3.5vw;
		}
		.song-info {
			.ellipsis();
			.artists {
				font-size: 0.7em;
				line-height: 2;
			}
		}

		.br {
			font-size: 0.6em;
			border: #fff 1px solid;
			border-radius: 0.7em;
			margin-left: 4vw;
			padding: 0.2em 0.8em;
		}
	}
}
</style>
