// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Campaign Docs',
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				
				{
					label:"Intro Docs",
					autogenerate: { directory: 'intro-docs'},
				},
				{
					label: 'Shadowdark',
					autogenerate: {directory: 'shadowdark'},
				},
				{
					label: "Magic Items",
					autogenerate: { directory: 'magic-items'},
				},
			],
		}),
	],
});
