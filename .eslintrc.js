module.exports = {
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: { impliedStrict: true }
	},
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true
	},
	extends: ['eslint:recommended', 'plugin:vue/essential'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	plugins: ['vue'],
	// check if imports actually resolve
	settings: {
		'import/resolver': {
			webpack: {
				config: 'build/webpack.base.conf.js'
			}
		}
	},
	rules: {
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/v-on-style': 'error',
		'vue/v-bind-style': 'error',
		'vue/attributes-order': 'error',
		'vue/eqeqeq': ['error', 'always'],
		'vue/no-use-v-if-with-v-for': 'error',
		'vue/order-in-components': 'error',
		'vue/require-component-is': 'error',
		'require-atomic-updates': 'off'
	}
};
