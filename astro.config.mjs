import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";

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
      label: 'Task Tracking',
      items: [
        {
          label: 'Issues',
          link: '/task-tracking/issues/'
        }, {
          label: 'Todos',
          link: '/task-tracking/todos/'
        },
      ]
    }, {
      label: 'Knowledge Management',
      items: [
        {
          label: 'Documents',
          link: '/knowledge-management/documents/'
        },  {
          label: 'Drive',
          link: '/knowledge-management/drive/'
        },
      ]
    }, {
      label: 'Communication',
      items: [
        {
          label: 'Chat',
          link: '/communication/chat/'
        }, {
          label: 'Inbox',
          link: '/communication/inbox/'
        }, {
          label: 'Virtual office',
          link: '/communication/virtual-office/'
        },
      ]
    }, {
      label: 'Integrations',
      items: [
        {
          label: 'GitHub',
          link: '/integrations/github/'
        }, {
          label: 'Google Calendar',
          link: '/integrations/google-calendar/'
        },
      ]
    }
  ]
  })],
  image: {
    service: {
      config: {
        limitInputPixels: false
      }
    }
  }
});