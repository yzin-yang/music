import find from './modules/find';
import home from './modules/home';
import leftNav from './modules/leftNav';
import state from './state';
import mutations from './mutations';
// eslint-disable-next-line no-undef
const debug = process.env.NODE_ENV !== 'production';

export default {
	state,
	modules: { find, home, leftNav },
	mutations,
	strict: debug
	// plugins: debug ? [createLogger()] : []
};
