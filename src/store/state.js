export default {
	showLeftNav: false, // 侧边栏显示与否
	loginState: 0, // 登陆状态，初始值为 0 未登录，登陆成功设置为 1
	accountUid: 0, // 存取用户 uid
	load: true, // 定义搜索展示界面 loading 图标的展示与否
	linkPage: 'composite', // 定义搜索展示页的标签导航条应该根据路由信息进行滚动
	playState: false, // 是否正在播放
	audioList: [], // 用来展示播放列表项
	audioIngIndex: -1 // 正在播放的这一首歌曲索引
};
