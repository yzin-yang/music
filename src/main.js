import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router/router';
import Vuex from 'vuex';
import state from './store';
import '@styles/common.css';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
	linkActiveClass: 'ac',
	routes,
	mode: 'history'
});

const store = new Vuex.Store({
	// eslint-disable-next-line no-undef
	strict: process.env.NODE_ENV !== 'production',
	state
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
