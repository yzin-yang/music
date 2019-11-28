<template>
	<div class="container">
		<div class="wrapper-title">
			<div class="left-title">
				<i class="iconfont iconxiala" />
				<span class="created-title">创建的歌单</span>
				<span class="num">(1)</span>
			</div>
			<div class="right-title">
				<i class="iconfont iconjia" />
				<i class="iconfont icondian" />
			</div>
		</div>
		<ul class="song-group">
			<li class="song-list">
				<div class="list-img">
					<i class="iconfont iconxin"></i>
				</div>
				<div class="list-info">
					<p class="list-title">我喜欢的音乐</p>
					<p class="list-num">0首</p>
				</div>
				<div class="heart-mode">
					<i class="iconfont iconxindong"></i>心动模式
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: "CreatedSongList"
};
</script>
<style lang="less" scoped>
@import url("https://at.alicdn.com/t/font_1306338_0j9qd4b899zn.css");
@import "~@styles/common.less";
.container {
	padding: 0 3.5vw;
}
.wrapper-title {
	display: flex;
	justify-content: space-between;
	padding: 0 0 3vw;
	.left-title {
		font-size: 5vw;
		.iconfont {
			font-size: 5vw;
		}
		.created-title {
			font-weight: 650;
		}
		.num {
			font-size: smaller;
			color: #ccc;
			margin-left: 0.5vw;
		}
	}
	.right-title {
		.iconfont {
			font-size: 5vw;
		}
		.icondian {
			margin-left: 1vw;
		}
	}
}
.song-group {
	.song-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.list-img {
			background-color: rgba(0, 0, 0, 0.7);
			border-radius: 1vw;
			width: 15vw;
			height: 15vw;
			line-height: 15vw;
			text-align: center;
			color: #fff;
			margin: 0 3vw 0 0;
			.iconxin {
				font-size: 5vw;
			}
		}
		.list-info {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 4.5vw;
			.list-num {
				margin: 1vw 0;
				font-size: smaller;
				color: #ccc;
			}
		}
		.heart-mode {
			padding: 1vw 3vw;
			font-size: 3.8vw;
			border-radius: 5vw;
			letter-spacing: 0.5vw;
			color: @icon-color;
			border: 1px solid @icon-color;
			.iconxindong {
				font-size: 3.5vw;
				font-weight: 700;
				margin-right: 1vw;
			}
		}
	}
}
</style>
