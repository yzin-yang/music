<template>
	<div class="result-container">
		<div class="wy">
			<p>网易</p>
			<div class="more" @click="showWyMore">more</div>
		</div>
		<ul>
			<li
				v-for="(track, index) in wyResult.slice(0, 5)"
				:key="index"
				class="result-list"
			>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-wangyiyunyinle" />
				</svg>
				<div class="song-info" @click="selectSong({ track })">
					<p class="song-name">{{ track.name }}</p>
					<div class="song-info-bottom">
						<span
							v-for="(artist, index) in track.ar"
							:key="index"
							class="artist"
						>
							{{ artist.name }}
						</span>
						<span class="album-name">
							{{ '- ' + track.al.name }}
						</span>
					</div>
				</div>
			</li>
		</ul>
		<div class="qq">
			<p>QQ</p>
			<div class="more" @click="showQqMore">more</div>
		</div>
		<ul>
			<li
				v-for="(track, index) in qqResult.slice(0, 5)"
				:key="index"
				class="result-list"
			>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-QQmusic"></use>
				</svg>
				<div
					class="song-info"
					@click="selectSong({ track, type: 'qq' })"
				>
					<p class="song-name">{{ track.songname }}</p>
					<div class="song-info-bottom">
						<span
							v-for="(artist, index) in track.singer"
							:key="index"
							class="artist"
							>{{ artist.name }}</span
						>
						<span class="album-name">{{
							track.albumid ? '- ' + track.albumname : ''
						}}</span>
					</div>
				</div>
			</li>
		</ul>
		<remote-js src="https://at.alicdn.com/t/font_1605330_4s8exfvg2hc.js" />
	</div>
</template>

<script>
import API from '@api';
import { mapMutations } from 'vuex';
export default {
	name: 'SearchResult',
	components: {
		'remote-js': {
			render(createElement) {
				// var self = this;
				return createElement('script', {
					attrs: { type: 'text/javascript', src: this.src }
					// on: {
					// 	load() {
					// 		console.log('load js');
					// 		self.$emit('load-js-finish');
					// 	}
					// }
				});
			},
			props: {
				src: { type: String, required: true }
			}
		}
	},
	props: ['keywords'],
	data() {
		return {
			qqResult: [],
			wyResult: []
		};
	},
	watch: {
		keywords(val) {
			API.getQqSearchResult(val).then(res => {
				console.log('qq', res);
				this.qqResult = res.data.data.list;
			});
			API.getWySearchResult(val).then(res => {
				console.log('wy', res.data.result.song.songs);
				this.wyResult = res.data.result.song.songs;
			});
		}
	},
	created() {
		API.getQqSearchResult(this.keywords).then(res => {
			console.log('qq', res);
			this.qqResult = res.data.data.list;
		});
		API.getWySearchResult(this.keywords).then(res => {
			console.log('wy', res.data.result.song.songs);
			this.wyResult = res.data.result.song.songs;
		});
	},
	methods: {
		...mapMutations({ showPlayer: 'SHOW_PLAYER' }),
		...mapMutations('player', { select: 'SET_PLAYING_SONG' }),
		selectSong(track) {
			this.select(track);
			this.showPlayer();
		},
		showWyMore() {
			this.$emit('showMore', 'wy', this.wyResult);
		},
		showQqMore() {
			this.$emit('showMore', 'qq', this.qqResult);
		}
	}
};
</script>

<style lang="less" scoped>
.result-container {
	margin-top: 3vh;
	.wy,
	.qq {
		display: flex;
		align-items: center;
		& > p {
			flex: 1;
		}
		&::before {
			content: '';
			display: inline-block;
			width: 1.5vw;
			height: 1em;
			margin-right: 2vw;
			border-radius: 3px;
			// vertical-align: -0.17em;
		}
	}
	.wy::before {
		background-color: @bgcolor;
	}
	.qq::before {
		background-color: @qqcolor;
	}
	.more {
		float: right;
		padding: 1vw 2vw;
		font-size: 3.7vw;
		border-radius: 4vw;
		letter-spacing: 0.2vw;
		border: 1px solid #ccc;
	}
	.result-list {
		display: flex;
		align-items: center;
		margin: 2vh 0;
		line-height: 1.8;
		.song-info {
			margin-left: 20px;
			width: 80vw;
			.song-name {
				.ellipsis();
			}
			.song-info-bottom {
				font-size: 2vw;
				color: #aaa;
				.ellipsis();
				.artist {
					&:not(:nth-last-child(2))::after {
						content: '/';
					}
				}
			}
		}
	}
	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
}
</style>
