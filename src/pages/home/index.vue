<template>
	<div class="container">
		<home-icons />
		<home-list :nums="homeListNum" />
		<song-list :listsInfo="songListsNum" />
	</div>
</template>
<script>
import HomeList from './components/HomeList';
import HomeIcons from './components/HomeIcons';
import SongList from './components/SongList';
import API from '@api';
import { mapMutations } from 'vuex';
import { LOGIN_STATE, ACCOUNT_UID } from '@mutationtypes';

export default {
	name: 'HomeIndex',

	components: {
		HomeList,
		HomeIcons,
		SongList
	},

	data() {
		return {
			homeListNum: {
				recordNum: 0,
				djNum: 0
			},
			songListsNum: {
				createdNum: 0,
				favoriteNum: 0
			}
		};
	},
	async created() {
		// try {
		//     const res = await API.getLoginStatus();
		//     if (res.status === 200 && res.statusText === 'OK') {
		//         const { userId } = res.data.profile;
		//         if (res.data.code === 200) {
		//             this.LOGIN_STATE();
		//             this.ACCOUNT_UID(userId);
		//             this.getInfo();
		//             this.getRecord(userId);
		//         }
		//     }
		// } catch (error) {
		//     console.error(error);
		// }
	},
	methods: {
		/**
		 * 获取用户播放记录
		 * @param id 用户 uid
		 */
		async getRecord(id) {
			try {
				const res = await API.getUserRecord(id);
				this.homeListNum.recordNum = res.data.allData.length;
			} catch (err) {
				console.error(err);
			}
		},

		/**
		 * 获取用户信息
		 * 更新我的电台、创建的歌单、收藏的歌单数
		 */
		async getInfo() {
			try {
				const res = await API.getUserInfo();
				this.setListNum(res);
			} catch (err) {
				console.error(err);
			}
		},
		setListNum(res) {
			if (res.status === 200 && res.statusText === 'OK') {
				const {
					djRadioCount = 0,
					createdPlaylistCount = 0,
					subPlaylistCount = 0
				} = res.data;
				this.homeListNum.djNum = djRadioCount;
				this.songListsNum.createdNum = createdPlaylistCount;
				this.songListsNum.favoriteNum = subPlaylistCount;
			}
		},

		...mapMutations('home', [LOGIN_STATE, ACCOUNT_UID])
	}
};
</script>
<style lang="less" scoped></style>
