// ESLint: JavaScript, TypeScript and Astro files.
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  { ignores: ['dist/', '.astro/', 'node_modules/', 'site/', 'Github/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  // Config and build scripts run in Node
  { files: ['*.mjs', '*.js', 'scripts/**'], languageOptions: { globals: { process: 'readonly', console: 'readonly' } } },
];
