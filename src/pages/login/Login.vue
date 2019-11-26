<template>
	<div class="login-menu">
		<login-top></login-top>
		<login-icons></login-icons>
		<login-list></login-list>
	</div>
</template>

<script>
import LoginTop from '@components/login/LoginTop';
import LoginIcons from '@components/login/LoginIcons';
import LoginList from '@components/login/LoginList';
export default {
	name: 'Login',
	components: {
		LoginTop,
		LoginIcons,
		LoginList
	},
	props: {
		left: [String, Number]
	}
};
</script>

<style lang="less" scoped>
.login-menu {
	position: absolute;
	z-index: 11;
	height: 100vh;
	// overflow-y: auto;
	top: 0;
	left: 0;
	width: 70vw;
	background: #fff;
}
</style>
