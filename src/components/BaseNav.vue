<template>
	<!-- 顶部导航条 -->
	<div class="nav-wrapper">
		<div class="nav-left">
			<i class="iconfont iconnav" @click="showLogin" />
		</div>
		<ul class="nav-center">
			<router-link tag="li" to="/home">我的</router-link>
			<router-link tag="li" to="/find">发现</router-link>
			<router-link tag="li" to="/friend">朋友</router-link>
			<router-link tag="li" to="/video">视频</router-link>
		</ul>
		<div class="nav-right">
			<i class="iconfont iconsousuo" @click="enterFullScreen" />
		</div>

		<transition name="login-show">
			<login v-if="loginPage" @touchmove.prevent />
		</transition>
		<transition name="mask-show">
			<div
				class="mask"
				v-show="loginPage"
				@click="hideLogin"
				@touchmove.prevent
			/>
		</transition>
	</div>
</template>
<script>
import Login from '@pages/login/Login';
export default {
	name: 'BaseNav',
	components: {
		Login
	},
	data() {
		return {
			loginPage: false,
			fullScreen: false
		};
	},
	methods: {
		showLogin() {
			this.loginPage = true;
			this.$modalHelper.afterOpen(); // 打开禁用
		},
		hideLogin() {
			this.loginPage = false;
			this.$modalHelper.beforeClose(); // 关闭禁用
		},
		enterFullScreen() {
			let element = document.documentElement;
			if (document.fullscreenElement) {
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
		}
	}
};
</script>

<style lang="less" scoped>
@import url('https://at.alicdn.com/t/font_1298894_btl1q00lfth.css');
.mask-show-enter,
.mask-show-leave-to {
	opacity: 0;
}
.mask-show-enter-active,
.mask-show-leave-active {
	transition: opacity linear 0.2s;
}
.login-show-enter,
.login-show-leave-to {
	transform: translateX(-5vw);
}
.login-show-enter-active,
.login-show-leave-active {
	transition: transform ease-out 0.2s;
}
.nav-wrapper {
	padding: 1vw 2vw;
	position: sticky;
	top: 0;
	z-index: 2;
	background-color: #fff;
	display: flex;
	.nav-left {
		flex: 2;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.iconfont {
			font-size: 1rem;
		}
	}
	.nav-center {
		flex: 6;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #999;
		font-size: 0.8rem;
		list-style: none;
	}
	.nav-right {
		flex: 2;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.iconfont {
			font-size: 1rem;
		}
	}
}
.mask {
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
}
</style>
