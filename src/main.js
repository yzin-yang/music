import '@styles/reset.less';
import 'swiper/dist/css/swiper.min.css';
//TODO css的loader设置不正确会导致slide纵向排列
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App';
import routes from './router/router';
import store from './store';

let a = null ?? 2;
let test;
console.log(a);
console.log(test?.test?.stest);
Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
	linkActiveClass: 'ac',
	routes
	// mode: 'history'
});

const VuexStore = new Vuex.Store(store);

var vm = new Vue({
	router,
	store: VuexStore,
	render: h => h(App)
}).$mount('#app');
window.vm = vm;
