<template>
	<div class="bar">
		<span>{{ startTime }}</span>
		<div ref="barBg" class="bar-bg" @touchstart.prevent="clickBg">
			<div class="bar-layer" :style="{ width: length }" />
			<div
				class="point"
				:style="{ left: length }"
				@touchstart.prevent="start"
				@touchmove.prevent="move"
				@touchend="end"
			/>
		</div>
		<span>{{ duration | formatTime }}</span>
	</div>
</template>

<script>
export default {
	name: 'PlayerBar',
	filters: {
		/**
		 * 将毫秒转换为分秒
		 */
		formatTime(value) {
			if (!value) return '';
			let min = Math.floor(value / (1000 * 60));
			if (min < 10) {
				min = '0' + min;
			}
			let sec = Math.floor((value % (1000 * 60)) / 1000);
			if (sec < 10) {
				sec = '0' + sec;
			}
			return `${min}:${sec}`;
		}
	},
	props: {
		duration: {
			type: Number
		},
		startTime: {
			type: String
		},
		width: {
			type: Number
		}
	},
	data() {
		return {
			length,
			touch: {}
		};
	},
	watch: {
		startTime(val) {
			return val;
		},
		width(val) {
			val = val + '%';
			this.length = val;
		}
	},
	methods: {
		/**
		 * 点击小圆点
		 */
		start(e) {
			this.touch.state = true;
			const left = this.$refs.barBg.offsetLeft;
			this.touch.startX = e.changedTouches[0].pageX - left;
			this.touch.width = this.$refs.barBg.clientWidth;
		},
		clickBg(e) {
			this.touch.width = this.$refs.barBg.clientWidth;
			const left = this.$refs.barBg.offsetLeft;
			this.touch.endX = e.changedTouches[0].pageX - left;
			const offsetWidth = (this.touch.endX / this.touch.width) * 100;
			this._changeWidth(offsetWidth);
			this.$emit('time', this.touch.offsetWidth);
		},
		move(e) {
			if (!this.touch.state) {
				return;
			}
			const left = this.$refs.barBg.offsetLeft;
			const deltaX = e.changedTouches[0].pageX - left;
			const width = Math.min(Math.max(0, deltaX), this.touch.width);
			this.touch.offsetWidth = (width / this.touch.width) * 100;
			this._changeWidth(this.touch.offsetWidth);
		},
		_changeWidth(val) {
			this.length = val + '%';
		},
		end() {
			this.touch.state = false;
			this.$emit('time', this.touch.offsetWidth);
		}
	}
};
</script>

<style lang="less" scoped>
.bar {
	margin: 3vh 0;
	display: flex;
	align-items: center;
	color: #bdc3c7;
	font-size: 2.5vw;
	.bar-bg {
		width: 100%;
		margin: 0 3vw;
		// height: 2px;
		background-color: #95a5a6;
		position: relative;
		.bar-layer {
			height: 2px;
			background-color: #ecf0f1;
		}
		.point {
			position: absolute;
			top: -3px;
			border-radius: 50%;
			width: 8px;
			height: 8px;
			background-color: #ecf0f1;
		}
	}
}
</style>
