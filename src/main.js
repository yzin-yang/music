import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router/router';

Vue.use(VueRouter);
const router = new VueRouter({
	linkActiveClass: 'ac',
	routes,
	mode: 'history'
});
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
