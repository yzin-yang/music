<template>
	<div class="login-menu">
		<left-nav-top />
		<left-nav-icons />
		<left-nav-list-top />
		<left-nav-list-bottom />
		<left-nav-bottom />
	</div>
</template>

<script>
import LeftNavTop from './components/LeftNavTop';
import LeftNavIcons from './components/LeftNavIcons';
import LeftNavListTop from './components/LeftNavListTop';
import LeftNavListBottom from './components/LeftNavListBottom';
import LeftNavBottom from './components/LeftNavBottom';

export default {
	name: 'LeftNav',
	components: {
		LeftNavTop,
		LeftNavIcons,
		LeftNavListTop,
		LeftNavBottom,
		LeftNavListBottom
	}
};
</script>

<style lang="less" scoped>
.login-menu {
	position: absolute;
	z-index: 11;
	height: 100vh;
	overflow-y: auto;
	top: 0;
	left: 0;
	width: 70vw;
	background: #fff;
}
</style>
