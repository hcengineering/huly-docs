import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/getting-started/introduction/' },
						{ label: 'Workspace Setup', link: '/getting-started/workspace-setup/' },
						{ label: 'Creating Teams', link: '/getting-started/create-team/' },
						{ label: 'Creating Projects', link: '/getting-started/create-project/' },
						{ label: 'Support', link: '/getting-started/support/' },
					],
				},
				{
					label: 'Team Workflows',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Issues', link: '/team-workflows/issues/' },
						{ label: 'Todos', link: '/team-workflows/todos/' },
						{ label: 'Chat', link: '/team-workflows/chat/' },
						{ label: 'Virtual Office', link: '/team-workflows/virtual-office/' },
						{ label: 'Inbox', link: '/team-workflows/inbox/' },
						{ label: 'Documents', link: '/team-workflows/documents/' },
					],
				},
				{
					label: 'Integrations',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Google-Calendar', link: '/team-workflows/google-calendar/' },
						{ label: 'Gmail', link: '/team-workflows/gmail/' },
						{ label: 'GitHub', link: '/team-workflows/github/' },
					],
				},
			],
		}),
	],
});
