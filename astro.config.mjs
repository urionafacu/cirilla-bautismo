// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? 'https://cirilla-bautismo.pages.dev',
	vite: {
		plugins: [tailwindcss()],
	},
});
