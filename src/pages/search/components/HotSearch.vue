<template>
	<div class="song-hot-search">
		<p class="hot-search-title">热搜榜</p>
		<ul>
			<li
				v-for="(item, index) in hotSearchList"
				:key="index"
				class="hot-search-list"
			>
				<span class="num">{{ index + 1 }}</span>
				<div class="song-info" @click="selectHot(item.searchWord)">
					<div class="song-info-title">
						<p class="song-name">{{ item.searchWord }}</p>
						<span class="num">{{ item.score }}</span>
						<img
							v-if="item.iconUrl"
							class="search-png"
							:src="item.iconUrl"
						/>
					</div>
					<div class="song-introduced">{{ item.content }}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import API from '@api';
export default {
	name: 'HotSearch',
	data() {
		return {
			hotSearchList: []
		};
	},
	created() {
		this.getList();
	},
	methods: {
		getList() {
			API.getHotSearchList()
				.then(res => {
					res = res.data;
					if (res.code === 200) {
						this.hotSearchList = res.data;
					}
				})
				.catch(error => {
					console.error(error);
				});
		},
		selectHot(keywords) {
			this.$emit('selectHot', keywords);
		}
		// returnKey(key) {
		// 	this.$emit('returnKey', key);
		// }
	}
};
</script>

<style lang="less" scoped>
// @import url('~styles/global.less');
.song-hot-search {
	margin-top: 3vh;
	.hot-search-list {
		display: flex;
		align-items: center;
		margin: 2vh 0;
		line-height: 7vw;
		&:nth-child(-n + 3) > .num {
			color: @bgcolor;
		}
		> .num {
			font-size: 3vw;
		}
		.song-info {
			margin-left: 20px;
			.song-info-title {
				display: flex;
				align-items: center;
				.song-name {
					margin-right: 5px;
				}
				.search-png {
					margin-left: 9px;
					height: 2.8vw;
				}
				.num {
					font-size: 2.5vw;
					color: #999999;
				}
			}
		}
		.song-introduced {
			font-size: 2vw;
			color: #aaa;
		}
	}
}
</style>
