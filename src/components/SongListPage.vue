<template>
	<!-- <div class="wrapper" @scroll="scrollList"> -->
	<div class="wrapper" @scroll="scrollList">
		<common-nav class="fixed">
			<span v-show="showTitle" class="text">{{ listInfo.name }}</span>
			<span v-show="!showTitle" class="text">歌单</span>
		</common-nav>
		<div class="container-top">
			<!-- <global-nav class="fixed pd23" v-if="!isAlbum">
				<span class="text" v-show="listFixed">{{ iTitle }}</span>
            </global-nav>-->
			<!-- <global-nav class="fixed pd23" v-if="isAlbum">
				<span class="text">{{ iTitle }}</span>
            </global-nav>-->
			<!-- <div v-if="!isAlbum" class="date">
				<span class="day">{{ day }}</span>
				<span class="month">{{ month }}</span>
            </div>-->
			<!-- <div v-if="!isAlbum" class="info">查收属于您的今日推荐</div> -->
			<div v-if="isAlbum" class="album-info">
				<div class="info-top">
					<img :src="listInfo.coverImgUrl" alt class="cover-img" />
					<div class="info-con">
						<p class="album-title">{{ listInfo.name }}</p>
						<div class="creator">
							<!-- <div class="img-info"> -->
							<img :src="listInfo.avatarUrl" alt class="avatar" />
							<!-- </div> -->
							<span>
								{{ listInfo.nickname }}
								<i class="date-song iconfontjiantou5" />
							</span>
						</div>
						<div class="desc-wrapper">
							<span class="desc">{{ listInfo.description }}</span>
							<i class="date-song iconfontjiantou5" />
						</div>
					</div>
				</div>
				<div class="icons">
					<div class="comments">
						<i class="date-song pinglun" />
						<span>{{ listInfo.commentCount }}</span>
					</div>
					<div class="comments">
						<i class="date-song fenxiang" />
						<span>{{ listInfo.shareCount }}</span>
					</div>
					<div class="comments">
						<i class="date-song xiazai" />
						<span>下载</span>
					</div>
					<div class="comments">
						<i class="date-song duoxuankuang" />
						<span>多选</span>
					</div>
				</div>
			</div>
		</div>
		<div class="title" :class="{ listFixed }">
			<span>
				<span @click="playAll(tracks)">
					<i class="date-song cbofang" />
					播放全部
				</span>
				<span v-if="isAlbum" class="count"
					>(共{{ listInfo.trackCount }}首)</span
				>
			</span>
			<span v-if="!isAlbum">
				<i class="date-song caidan" />
				多选
			</span>
			<span v-if="isAlbum" class="collection"
				>+ 收藏({{ listInfo.subscribedCount }})</span
			>
		</div>
		<div v-show="!loading" ref="songList">
			<song-list class="list-info" :tracks="tracks" />
		</div>
		<!-- <page-loading v-show="load"></page-loading> -->
	</div>
</template>

<script>
import CommonNav from './CommonNav';
// import pageLoading from 'base/pageLoading';
import API from '@api';
import SongList from './SongList';
import { mapMutations } from 'vuex';

