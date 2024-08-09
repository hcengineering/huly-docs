import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [starlight({
    customCss: ['./src/styles.css'],
    title: 'Huly Docs',
    favicon: '/favicon.ico',
    components: {
      // override default 'SocialIcons' component
      SocialIcons: './src/components/CustomSocialIcons.astro'
    },
    sidebar: [{
      label: 'Getting started',
      items: [
        {
          label: 'What is Huly?',
          link: '/getting-started/introduction/'
        }, {
          label: 'Workspace setup',
          link: '/getting-started/workspace-setup/'
        }, {
          label: 'Support',
          link: '/getting-started/support/'
        }
      ]
    }, {
      label: 'Task tracking',
      items: [
        {
          label: 'Creating projects',
          link: '/task-tracking/creating-projects/'
        }, {
          label: 'Creating issues',
          link: '/task-tracking/creating-issues/'
        }, {
          label: 'Viewing and sorting issues',
          link: '/task-tracking/viewing-issues/'
        }, {
          label: 'Related issues',
          link: '/task-tracking/related-issues/'
        }, {
          label: 'Creating action items',
          link: '/task-tracking/creating-action-items/'
        }, {
          label: 'Scheduling action items',
          link: '/task-tracking/scheduling-action-items/'
        },
      ]
    }, {
      label: 'Knowledge management',
      items: [
        {
          label: 'Documents',
          link: '/knowledge-management/documents/'
        },  {
          label: 'Collaborative editing',
          link: '/knowledge-management/collaborative-editing/'
        },  {
          label: 'Action items in documents',
          link: '/knowledge-management/documents-action-items/'
        },  {
          label: 'Drive',
          link: '/knowledge-management/drive/'
        },
      ]
    }, {
      label: 'Team communication',
      items: [
        {
          label: 'Activity tracking in chat',
          link: '/communication/chat-activity/'
        }, {
          label: 'Sending messages',
          link: '/communication/sending-messages/'
        }, {
          label: 'Inbox',
          link: '/communication/inbox/'
        }, {
          label: 'Notifications',
          link: '/communication/notifications/'
        }, {
          label: 'Virtual office',
          link: '/communication/virtual-office/'
        },
      ]
    }, {
      label: 'People and contacts',
      items: [
        {
          label: 'Managing contacts',
          link: '/people-contacts/managing-contacts/'
        }, {
          label: 'Employees',
          link: '/people-contacts/employees/'
        }, {
          label: 'Connecting tasks',
          link: '/people-contacts/connecting-tasks/'
        }
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
    }, 
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