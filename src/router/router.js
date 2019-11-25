// import findIndex from '@pages/find/index';
const find = () => import(/* webpackChunkName: "group-Detail" */ '@pages/find');
const home = () =>
	import(/* webpackChunkName: "group-Detail" */ '@/pages/home');
export default [
	{
		path: '/',
		name: 'main',
		redirect: '/find',
		component: find,
		children: [
			{
				path: '/find',
				name: 'find',
				component: find
			}
		]
	},
	{
		path: '/home',
		name: 'home',
		component: home
	}
];
