<template>
	<div class="wrapper">
		<div class="stylus" :class="{ rotate: !isPlay }"></div>
		<div ref="circle" class="circle-bg">
			<div class="song-img">
				<img :src="imgUrl" alt="" />
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	name: 'PlayerRecord',
	props: {
		imgUrl: {
			type: String
		}
	},
	// computed: {
	// 	...mapGetters({ isPlay: 'PLAY_STATE' })
	// },
	data() {
		return {
			isPlay: true
		};
	},
	watch: {
		isPlay(val) {
			if (val) {
				this.$refs.circle.style.animationPlayState = 'running';
			} else {
				this.$refs.circle.style.animationPlayState = 'paused';
			}
		}
	}
};
</script>
<style lang="less" scoped>
.wrapper {
	height: 70vh;
	// margin-top: 8px;
	position: relative;
	overflow: hidden;
	.stylus {
		position: absolute;
		z-index: 1;
		left: 50%;
		transform-origin: top left;
		transform: translate(-50%) rotate(0deg);
		transition: transform 0.2s;
		width: 15vw;
		height: 0;
		padding-bottom: 10vh;
		background-image: url('https://s2.ax1x.com/2019/09/13/nrJyJP.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		&.rotate {
			transform: translate(-50%) rotate(-16deg);
		}
	}
	.circle-bg {
		display: flex;
		justify-content: center;
		width: 80vw;
		margin: 5vh auto;
		height: 0;
		padding-bottom: 80vw;
		background-image: url('https://s2.ax1x.com/2019/09/12/n0yYqK.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		animation: rotating 24s linear infinite;
		transform-origin: center;
		.song-img {
			border: 1px solid #000;
			width: 3.6rem;
			height: 0;
			padding-bottom: 3.6rem;
			border-radius: 50%;
			margin-top: 1rem;
			overflow: hidden;
			img {
				width: 3.6rem;
				height: 3.6rem;
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
