// 实现侧边栏显示时底部不跟随滚动
import ModalHelper from '@utils/modalScroll';
import {
	HIDE_LEFT_NAV,
	HIDE_PLAYER,
	SET_LINK_PAGE,
	SHOW_LEFT_NAV,
	SHOW_PLAYER
} from './mutation-types';

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

	[SHOW_PLAYER](state) {
		state.showPlayer = true;
	},
	[HIDE_PLAYER](state) {
		state.showPlayer = false;
	}
};
