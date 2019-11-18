const findIndex = () =>
	import(/* webpackChunkName: "group-Detail" */ '@pages/find/index');

export default [
	{
		path: '/',
		name: 'main',
		redirect: '/find',
		// component: App, //findIndex
		children: [
			//二级路由。对应App.vue
			{
				//地址为空时跳转home页面
				path: '',
				redirect: '/find'
			},
			{
				path: '/find',
				component: findIndex
			}
		]
	}
];
