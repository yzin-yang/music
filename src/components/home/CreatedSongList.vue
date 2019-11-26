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
	name: 'CreatedSongList'
};
</script>
<style lang="less" scoped>
@import url('https://at.alicdn.com/t/font_1306338_0j9qd4b899zn.css');
.wrapper-title {
	display: flex;
	justify-content: space-between;
	padding: 0 1vw;
	.left-title {
		font-size: 2.8rem;
		.iconfont {
			font-size: 2.1rem;
		}
		.created-title {
			font-weight: 700;
		}
		.num {
			font-size: smaller;
			color: #ccc;
			margin-left: 0.5vw;
		}
	}
	.right-title {
		.iconfont {
			font-size: 2.5rem;
		}
		.icondian {
			margin-left: 0.3rem;
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
			margin-right: 3vw;
			.iconxin {
				font-size: 5vw;
			}
		}
		.list-info {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			font-size: 2.5rem;
			.list-num {
				margin: 1vw 0 0 0.5vw;
				font-size: smaller;
				color: #ccc;
			}
		}
		.heart-mode {
			padding: 1vw 3vw;
			font-size: 2.2rem;
			border-radius: 5vw;
			letter-spacing: 0.25rem;
			color: #cf1100;
			border: 1px solid #cf1100;
			.iconxindong {
				font-size: 2.2rem;
				font-weight: 700;
				margin-right: 0.5vw;
			}
		}
	}
}
</style>
