<template>
	<div class="container">
		<home-icons />
		<home-list />
		<div class="split" />
	</div>
</template>
<script>
import HomeList from "@components/home/HomeList";
import HomeIcons from "@components/home/HomeIcons";

export default {
	name: "HomeIndex",
	components: {
		HomeList,
		HomeIcons
	}
};
</script>
<style lang="less" scoped></style>
