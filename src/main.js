import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router/router';
import Vuex from 'vuex';
import store from './store';
import 'swiper/dist/css/swiper.min.css'; //TODO css的loader设置不正确会导致slide纵向排列
import '@styles/common.less';
import '@styles/reset.less';

import ModalHelper from '@utils/ModalScroll';

Vue.prototype.$modalHelper = ModalHelper;

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
	linkActiveClass: 'ac',
	routes
	// mode: 'history'
});

const VuexStore = new Vuex.Store(store);

new Vue({
	router,
	store: VuexStore,
	render: h => h(App)
}).$mount('#app');
