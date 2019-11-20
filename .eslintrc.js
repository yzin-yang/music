module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ["eslint:recommended", "plugin:vue/essential"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 2019,
		sourceType: "module",
		ecmaFeatures: { impliedStrict: true }
	},
	plugins: ["vue"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "single"],
		semi: ["error", "always"],
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
	}
};
