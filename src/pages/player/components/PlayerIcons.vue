<template>
	<div class="player-icons">
		<i class="audio audioshoucang1" />
		<i class="audio audioxiazai" />
		<span class="player-pinglun">
			<i class="audio audiopinglun" />
			<i class="com-num" />
		</span>
		<i class="audio audiocaidan" />
	</div>
</template>
<script>
export default {
	name: 'PlayerIcons'
};
</script>
<style lang="less" scoped>
.player-icons {
	display: flex;
	justify-content: space-around;
	align-items: center;
	.player-pinglun {
		position: relative;
		.com-num {
			position: absolute;
			top: 0;
			right: 0;
			font-size: 0.24rem;
			padding: 0.03rem;
			box-sizing: border-box;
			background-color: #7f8c8d;
			color: #bdc3c7;
		}
	}
	.audio {
		font-size: 5vw;
		color: #bdc3c7;
		&.audio-shoucang {
			color: #e74c3c;
		}
	}
}
</style>
