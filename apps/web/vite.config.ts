import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		// this setting is necessary for vite to resolve the symlinks to packages in the monorepo
		preserveSymlinks: true
	},
	optimizeDeps: {
		// prevent vite from trying to pre-bundle the shared package, because otherwise it will keep using a cached version. NOTE: the shared bundle will still be cached in the browser, so if it is changed, the dev server must be restarted and the browser cache disabled in dev tools.
		exclude: ['shared']
	}
});
