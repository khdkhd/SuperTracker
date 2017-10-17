module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
		node: true
	},
	extends: 'standard',
	globals: {
		__static: true
	},
	plugins: ['html', 'import'],
	'rules': {
		'arrow-parens': 0, // allow paren-less arrow functions
		'comma-dangle': ['warn', 'always-multiline'],
		'generator-star-spacing': 0, // allow async-await
		'global-require': 0,
		'import/newline-after-import': 0,
		'import/no-unresolved': 0,
		'import/prefer-default-export': 0,
		'indent': ['error', 'tab'],
		'no-multi-assign': 0,
		'no-shadow': 0,
		'no-tabs': 0,
		'space-before-function-paren': 0,
		'space-infix-ops': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production'
			? 2
			: 0
	}
}
