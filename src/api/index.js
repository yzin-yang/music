import axios from 'axios';

// ===================登陆
export const phoneLogin = '/api/login/cellphone'; // 手机号登陆
export const phoneRegistered = '/api/cellphone/existence/check'; // 手机号是否被注册
export const loginStatus = '/api/login/status'; // 登录状态

// ===================我的页面
export const userRecord = '/api/user/record'; // 用户播放记录
export const userInfo = '/api/user/subcount'; // 用户信息
export const playlist = '/api/user/playlist'; // 用户歌单
export const userDj = '/api/user/dj'; // 用户电台

export default {
	// ===================登陆
	/**
	 * 检测手机号码是否已注册
	 * @param {*} phone 手机号
	 */
	isPhoneRegistered(phone) {
		return axios.get(phoneRegistered, {
			params: {
				phone
			}
		});
	},
	/**
	 * 用户通过手机登录
	 * @param {number} phone 手机号
	 * @param {String} password 密码
	 */
	doPhoneLogin(phone, password) {
		return axios.get(phoneLogin, {
			params: {
				phone: phone || '',
				password: password || ''
			}
		});
	},
	/**
	 * 获取当前登录状态
	 */
	getLoginStatus() {
		return axios.get(loginStatus);
	},

	// ===================我的页面
	/**
	 * 获取用户播放记录
	 * 登陆后调用此接口 , 传入用户 id, 可获取用户播放记录
	 * @param {*} uid 用户id
	 * @param {*} type type=1 时只返回 weekData, type=0 时返回 allData
	 */
	getUserRecord(uid, type = 0) {
		return axios.get(userRecord, {
			params: {
				uid,
				type
			}
		});
	},
	/**
	 * 获取用户信息 , 歌单，收藏，mv, dj 数量
	 * 登陆后调用此接口 , 可以获取用户信息
	 * artistCount: 2 我的收藏中的歌手
	 * code: 200
	 * createDjRadioCount: 0
	 * createdPlaylistCount: 2 创建的歌单数
	 * djRadioCount: 1 我的电台
	 * mvCount: 0
	 * newProgramCount: 0
	 * programCount: 0
	 * subPlaylistCount: 3 收藏的歌单数
	 */
	getUserInfo() {
		return axios.get(userInfo);
	},
	/**
	 * 登陆后调用此接口 , 传入用户 id, 可以获取用户歌单
	 * @param {*} uid 用户id
	 */
	getPlaylist(uid) {
		return axios.get(playlist, {
			params: {
				uid
			}
		});
	},
	/**
	 * 登陆后调用此接口 , 传入用户 id, 可以获取用户电台
	 * @param {*} uid 用户 id
	 */
	getUserDj(uid) {
		return axios.get(userDj, {
			params: {
				uid
			}
		});
	}
};
