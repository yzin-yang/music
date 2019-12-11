import axios from 'axios';

/* ------------------------------ 登陆 ------------------------------ */
export const phoneLogin = '/api/login/cellphone'; // 手机号登陆
export const phoneRegistered = '/api/cellphone/existence/check'; // 手机号是否被注册
export const loginStatus = '/api/login/status'; // 登录状态

/* ----------------------------- 我的页面 ----------------------------- */
export const userRecord = '/api/user/record'; // 用户播放记录
export const userInfo = '/api/user/subcount'; // 用户信息
export const playlist = '/api/user/playlist'; // 用户歌单
export const userDj = '/api/user/dj'; // 用户电台

/* ---------------------------- 搜索页面相关 ---------------------------- */
export const search = '/api/search'; // 搜索关键词
export const defaultSearch = '/api/search/default'; // 默认搜索关键词
export const suggestSearch = '/api/search/suggest'; // 搜索建议
export const hotSearchList = '/api/search/hot/detail'; // 热搜列表

/* ------------------------------ 播放 ------------------------------ */
export const songUrl = 'api/song/url'; // 获取歌曲url
export const checkSong = 'api/check/music';

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
	},

	// ===================搜索
	/**
	 * 调用此接口,可获取热门搜索列表
	 */
	getHotSearchList() {
		return axios.get(hotSearchList);
	},
	/**
	 * 调用此接口 , 传入搜索关键词可以搜索
	 * 该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开
	 * @param {*} keywords 关键词
	 * @param {*} limit 返回数量 , 默认为 30
	 * @param {*} offset 偏移数量，用于分页 默认为 0
	 * @param {*} type 搜索类型 默认为 1 即单曲 这里设置默认返回综合
	 * 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单
	 * 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
	 */
	getSearchList(keywords, limit = 30, offset = 0, type = 1018) {
		return axios.get(search, {
			params: {
				keywords,
				limit,
				offset,
				type
			}
		});
	},
	/**
	 * 调用此接口 , 可获取默认搜索关键词
	 */
	getDefaultSearch() {
		return axios.get(defaultSearch);
	},
	/**
	 * 调用此接口
	 * 传入搜索关键词可获得搜索建议 ,
	 * 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
	 * @param {*} keywords 关键词
	 * @param {*} type 默认返回移动端数据
	 */
	getSuggestSearch(keywords, type = 'mobile') {
		return axios.get(suggestSearch, {
			params: {
				keywords,
				type
			}
		});
	},
	/**
	 *  使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url
	 * 调用此接口 , 传入的音乐 id( 可多个 , 用逗号隔开 )
	 * 可以获取对应的音乐的 url( 不需要登录 )
	 * @param {*} id 音乐 id
	 * @param {*} br 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
	 */
	songUrlFn(id, br) {
		return axios.get(songUrl, {
			params: {
				id,
				br
			}
		});
	},
	/**
	 * 传入歌曲 id, 可获取音乐是否可用
	 * @param {*} id 歌曲 id
	 * @param {*} br 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
	 */
	checkSongFn(id, br) {
		return axios.get(checkSong, {
			params: {
				id,
				br
			}
		});
	}
};
