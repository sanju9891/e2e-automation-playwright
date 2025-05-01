// eslint.config.js
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		rules: {
			semi: 'error',
			'prefer-const': 'error',
			'@typescript-eslint/no-duplicate-enum-values': 'error',
		},
		ignores: ['node_modules/*', 'playwright-report/*', '.github/**'],
	},
]);
