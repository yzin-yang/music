import find from './modules/find';
import home from './modules/home';
import login from './modules/login';
// eslint-disable-next-line no-undef
const debug = process.env.NODE_ENV !== 'production';

export default {
	modules: { find, home, login },
	strict: debug
	// plugins: debug ? [createLogger()] : []
};
