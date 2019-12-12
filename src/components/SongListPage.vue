<template>
	<!-- <div class="wrapper" @scroll="scrollList"> -->
	<div class="wrapper">
		<div class="container-top">
			<!-- <global-nav class="fixed pd23" v-if="!isAlbum">
				<span class="text" v-show="listFixed">{{ iTitle }}</span>
			</global-nav> -->
			<!-- <global-nav class="fixed pd23" v-if="isAlbum">
				<span class="text">{{ iTitle }}</span>
			</global-nav> -->
			<!-- <div v-if="!isAlbum" class="date">
				<span class="day">{{ day }}</span>
				<span class="month">{{ month }}</span>
			</div> -->
			<!-- <div v-if="!isAlbum" class="info">查收属于您的今日推荐</div> -->
			<div v-if="isAlbum" class="album-info">
				<div class="info-top">
					<div class="img-info">
						<img :src="listInfo.coverImgUrl" alt="" />
					</div>
					<div class="info-con">
						<p class="album-title">{{ iAlbumTitle }}</p>
						<div class="creator">
							<div class="img-info">
								<img :src="listInfo.avatarUrl" alt="" />
							</div>
							<span>
								{{ listInfo.creatorName }}
								<i class="date-song iconfontjiantou5" />
							</span>
						</div>
						<div class="desc-wrapper">
							<span class="desc">
								{{ listInfo.description }}
							</span>
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
				<i class="date-song cbofang" />
				播放全部
				<span v-if="isAlbum" class="count"
					>(共{{ listInfo.trackCount }}首)</span
				>
			</span>
			<span v-if="!isAlbum">
				<i class="date-song caidan" />
				多选
			</span>
			<span v-if="isAlbum" class="collection">
				+ 收藏({{ listInfo.subscribedCount }})
			</span>
		</div>
		<song-list v-show="!load" class="list-info" :tracksInfo="tracks" />
		<!-- <div v-show="!load"  :style="{ marginTop: top }">
			<div
				v-for="(item, index) in listInfo.tracks"
				:key="index"
				class="tracks"
			>
				<span>{{ index + 1 }}</span>
				<div class="song-info">
					<span>{{ item.name }}</span>
					<div>
						<span>{{ item.ar[0].name }}</span>
						{{ '-' }}
						<span>{{ item.al.name }}</span>
					</div>
				</div>
				<i class="result diandiandian"></i>
			</div>
		</div> -->
		<!-- <page-loading v-show="load"></page-loading> -->
	</div>
</template>

<script>
// import globalNav from 'base/generalNav';
// import pageLoading from 'base/pageLoading';
import API from '@api';
import SongList from './SongList';

export default {
	name: '',
	components: {
		// globalNav,
		// pageLoading
		SongList
	},
	props: {
		height: {
			type: String,
			default: '6rem'
		},
		isAlbum: {
			type: Boolean,
			default: true
		},
		load: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			iTitle: this.title,
			iAlbumTitle: this.albumTitle,
			listFixed: false,
			top: '0.5rem',
			listInfo: {},
			tracks: {}
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
		title: function(val) {
			this.iTitle = val;
		},
		albumTitle: function(val) {
			this.iAlbumTitle = val;
		}
	},
	async created() {
		try {
			const res = await API.getSongListDetail(this.$route.params.id);
			console.log(res.data);
			const {
				coverImgUrl,
				creator: { avatarUrl, nickname },
				description,
				commentCount,
				shareCount,
				trackCount,
				subscribedCount,
				tracks
			} = res.data.playlist;
			// this.imgUrl = coverImgUrl;
			// this.creatorImgUrl = avatarUrl;
			// this.creatorName = nickname;
			// this.description = description;
			// this.commentCount = commentCount;
			// this.shareCount = shareCount;
			// this.trackCount = trackCount;
			// this.subscribedCount = subscribedCount;
			this.listInfo = Object.assign(
				{},
				{
					coverImgUrl,
					description,
					commentCount,
					shareCount,
					trackCount,
					subscribedCount,
					avatarUrl,
					nickname
				}
			);
			this.tracks = tracks;
			this.load = false;
		} catch (error) {
			console.error(error);
		}
	},
	methods: {
		/**
		 * 定义页面滚动事件，
		 * 当页面滚动时，首先是顶部背景区域的透明度发生变化
		 * 通过改变下边列表区域的 transform:translate3d(x, y, z) 中的y值
		 */
		scrollList() {
			let top = this.$el.scrollTop;
			if (!this.isAlbum) {
				if (top >= 148) {
					this.listFixed = true;
					this.top = '1.3rem';
				} else {
					this.listFixed = false;
					this.top = '0.5rem';
				}
			} else {
				if (top >= 148) {
					// 这里使用data存下了props的值进行修改，子组件不能直接修改props传过来的值
					this.iTitle = this.albumTitle;
				} else {
					this.iTitle = this.title;
				}
				if (top >= 250) {
					this.listFixed = true;
					this.top = '1.3rem';
				} else {
					this.listFixed = false;
					this.top = '0.5rem';
				}
			}
		}
	}
};
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_1394963_wydqsjlp9ms.css');
@import url('//at.alicdn.com/t/font_1380711_cftenqb5flc.css');
// @import url('~styles/global.less');
.fixed {
	position: fixed;
	width: 100%;
	height: 0.8rem;
	background-color: #ee5253;
	top: 0;
	z-index: 999;
}
.listFixed {
	// position: fixed;
	// width: 100%;
	// height: 0.8rem;
	// top: 0.8rem;
	// z-index: 999;
}
.title {
	font-size: 0.3rem;
	height: 0.8rem;
	line-height: 0.8rem;
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
				// height: 3rem;
				display: flex;
				justify-content: space-around;
				// overflow: hidden;
				.img-info {
					// width: 2.6rem;
					// height: 0;
					// padding-bottom: 2.6rem;
					// border-radius: 0.1rem;
					// overflow: hidden;
					img {
						width: 20vw;
						height: 20vw;
					}
				}
				.info-con {
					// width: 3.6rem;
					// height: 2.6rem;
					display: flex;
					flex-direction: column;
					overflow: hidden;
					.album-title {
						font-size: 0.36rem;
						line-height: 1.5;
						// .twoLinesEllipsis();
					}
					.creator {
						// height: 1rem;
						color: #ccc;
						display: flex;
						align-items: center;
						.img-info {
							// width: 0.6rem;
							// height: 0;
							// padding-bottom: 0.6rem;
							margin-right: 8px;
							border-radius: 50%;
							// overflow: hidden;
							img {
								width: 5vw;
								height: 5vw;
							}
						}
					}
					.desc-wrapper {
						display: flex;
						align-items: center;
						color: #ccc;
						.desc {
							width: 30vw;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							overflow: hidden;
							/*! autoprefixer: off */
							-webkit-box-orient: vertical;
							// .twoLinesEllipsis();
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
