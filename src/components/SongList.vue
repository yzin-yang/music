<template>
	<div>
		<div v-for="(track, index) in tracks" :key="index">
			<div class="list-item" @click="startSong($event, track)">
				<!-- <div v-if="imgUrl" class="img-info">
					<img
						v-show="!nowSong"
						:key="imgUrl"
						v-lazy="imgUrl + '?param=50y50'"
					/>
					<i v-show="nowSong" class="result yinliang" />
                </div>-->
				<div class="index">
					<span v-if="!nowSong && type !== 'playList'">{{
						index + 1
					}}</span>
					<i v-show="nowSong" class="result yinliang" />
				</div>
				<div class="song-info" @click="selectSong(track)">
					<p :class="`${(type ? type : '') + '-'}song-name`">
						<span v-html="track.name" />
						<span
							v-if="type !== 'playList' && track.alia.length"
							class="alia"
							>({{ track.alia.join(' ') }})
						</span>
						<span v-else-if="type === 'playList'" class="song-art">
							<span
								v-for="(artist, index) in track.ar"
								:key="index"
								class="artist"
								>{{ artist.name }}
							</span>
						</span>
					</p>
					<p v-if="type === 'djList'" class="dj-info">
						<span class="data">{{ createTime | setMonth }}</span>
						<span class="count">
							<i class="result bofang1" />
							{{ listenerCount | setNum }}
						</span>
						<span class="time">
							<i class="result shijian" />
							{{ duration | setTime }}
						</span>
					</p>
					<p v-else-if="type !== 'playList'" class="song-art">
						<span>
							<span
								v-for="(artist, index) in track.ar"
								:key="index"
								class="artist"
								>{{ artist.name }}
							</span>
						</span>
						<span class="album-name">{{ track.al.name }} </span>
					</p>
					<!-- <router-link
                        :to="{name:'player',query:{track:setPlayerProps(track)}}"
                        class="cover"
                    />-->
				</div>
				<div
					v-if="type !== 'playList'"
					class="icon"
					@click.stop="showSlider(itemId)"
				>
					<i class="result diandiandian" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	name: 'SongList',
	filters: {},
	props: {
		tracks: {
			type: Array,
			default: () => []
		},
		type: {
			type: String
		}
	},
	data() {
		return {
			nowSong: false
		};
	},
	methods: {
		...mapMutations({ showPlayer: 'SHOW_PLAYER' }),
		...mapMutations('player', { select: 'SET_PLAYING_SONG' }),
		selectSong(track) {
			this.select({ track });
			this.showPlayer();
		},
		startSong(e, track) {
			this.$emit('playSong', track);
		},
		showSlider(id) {
			this.$emit('showSlider', id);
		}
		//路由传参
		// setPlayerProps(track) {
		//     const {
		//         name,
		//         id,
		//         ar,
		//         al: { picUrl }
		//     } = track;
		//     return JSON.stringify({ name, id, ar, picUrl });
		// }
	}
};
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_1380711_cftenqb5flc.css');

.list-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.index {
		color: #999;
	}
	.yinliang {
		color: @bgcolor;
	}
	// .img-info {
	// 	width: 0.7rem;
	// 	height: 0;
	// 	padding-bottom: 0.7rem;
	// 	margin-right: 0.2rem;
	// 	position: relative;
	// 	img {
	// 		border-radius: 0.1rem;
	// 		width: 0.7rem;
	// 		height: 0.7rem;
	// 	}
	// 	.yinliang {
	// 		position: absolute;
	// 		left: 50%;
	// 		top: 50%;
	// 		transform: translate3d(-50%, -50%, 0);
	// 	}
	// }
	.song-info {
		display: flex;
		flex-direction: column;
		& > .song-name {
			width: 75vw;
			.alia {
				color: #7c7b7d;
			}
			.ellipsis();
		}
		& > .playList-song-name {
			width: 95vw;
			margin: 1vw 0;
			.alia {
				color: #7c7b7d;
			}
			.ellipsis();
		}
		.song-art {
			font-size: 1vw;
			color: #dacdcd;
			width: 75vw;
			.ellipsis();
			.artist {
				&::after {
					content: '/';
				}
				&:last-child::after {
					content: '';
				}
			}
			.album-name {
				&::before {
					content: '- ';
				}
			}
		}
		// .dj-info {
		// 	font-size: 0.2rem;
		// 	line-height: 1.5;
		// 	color: #ccc;
		// 	.result {
		// 		font-size: 0.2rem;
		// 	}
		// 	.data,
		// 	.count {
		// 		margin-right: 0.2rem;
		// 	}
		// }
	}
	.icon {
		color: #ccc;
	}
}
</style>
