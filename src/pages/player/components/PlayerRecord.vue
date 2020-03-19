<template>
	<div class="player-record" :class="{ rotate: playState }">
		<div class="stylus" />
		<div ref="circle" class="circle-bg">
			<img :src="picUrl" class="poster" alt />
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'PlayerRecord',
	props: {
		picUrl: {
			type: String
		}
	},
	computed: {
		...mapState('player', ['playState'])
	},

	watch: {
		playState(state) {
			this.$refs.circle.style.animationPlayState = state
				? 'running'
				: 'paused';
		}
	}
};
</script>
<style lang="less" scoped>
.player-record {
	height: 70vh;
	position: relative;
	&.rotate {
		.stylus {
			transform: translate(-50%) rotate(2deg);
		}
		.circle-bg {
			animation-play-state: running;
		}
	}
	.stylus {
		position: absolute;
		z-index: 1;
		left: 50%;
		transform-origin: top left;
		transform: translate(-50%) rotate(-30deg);
		transition: transform 0.5s;
		width: 13vw;
		height: 20vw;
		background-image: url('https://s2.ax1x.com/2019/09/13/nrJyJP.png');
		background-size: 100% 100%;
	}

	.circle-bg {
		width: 80vw;
		height: 80vw;
		margin: 5vh auto;
		background-image: url('https://s2.ax1x.com/2019/09/12/n0yYqK.png');
		background-size: 100% 100%;
		line-height: 80vw;
		text-align: center;
		.pause-rotating();
		.poster {
			width: 50vw;
			height: 50vw;
			border-radius: 50%;
			vertical-align: middle;
		}
	}
}
</style>
