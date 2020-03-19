<template>
	<div class="wrapper border-top">
		<span @click="toggleFullScreen">
			<i class="iconfont" :class="fullScreenClass" />
			<!-- <span>全屏</span> -->
		</span>
		<span @click="toggleMode">
			<i class="iconfont" :class="skinClass" />
			<span>{{ modeText }}间模式</span>
		</span>
		<span>
			<i class="iconfont icon-shezhi" />
			<span>设置</span>
		</span>
		<span>
			<i class="iconfont icon-icon4" />
			<span>退出</span>
		</span>
	</div>
</template>
<script>
import { mapState } from 'vuex';
const modeMap = { 0: ['日', 'icon-taiyang'], 1: ['夜', 'icon-yejianmoshi'] };
export default {
	name: 'LeftNavBottom',
	data() {
		return {
			mode: 1,
			isFullScreen: false
		};
	},
	computed: {
		fullScreenClass() {
			return this.isFullScreen ? 'icon-tuichuquanping' : 'icon-quanping';
		},
		modeText() {
			return modeMap[this.mode][0];
		},
		skinClass() {
			return modeMap[this.mode][1];
		}
	},
	methods: {
		toggleMode() {
			this.mode = 1 ^ this.mode;
		},
		toggleFullScreen() {
			let element = document.documentElement;
			if (this.isFullScreen) {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			} else {
				if (element.requestFullscreen) {
					element.requestFullscreen();
				} else if (element.webkitRequestFullScreen) {
					element.webkitRequestFullScreen();
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if (element.msRequestFullscreen) {
					element.msRequestFullscreen();
				}
			}
			this.isFullScreen = !this.isFullScreen;
		}
	}
};
</script>
<style lang="less" scoped>
@import '~@styles/leftNav.less';
.wrapper {
	position: sticky;
	bottom: 0;
	box-sizing: border-box;
	width: 70vw;
	display: flex;
	justify-content: space-around;
	font-size: 4vw;
	background-color: white;
	.iconfont {
		font-size: 3.5vw;
		vertical-align: baseline;
	}
}
.border-top {
	border-top: 1px solid #ccc;
	padding: 4vw;
}
</style>
