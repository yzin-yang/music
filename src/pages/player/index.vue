<template>
	<div class="player-container">
		<nav class="nav">
			<i class="phone iconzuojiantou" @click="hidePlayer" />
			<span>
				<div>{{ playingSong.name }}</div>
				<div>{{ artists }}</div>
			</span>
			<span>{{ playList.length }}</span>
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
			@timeupdate="setTime"
			@durationchange="setDuration"
			@canplay="setReady"
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
		...mapState('player', ['playingSong', 'playState', 'songIndex']),
		...mapGetters('player', ['playList']),
		// ...mapState('player', ['selectedSong']),
		artists() {
			let result = [];
			for (let ar = this.playingSong.ar, i = ar.length; i--; ) {
				result.push(ar[i].name);
			}
			return result.join(' / ');
		}
	},
	watch: {
		playingSong(val) {
			this.checkSong(val.id);
			// this.progressWidth = 0;
			// this.setState({ flag: false });
			// this.duration = val.duration;
			// this.artists = val.album.artists;
			// this.imgUrl = val.picUrl;
			// this.name = val.name;
		}
	},
	mounted() {
		this.initAudio({ audio: this.$refs.audio });
		setTimeout(() => {
			window.scrollTo(0, 20);
		}, 1000);
	},
	methods: {
		...mapMutations({
			hidePlayer: 'HIDE_PLAYER'
		}),
		...mapMutations('player', {
			setState: 'SET_PLAY_STATE',
			setIndex: 'SET_AUDIO_INDEX',
			play: 'PLAY',
			pause: 'PAUSE',
			next: 'PLAY_NEXT_SONG'
		}),
		...mapActions('player', { initAudio: 'INIT_AUDIO' }),
		getSongUrl(id) {
			API.getSongUrl(id).then(res => {
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
			API.checkSong(id)
				.then(res => {
					const data = res.data;
					// 当可以播放的时候请求歌曲url
					if (data.success) {
						this.canPlay = true;
						this.getSongUrl(id);
					}
				})
				.catch(err => {
					if (err) {
						console.error(err);
						// 不能播放的时候选择下一首进行播放
						this.canPlay = false;
						// this.readyPlay = true;
						// this.nextSong();
						// this.readyPlay = true;
					}
				});
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
			if (!this.readyPlay) {
				return;
			}
			let nowIndex = this.index - 1;
			if (nowIndex === -1) {
				nowIndex = this.playList.length - 1;
			}
			this.setIndex(nowIndex);
			this.readyPlay = false;
		},
		nextSong() {
			if (!this.readyPlay) {
				return;
			}
			console.log(this.index);
			let nowIndex = this.index + 1;
			if (nowIndex === this.playList.length) {
				nowIndex = 0;
			}
			console.log(nowIndex);
			this.setIndex(nowIndex);
			this.readyPlay = false;
		},
		changeTime(time) {
			const audio = this.$refs.audio;
			const current = (time * audio.duration) / 100;
			audio.currentTime = current;
		},
		/**
		 *  当浏览器可以播放资源时
		 */
		setReady() {
			this.readyPlay = true;
		},
		/**
		 * 当在资源加载期间发生错误时
		 */
		error() {
			this.readyPlay = false;
		},
		/**
		 * 设置当前播放时长
		 */
		setTime() {
			// 首先我们计算到当前的播放时间
			const audio = this.$refs.audio;
			this.currentTime = formatTime(audio.currentTime);
			// 进度条的长度计算
			let progress = (audio.currentTime / audio.duration) * 100;
			this.setProgress(progress);
		},
		setDuration() {
			const audio = this.$refs.audio;
			this.duration = formatTime(audio.duration);
		},
		/**
		 * 设置进度条长度
		 */
		setProgress(val) {
			if (val < 0 || val > 100) {
				return;
			}
			this.progressWidth = val;
		},
		endedHandler() {
			console.log('ended');
			const audio = this.$refs.audio;
			if (this.playList.length > 1) {
				this.next();
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
	position: absolute;
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
	}
}
</style>
