import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    customCss: ['./src/styles.css'],
    title: 'Huly Docs',
    social: {
      github: 'https://github.com/hcengineering/platform'
    },
    favicon: '/favicon.ico',
    sidebar: [{
      label: 'Getting Started',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'What is Huly?',
        link: '/getting-started/introduction/'
      }, {
        label: 'Workspace setup',
        link: '/getting-started/workspace-setup/'
      }, {
        label: 'Create a Project',
        link: '/getting-started/create-project/'
      }, {
        label: 'Create an Issue',
        link: '/getting-started/create-issue/'
      }, 
    ]
    }, {
      label: 'Team Workflows',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Issues',
        link: '/team-workflows/issues/'
      }, {
        label: 'Todos',
        link: '/team-workflows/todos/'
      }, {
        label: 'Chat',
        link: '/team-workflows/chat/'
      }, {
        label: 'Inbox',
        link: '/team-workflows/inbox/'
      }, {
        label: 'Documents',
        link: '/team-workflows/documents/'
      }, {
        label: 'Virtual office',
        link: '/team-workflows/virtual-office/'
      },
    ]
    }, {
      label: 'Integrations',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Google Calendar',
        link: '/team-workflows/google-calendar/'
      }, {
        label: 'Gmail',
        link: '/team-workflows/gmail/'
      }, {
        label: 'GitHub',
        link: '/team-workflows/github/'
      }]
    }]
  })],
  image: {
    service: {
      config: {
        limitInputPixels: false
      }
    }
  }
});