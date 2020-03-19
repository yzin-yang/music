<template>
	<div class="history">
		<div class="history-title">
			<span>历史记录</span>
			<i class="search iconlajitong" />
		</div>
		<div class="wrapper">
			<div class="container">
				<ul class="icons-group">
					<li
						v-for="(item, index) in history"
						:key="index"
						class="icon-list"
					>
						{{ item }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
// import Bus from '@utils/Bus';
export default {
	name: 'History',
	data() {
		return {
			history
		};
	},
	created() {
		this.getHistory();
	},
	methods: {
		getHistory() {
			// Bus.$on('history', history => {
			// 	this.history = history;
			// });
		},
		clearHistory() {
			localStorage.removeItem('keys');
			this.history = [];
		}
	}
};
</script>

<style lang="less" scoped>
// @import url('~styles/global.less');
.history {
	margin-top: 0.7rem;
	.history-title {
		display: flex;
		justify-content: space-between;
		// height: 0.8rem;
		// line-height: 0.8rem;
		.search {
			font-size: 5vw;
		}
	}
	.wrapper {
		// box-sizing: border-box;
		// overflow: hidden;
		// height: 0.5rem;
		// 定义可左右滑动的图标组
		.container {
			// 横向滚动条
			overflow-x: scroll;
			.icons-group {
				// flex布局 溢出不换行
				// height: 0.5rem;
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				white-space: nowrap;
				width: auto;
				min-width: 100%;
				.icon-list {
					height: 100%;
					box-sizing: border-box;
					padding: 0.13rem;
					font-size: small;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-right: 5px;
					border-radius: 0.3rem;
					background: #eee;
				}
			}
		}
	}
}
::-webkit-scrollbar {
	display: none;
}
</style>
