import App from '@/App';
// import findIndex from '@pages/find/index';
const findIndex = () =>
	import(/* webpackChunkName: "group-Detail" */ '@pages/find/index');

export default [
	{
		path: '/',
		name: 'main',
		redirect: '/find',
		component: findIndex,
		children: [
			{
				path: '/find',
				component: findIndex
			}
		]
	}
];
