<template>
	<div class="login-menu">
		<login-top />
		<login-icons />
		<login-list-top />
		<!-- <login-list></login-list> -->
		<login-list-bottom />
		<login-bottom />
	</div>
</template>

<script>
import LoginTop from '@components/login/LoginTop';
import LoginIcons from '@components/login/LoginIcons';
import LoginListTop from '@components/login/LoginListTop';
import LoginListBottom from '@components/login/LoginListBottom';
import LoginBottom from '@components/login/LoginBottom';

export default {
	name: 'Login',
	components: {
		LoginTop,
		LoginIcons,
		LoginListTop,
		LoginBottom,
		LoginListBottom
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
