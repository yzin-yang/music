<template>
	<div class="container">
		<!-- <div v-show="isFull" class="full"> -->
		<!-- <audio-nav class="color" @returnPage="returnPage">
				<div>
					<p class="title">{{ name }}</p>
					<p class="text">
						<span
							v-for="(item, index) in artist"
							:key="index"
							class="art"
							>{{ item.name }}</span
						>
					</p>
				</div>
			</audio-nav> -->
		<player-record :imgUrl="imgUrl" />
		<div>
			<player-icons />
			<player-bar
				:duration="duration"
				:startTime="startTime"
				:width="progressWidth"
				@time="changeTime"
			/>
			<player-buttons @play="toggle" @prev="prevSong" @next="nextSong" />
		</div>

		<!-- </div> -->
		<!-- <audio
			ref="audio"
			:src="songUrl"
			autoplay
			@canplay="ready"
			@error="error"
		></audio> -->
		<audio ref="audio" :src="songUrl" />
	</div>
</template>

<script>
import API from '@api';
// import audioNav from 'base/generalNav';
import PlayerRecord from './components/PlayerRecord';
import PlayerIcons from './components/PlayerIcons';
import PlayerBar from './components/PlayerBar';
import PlayerButtons from './components/PlayerButtons';
import { mapGetters, mapMutations } from 'vuex';
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
			startTime: '00:00',
			duration: 0,
			progressWidth: 0,
			artist: [],
			imgUrl: '',
			readySong: false,
			canSong: true,
			songName: ''
		};
	},
	computed: {
		...mapGetters({
			audioSong: 'AUDIO_ING_SONG',
			state: 'PLAY_STATE',
			index: 'AUDIO_ING_INDEX',
			list: 'AUDIO_LIST'
		})
	},
	watch: {
		audioSong(val) {
			this.checkSong(val.id);
			this.duration = val.duration;
			this.artist = val.album.artists;
			this.imgUrl = val.album.picUrl;
			this.name = val.name;
		}
	},
	mounted() {
		this.checkSong(1375539356);
	},
	methods: {
		...mapMutations({
			setState: 'SET_PLAY_SATE',
			setIndex: 'SET_AUDIO_INDEX'
		}),
		/**
		 * 获取音乐url
		 */
		getSongUrl(id) {
			API.getSongUrl(id).then(res => {
				const data = res.data;
				if (data.code === 200) {
					this.songUrl = data.data[0].url;
					// this.audioTimeUpdate();
					// this.toPlay();
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
						this.canSong = true;
						this.getSongUrl(id);
					}
				})
				.catch(err => {
					if (err) {
						console.log(err);
						// 不能播放的时候选择下一首进行播放
						this.canSong = false;
						this.readySong = true;
						this.nextSong();
						this.readySong = true;
					}
				});
		},
		/**
		 * 播放暂停事件
		 */
		toggle() {
			if (this.state) {
				this.toPause();
			} else {
				this.toPlay();
			}
		},
		changeTime(time) {
			const audio = this.$refs.audio;
			const current = (time * audio.duration) / 100;
			audio.currentTime = current;
		},
		/**
		 * 上一首歌曲切换
		 */
		prevSong() {
			if (!this.readySong) {
				return;
			}
			let nowIndex = this.index - 1;
			if (nowIndex === -1) {
				nowIndex = this.list.length - 1;
			}
			this.setIndex(nowIndex);
			this.readySong = false;
		},
		/**
		 * 下一首歌曲切换
		 */
		nextSong() {
			if (!this.readySong) {
				return;
			}
			console.log(this.index);
			let nowIndex = this.index + 1;
			if (nowIndex === this.list.length) {
				nowIndex = 0;
			}
			console.log(nowIndex);
			this.setIndex(nowIndex);
			this.readySong = false;
		},
		/**
		 * 播放歌曲
		 */
		toPlay() {
			this.$refs.audio.play();
			this.setState(true);
		},
		/**
		 * 暂停歌曲
		 */
		toPause() {
			this.$refs.audio.pause();
			this.setState(false);
		},
		/**
		 *  当浏览器可以播放资源时
		 */
		ready() {
			this.readySong = true;
		},
		/**
		 * 当在资源加载期间发生错误时
		 */
		error() {
			this.readySong = true;
		},
		/**
		 * 添加歌曲时间更新事件
		 */
		audioTimeUpdate() {
			this.$refs.audio.addEventListener('timeupdate', this.setTime);
		},
		/**
		 * 设置当前播放时长
		 */
		setTime() {
			// 首先我们计算到当前的播放时间
			const audio = this.$refs.audio;
			let minutes = Math.floor(audio.currentTime / 60);
			let seconds = Math.floor(audio.currentTime - minutes * 60);
			let minuteValue;
			let secondValue;
			// 进行格式转换，当分钟小于10的时候，在前面加0
			if (minutes < 10) {
				minuteValue = '0' + minutes;
			} else {
				minuteValue = minutes;
			}
			// 秒数的格式设置
			if (seconds < 10) {
				secondValue = '0' + seconds;
			} else {
				secondValue = seconds;
			}
			// 进行时间值拼接，展示到页面
			let audioTime = minuteValue + ':' + secondValue;
			this.playTime = audioTime;
			// // 进度条的长度计算
			let barLength = (audio.currentTime / audio.duration) * 100;
			this.setProgress(barLength);
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
		returnPage() {
			console.log(111);
		}
	}
};
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_1410851_1kpmn0o6bx5.css');
// @import url('~styles/global.less');
.container {
	// position: absolute;
	// top: 0;
	// left: 0;
	// bottom: 0;
	// right: 0;
	// z-index: 9999;
	width: 100vw;
	height: 100vh;
	background-color: #7f8c8d;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	.color {
		color: #fff;
	}
	.title {
		color: #fff;
		line-height: 1.5;
	}
	.text {
		font-size: 0.24rem;
		color: #bdc3c7;
		.art {
			&::after {
				content: '/';
			}
			&:last-child::after {
				content: '';
			}
		}
	}
}
</style>
