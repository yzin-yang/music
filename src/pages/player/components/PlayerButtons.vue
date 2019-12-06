<template>
	<div class="wrapper">
		<i class="audio audioxunhuan"></i>
		<i class="audio audioxiayishou1"></i>
		<i
			class="audio"
			:class="{ audiobofang1: isPlay, audiobofang: !isPlay }"
			@click="play"
		></i>
		<i class="audio audioxiayishou"></i>
		<i class="audio audioliebiao"></i>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	name: 'PlayerButtons',
	computed: {
		...mapGetters({ isPlay: 'PLAY_STATE' })
	},
	methods: {
		play() {
			this.$emit('play');
		}
	}
};
</script>
<style lang="less" scoped>
.wrapper {
	display: flex;
	justify-content: space-around;
	align-items: center;
	.pinglun {
		position: relative;
		.com-num {
			position: absolute;
			top: 0;
			right: 0;
			font-size: 4vw;
			padding: 0.03rem;
			box-sizing: border-box;
			background-color: #7f8c8d;
			color: #bdc3c7;
		}
	}
	.audio {
		font-size: 5vw;
		color: #bdc3c7;
		&:nth-of-type(3) {
			font-size: 8vw;
		}
	}
}
</style>
