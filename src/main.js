import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router/router';
import Vuex from 'vuex';
import store from './store';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
	linkActiveClass: 'ac',
	routes,
	mode: 'history'
});

const VuexStore = new Vuex.Store({
	store
});

new Vue({
	router,
	VuexStore,
	render: h => h(App)
}).$mount('#app');
