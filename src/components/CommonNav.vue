<template>
	<nav ref="nav" class="phone-nav">
		<i class="phone iconzuojiantou" @click="goBack" />
		<slot></slot>
	</nav>
</template>
<script>
export default {
	name: 'CommonNav',
	methods: {
		goBack() {
			this.$router.back();
		}
	}
};
</script>
<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_1351323_oxqdjg3rufq.css');
.phone-nav {
	display: flex;
	align-items: center;
	color: #fff;
	&.height {
		height: 1rem;
		line-height: 1rem;
	}
	.phone {
		font-size: 7vw;
		margin-right: 3.5vw;
	}
}
</style>
