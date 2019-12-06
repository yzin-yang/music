<template>
	<div id="app">
		<transition name="router-fade" mode="out-in">
			<!-- 需缓存页面 -->
			<keep-alive>
				<!-- 路由出口 -->
				<!-- 路由匹配到的组件将渲染在这里 -->
				<!-- <router-view v-if="$route.meta.keepAlive"></router-view> -->
				<router-view />
			</keep-alive>
		</transition>
		<!-- <transition name="router-fade" mode="out-in"> -->
		<!-- 不需缓存页面 -->
		<!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
		<!-- </transition> -->
		<audio-player v-show="AUDIO_LIST.length" />
	</div>
</template>
<script>
import AudioPlayer from '@components/AudioPlayer';
import { mapGetters } from 'vuex';
export default {
	name: 'app',
	components: {
		AudioPlayer
	},
	computed: {
		...mapGetters(['AUDIO_LIST'])
	}
};
</script>

<style lang="less">
#app {
	background-color: #fff;
	// height: 100vh;
	// width: 100vw;
}
</style>
