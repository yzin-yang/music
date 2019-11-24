<template>
	<div class="container">
		<find-swiper />
		<find-icons />
		<personal-song-list />
		<new-dish />
	</div>
</template>
<script>
import FindSwiper from "@components/find/FindSwiper";
import FindIcons from "@components/find/FindIcons";
import PersonalSongList from "@components/find/PersonalSongList";
import NewDish from "@components/find/NewDish";

export default {
	name: "FindIndex",
	components: {
		FindSwiper,
		FindIcons,
		PersonalSongList,
		NewDish
	}
};
</script>

<style lang="less" scoped></style>
