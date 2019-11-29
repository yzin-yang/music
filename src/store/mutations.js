import { SHOW_LEFT_NAV, HIDE_LEFT_NAV } from './mutation-types';

// 实现侧边栏显示时底部不跟随滚动
import ModalHelper from '@utils/modalScroll';

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
	}

	// // 设置用户登陆状态
	// [LOGIN_STATE](state) {
	// 	state.loginState = 1;
	// },
	// // 存取用户 uid
	// [ACCOUNT_UID](state, id) {
	// 	state.accountUid = id;
	// }
};