export default {
	name: '',
	components: {
		CommonNav,
		// pageLoading
		SongList
	},
	props: {
		isAlbum: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			// iTitle: this.title,
			// iAlbumTitle: this.albumTitle,
			listFixed: false,
			top: '0.5rem',
			listInfo: {},
			tracks: [],
			loading: true,
			showTitle: false,
			listTop: 0
		};
	},
	computed: {
		day: function() {
			const day =
				new Date().getDate() < 10
					? '0' + new Date().getDate()
					: new Date().getDate();
			return day;
		},
		month: function() {
			const month =
				new Date().getMonth() + 1 < 10
					? '0' + (new Date().getMonth() + 1)
					: new Date().getMonth() + 1;
			return month;
		}
	},
	watch: {
		// title: function(val) {
		// 	this.iTitle = val;
		// },
		// albumTitle: function(val) {
		// 	this.iAlbumTitle = val;
		// }
	},
	// find跳转到另一个songlistpage
	beforeRouteEnter(to, from, next) {
		API.getSongListDetail(to.params.id).then(res => {
			next(vm => {
				vm.listInfo = res.data.playlist;
				const {
					coverImgUrl,
					creator: { avatarUrl, nickname },
					description,
					commentCount,
					shareCount,
					trackCount,
					subscribedCount,
					tracks,
					name
				} = res.data.playlist;
				vm.listInfo = {
					coverImgUrl,
					description,
					commentCount,
					shareCount,
					trackCount,
					subscribedCount,
					avatarUrl,
					nickname,
					name
				};
				vm.tracks = tracks;
				vm.loading = false;
			});
		});
	},
	// songlistpage跳转到另一个songlistpage
	// beforeRouteUpdate(to, from, next) {
	// },
	mounted() {
		setTimeout(() => {
			this.listTop = this.$refs.songList.offsetTop;
		}, 0);
	},
	methods: {
		...mapMutations({ showPlayer: 'SHOW_PLAYER' }),
		...mapMutations('player', {
			setList: 'SET_PLAYING_LIST'
		}),
		playAll(tracks) {
			this.setList({ tracks });
			this.showPlayer();
		},
		/**
		 * 定义页面滚动事件，
		 * 当页面滚动时，首先是顶部背景区域的透明度发生变化
		 * 通过改变下边列表区域的 transform:translate3d(x, y, z) 中的y值
		 */
		scrollList() {
			let top = this.$el.scrollTop;
			if (top >= this.listTop) {
				this.showTitle = true;
			} else {
				this.showTitle = false;
			}
			// if (!this.isAlbum) {
			// 	if (top >= 148) {
			// 		this.listFixed = true;
			// 		this.top = '1.3rem';
			// 	} else {
			// 		this.listFixed = false;
			// 		this.top = '0.5rem';
			// 	}
			// } else {
			// 	if (top >= 148) {
			// 		// 这里使用data存下了props的值进行修改，子组件不能直接修改props传过来的值
			// 		this.iTitle = this.albumTitle;
			// 	} else {
			// 		this.iTitle = this.title;
			// 	}
			// 	if (top >= 250) {
			// 		this.listFixed = true;
			// 		this.top = '1.3rem';
			// 	} else {
			// 		this.listFixed = false;
			// 		this.top = '0.5rem';
			// 	}
			// }
		}
	}
};
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_1394963_wydqsjlp9ms.css');
@import url('//at.alicdn.com/t/font_1380711_cftenqb5flc.css');
@import url('~@styles/common.less');
.fixed {
	position: sticky;
	width: 100%;
	// height: 0.8rem;
	top: 0;
	background-color: #ee5253;
	color: #fff;
	z-index: 1;
}
.listFixed {
	// position: fixed;
	// width: 100%;
	// height: 0.8rem;
	// top: 0.8rem;
	// z-index: 999;
}
.title {
	font-size: 4vw;
	// height: 0.8rem;
	// line-height: 0.8rem;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	.count {
		color: #999;
		font-size: small;
	}
	.collection {
		background-color: @bgcolor;
		box-sizing: border-box;
		padding: 1vw 0.23rem;
		font-size: smaller;
		margin-top: 3px;
		// height: 0.7rem;
		// line-height: 0.7rem;
		color: #fff;
		border-radius: 0.4rem;
	}
}
.wrapper {
	height: 100vh;
	position: relative;
	overflow: scroll;
	.container-top {
		width: 100%;
		color: #fff;
		background-color: #ee5253;
		.date {
			padding-top: 1.5rem;
			.day {
				font-size: 0.7rem;
			}
			.month {
				font-size: 0.4rem;
				color: #c8d6e5;
				&::before {
					content: '/';
				}
			}
		}
		.info {
			margin-top: 0.7rem;
		}
		.text {
			font-size: 0.4rem;
			vertical-align: 5px;
		}
		.album-info {
			padding-top: 3vh;
			.info-top {
				display: flex;
				justify-content: space-around;
				align-items: center;
				.cover-img {
					width: 25vw;
					height: 25vw;
				}
				.info-con {
					width: 60vw;
					display: flex;
					flex-direction: column;
					font-size: 3.5vw;
					.album-title {
						font-size: 4.3vw;
						line-height: 1.5;
						.twoLinesEllipsis();
					}
					.creator {
						color: #ccc;
						display: flex;
						align-items: center;
						.avatar {
							margin-right: 8px;
							width: 8vw;
							height: 8vw;
							border-radius: 50%;
						}
					}
					.desc-wrapper {
						display: flex;
						align-items: center;
						color: #ccc;
						.desc {
							.twoLinesEllipsis();
						}
					}
				}
			}
			.icons {
				margin-top: 8px;
				display: flex;
				justify-content: space-around;
				width: 100%;
				.comments {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					.date-song {
						font-size: 0.4rem;
						margin-bottom: 5px;
					}
				}
			}
		}
	}
	.list-info {
		width: 100%;
		box-sizing: border-box;
		padding: 0.1rem 0.23rem;
		background-color: #fff;
		transform: translate3d(0, -0.5rem, 0);
		.tracks {
			display: flex;
			justify-content: space-between;
			.song-info {
				display: flex;
				flex-direction: column;
				flex: 1;
			}
		}
	}
}
</style>
