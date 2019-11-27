<template>
	<div class="login-menu">
		<login-top></login-top>
		<login-icons></login-icons>
		<login-icons-top></login-icons-top>
		<!-- <login-list></login-list> -->
		<login-icons-bottom></login-icons-bottom>
		<login-bottom></login-bottom>
	</div>
</template>

<script>
import LoginTop from '@components/login/LoginTop';
import LoginIcons from '@components/login/LoginIcons';
import LoginIconsTop from '@components/login/LoginIconsTop';
import LoginIconsBottom from '@components/login/LoginIconsBottom';
import LoginBottom from '@components/login/LoginBottom';

export default {
	name: 'Login',
	components: {
		LoginTop,
		LoginIcons,
		LoginIconsTop,
		LoginBottom,
		LoginIconsBottom
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
