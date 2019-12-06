<template>
	<div id="app">
		<transition name="router-fade" mode="out-in">
			<keep-alive>
				<!-- 路由出口 -->
				<!-- 路由匹配到的组件将渲染在这里 -->
				<!-- <router-view v-if="$route.meta.keepAlive"></router-view> -->
				<router-view />
			</keep-alive>
		</transition>
		<!-- <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>-->
		<!-- <audio-player v-show="playList.length" /> -->
		<player v-show="showPlayer" />
	</div>
</template>
<script>
// import AudioPlayer from '@components/AudioPlayer';
import Player from '@pages/player';
import { mapState } from 'vuex';
export default {
	name: 'app',
	components: {
		// AudioPlayer,
		Player
	},
	computed: {
		...mapState(['playList', 'showPlayer'])
	}
};
</script>

<style lang="less">
#app {
	background-color: #fff;
}
</style>
