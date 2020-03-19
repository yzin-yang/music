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
		<mini-player
			v-show="!showPlayer && playList.size"
			class="mini-player"
		/>
		<play-list />
	</div>
</template>
<script>
import Player from '@pages/player';
import MiniPlayer from '@components/MiniPlayer';
import PlayList from '@components/PlayList';
import { mapState } from 'vuex';
export default {
	name: 'app',
	components: {
		Player,
		MiniPlayer,
		PlayList
	},
	computed: {
		...mapState(['showPlayer']),
		...mapState('player', ['playList'])
	}
};
</script>

<style lang="less">
#app {
	min-height: 100vh;
	background-color: #fff;
	.mini-player {
		position: sticky;
		bottom: 0;
	}
}
</style>
