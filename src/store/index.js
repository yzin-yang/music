import actions from './actions';
import getters from './getters';
import find from './modules/find';
import home from './modules/home';
import leftNav from './modules/leftNav';
import player from './modules/player';
import mutations from './mutations';
import state from './state';

const debug = process.env.NODE_ENV !== 'production';

export default {
	modules: { find, home, leftNav, player },
	state,
	getters,
	mutations,
	actions,
	strict: debug
	// plugins: debug ? [createLogger()] : []
};
