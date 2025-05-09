// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Chaos Gobbos',
			logo: {
				src: './src/assets/text2.svg',
				replacesTitle: true,
			},
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
				{
					label: "Chaos",
					autogenerate: { directory: 'chaos'},
				},
				{
					label: "Session Summaries",
					autogenerate: { directory:'session-sums'},
				},
			],
		}),
	],
});
