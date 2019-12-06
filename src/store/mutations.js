// 实现侧边栏显示时底部不跟随滚动
import ModalHelper from '@utils/modalScroll';
import {
	HIDE_LEFT_NAV,
	SET_AUDIO_INDEX,
	SET_AUDIO_LIST,
	SET_FULL_SCREEN,
	SET_LINK_PAGE,
	SET_PLAY_SATE,
	SHOW_LEFT_NAV
} from './types';

export default {
	// 显示左侧侧边栏页面
	[SHOW_LEFT_NAV](state) {
		state.showLeftNav = true;
		ModalHelper.afterOpen();
	},
	// 隐藏左侧侧边栏页面
	[HIDE_LEFT_NAV](state) {
		state.showLeftNav = false;
		ModalHelper.beforeClose();
	},

	// // 设置用户登陆状态
	// [LOGIN_STATE](state) {
	// 	state.loginState = 1;
	// },
	// // 存取用户 uid
	// [ACCOUNT_UID](state, id) {
	// 	state.accountUid = id;
	// }
	[SET_LINK_PAGE](state, page) {
		state.linkPage = page;
	},
	/**
	 * 设置播放状态
	 * @param {*} state state 数据
	 * @param {*} flag 播放状态
	 */
	[SET_PLAY_SATE](state, flag) {
		state.playState = flag;
	},
	/**
	 * 设置播放器是大还是小
	 */
	[SET_FULL_SCREEN](state, flag) {
		state.fullScreen = flag;
	},
	/**
	 * 设置播放列表信息
	 */
	[SET_AUDIO_LIST](state, list) {
		state.audioList = list;
	},
	/**
	 * 设置
	 */
	[SET_AUDIO_INDEX](state, index) {
		state.audioIngIndex = index;
	}
};
