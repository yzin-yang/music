<template>
	<div id="app">
		<transition name="router-fade" mode="out-in">
			<!-- 需缓存页面 -->
			<keep-alive>
				<!-- 路由出口 -->
				<!-- 路由匹配到的组件将渲染在这里 -->
				<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
		</transition>
		<transition name="router-fade" mode="out-in">
			<!-- 不需缓存页面 -->
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
	</div>
</template>

<script>
export default { name: 'app' };
</script>

<style lang="less">
#app {
	box-sizing: border-box;
	padding: 0.13rem;
}
</style>
