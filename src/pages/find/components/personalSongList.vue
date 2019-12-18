<template>
	<div class="wrapper">
		<div class="title">
			<div class="recommended">推荐歌单</div>
			<div class="square">歌单广场</div>
		</div>

		<ul class="song-group">
			<li
				v-for="(item, index) in songLists"
				:key="index"
				class="song-list"
			>
				<div class="list-img">
					<img :src="item.coverImgUrl" alt />
					<span class="play-count">
						<i class="iconfont iconbofang" />
						{{ item.playCount | playCount }}
					</span>
					<!-- <router-link
						class="cover"
						:to="'/playlist?id=' + item.id"
					/> -->
					<router-link
						class="cover"
						:to="{ name: 'songlist', params: { id: item.id } }"
					/>
				</div>
				<div class="list-con">{{ item.name }}</div>
			</li>
		</ul>
	</div>
</template>
<script>
import API from '@api';
import { mapGetters } from 'vuex';
export default {
	name: 'PersonalSongList',
	filters: {
		playCount(val) {
			if (!val) {
				return '';
			}
			if (val > 100000000) {
				return (val / 100000000).toFixed(1) + '亿';
			} else if (val > 10000) {
				return Math.floor(val / 10000) + '万';
			} else {
				return val;
			}
		}
	},
	data() {
		return {
			songLists: []
		};
	},
	computed: { ...mapGetters({ loginState: 'LOGIN_STATE' }) },
	mounted() {
		this.getSongLists();
	},
	methods: {
		async getSongLists() {
			try {
				const res = await API.getRecSongLists();
				this.setSongLists(res);
			} catch (error) {
				console.error(error);
			}
		},
		setSongLists(res) {
			if (res.status === 200 && res.statusText === 'OK') {
				this.songLists = res.data.playlists.slice(0, 6);
				// this.songLists = this.getRandomArrayElements(res, 6);
			}
		}
		// getRandomArrayElements(arr, count) {
		// 	// eslint-disable-next-line one-var
		// 	let shuffled = arr.slice(0),
		// 		// 克隆一个数组，为了不影响外边的数据
		// 		i = arr.length,
		// 		min = i - count,
		// 		temp,
		// 		index;
		// 	// 存下来数组信息  数组的长度
		// 	// 通过改变数组项的位置 输出后边的几位
		// 	while (--i > min) {
		// 		// 随机生成出一个索引
		// 		index = Math.floor((i + 1) * Math.random());
		// 		// 将随机索引项暂存
		// 		// 将数组后边的项与随机项调换
		// 		temp = shuffled[index];
		// 		shuffled[index] = shuffled[i];
		// 		shuffled[i] = temp;
		// 	}
		// 	return shuffled.slice(min);
		// }
	}
};
</script>
<style lang="less" scoped>
@import url('http://at.alicdn.com/t/font_1298894_btl1q00lfth.css');
@import '~@styles/find.less';
</style>
