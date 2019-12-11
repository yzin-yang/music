const baseNav = () =>
	import(/* webpackChunkName: "group-Detail" */ '@components/BaseNav');
const find = () => import(/* webpackChunkName: "group-Detail" */ '@pages/find');
const home = () => import(/* webpackChunkName: "group-Detail" */ '@pages/home');
const login = () =>
	import(/* webpackChunkName: "group-Detail" */ '@pages/login');
const search = () =>
	import(/* webpackChunkName: "group-Detail" */ '@pages/search');

export default [
	{
		path: '/',
		name: 'main',
		component: baseNav,
		redirect: '/find',
		children: [
			{
				path: '/find',
				name: 'find',
				component: find
			},
			{
				path: '/home',
				name: 'home',
				component: home
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: login
	},
	{
		path: '/search',
		name: 'search',
		component: search
	}
];
