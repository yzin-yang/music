<template>
	<div class="bottom-audio">
		<div ref="circle" class="img-info">
			<img :src="imgUrl" alt="" />
		</div>
		<div class="con-info">
			<p class="name">{{ name }}</p>
			<p class="lrc">
				这是一句歌词这是一句歌词这是一句歌词这是一句歌词这是一句歌词这是一句歌词这是一句歌词这是一句歌词这是一句歌词
			</p>
		</div>
		<div class="button">
			<span class="circle"
				><i
					class="audio"
					:class="{
						audiozantingtingzhi: isPlay,
						audiobofang2: !isPlay
					}"
					@click="play"
				></i
			></span>
			<i class="audio audioliebiao"></i>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: '',
	props: {
		imgUrl: {
			type: String
		},
		name: {
			type: String
		}
	},
	computed: {
		...mapGetters({ isPlay: 'PLAY_STATE' })
	},
	watch: {
		isPlay: function(val) {
			if (val) {
				this.$refs.circle.style.animationPlayState = 'running';
			} else {
				this.$refs.circle.style.animationPlayState = 'paused';
			}
		}
	},
	methods: {
		play() {
			this.$emit('play');
		}
	}
};
</script>

<style lang="less" scoped>
// @import url('~styles/global.less');
.bottom-audio {
	display: flex;
	align-items: center;
	.img-info {
		width: 10vw;
		// height: 0;
		// padding-bottom: 0.7rem;
		// border-radius: 50%;
		// overflow: hidden;
		animation: rotating 24s linear infinite;
		transform-origin: center;
		img {
			width: 5vw;
			height: 5vw;
		}
	}
	.con-info {
		margin-left: 0.16rem;
		width: 4.3rem;
		.name {
			font-size: 0.26rem;
			line-height: 1.5;
		}
		.lrc {
			font-size: 0.2rem;
			line-height: 1.5;
			// .ellipsis();
		}
	}
	.button {
		.audio {
			// box-sizing: border-box;
			// margin-left: 0.12rem;
			font-size: 4vw;
		}
		.circle {
			display: inline-block;
			text-align: center;
			// line-height: 0.4rem;
			width: 4vw;
			height: 4vw;
			border-radius: 50%;
			margin-left: 0.1rem;
			.audio {
				margin-left: 0;
				font-size: 3vw;
			}
		}
	}
}
@keyframes rotating {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
