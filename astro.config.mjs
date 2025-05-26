import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    [
      starlight({
        customCss: ["./src/styles.css"],
        title: "Huly Docs",
        favicon: "/favicon.ico",
        components: {
          // override default 'SocialIcons' component
          SocialIcons: "./src/components/CustomSocialIcons.astro",
        },
        sidebar: [
          {
            label: "Getting started",
            items: [
              {
                label: "What is Huly?",
                link: "/getting-started/introduction-huly/",
              },
              {
                label: "What is TraceX?",
                link: "/getting-started/introduction-tracex/",
              },
              {
                label: "Workspace setup",
                link: "/getting-started/workspace-setup/",
              },
              {
                label: "Learn the basics",
                link: "/getting-started/learn-the-basics/",
              },
              {
                label: "API & other tools",
                link: "/getting-started/api-tools/",
              },
              {
                label: "Self-hosting",
                link: "/getting-started/self-host/",
              },
              {
                label: "Mobile access",
                link: "/getting-started/mobile-access/",
              },
              {
                label: "Support",
                link: "/getting-started/support/",
              },
            ],
          },
          {
            label: "Cards",
            collapsed: true,
            items: [
              {label: "Introduction to Cards", link: "/cards/cards-overview/"},
              {label: 'Creating Cards', link: '/cards/creating-cards/'},
              {label: 'Parent-child Cards', link: '/cards/parent-child-cards/'},     
              {label: 'View, sort and filter Cards', link: '/cards/view-sort-filter-cards/'},
              {label: 'Cards vs. Documents', link: '/cards/cards-vs-documents/'},     
              {label: 'Use cases', link: '/cards/use-cases/'},     
              {
                label: "Types",
                collapsed: false,
                items: [
                  {label: 'What are Types?', link: '/cards/types/types-overview/'},
                  {label: 'Creating Types', link: '/cards/types/creating-types/'},
                  {label: 'File Types', link: '/cards/types/file-types/'},                ]
              },
              {
                label: "Tags",
                collapsed: false,
                items: [
                  {label: 'What are Tags?', link: '/cards/tags/tags-overview/'},
                  {label: 'Creating Tags', link: '/cards/tags/creating-tags/'},
                  {label: 'Applying Tags to Cards', link: '/cards/tags/applying-tags/'},
                ]
              },
              {
                label: "Relations",
                collapsed: false,
                items: [
                  {label: 'What are Relations?', link: '/cards/relations/relations-overview/'},
                  {label: 'Defining Relations', link: '/cards/relations/defining-relations/'},
                  {label: 'Relating Cards', link: '/cards/relations/relating-cards/'},
                  {label: 'Relations vs. References', link: '/cards/relations/relations-vs-references/'},
                ]
              },
              
              ]
            },
          {
            label: "Task tracking",
            collapsed: true,
            items: [
              {
                label: "Creating projects",
                link: "/task-tracking/creating-projects/",
              },
              {
                label: "Creating issues",
                link: "/task-tracking/creating-issues/",
              },
              {
                label: "Components",
                link: "/task-tracking/components/",
              },
              {
                label: "Milestones",
                link: "/task-tracking/milestones/",
              },
              {
                label: "Issue collaborators",
                link: "/task-tracking/issue-collaborators/",
              },
              {
                label: "Labels",
                link: "/task-tracking/labels/",
              },
              {
                label: "Viewing and sorting issues",
                link: "/task-tracking/viewing-issues/",
              },
              {
                label: "Related issues",
                link: "/task-tracking/related-issues/",
              },
              {
                label: "Issue templates",
                link: "/task-tracking/issue-templates/",
              },
              {
                label: "Creating action items",
                link: "/task-tracking/creating-action-items/",
              },
              {
                label: "Scheduling action items",
                link: "/task-tracking/scheduling-action-items/",
              },
            ],
          },
          {
            label: "Team resources",
            collapsed: true,
            items: [
              {
                label: "Team planner",
                link: "/team-resources/team-planner/",
              },
              {
                label: "Human resources",
                link: "/team-resources/human-resources/",
              },
            ],
          },
          {
            label: "Knowledge management",
            collapsed: true,
            items: [
              {
                label: "Documents",
                link: "/knowledge-management/documents/",
              },
              {
                label: "Collaborative editing",
                link: "/knowledge-management/collaborative-editing/",
              },
              {
                label: "Action items in documents",
                link: "/knowledge-management/documents-action-items/",
              },
              {
                label: "Drawing board and scribbles",
                link: "/knowledge-management/drawing-board/",
              },
              {
                label: "Mermaid diagrams",
                link: "/knowledge-management/mermaid-diagrams/",
              },
              {
                label: "Drive",
                link: "/knowledge-management/drive/",
              },
            ],
          },
          {
            label: "Controlled documents",
            collapsed: true,
            items: [
              {
                label: "Types",
                items: [
                  {
                    label: "Templates",
                    link: "/controlled-documents/templates/",
                  },
                  {
                    label: "Quality documents",
                    link: "/controlled-documents/quality-documents/",
                  },
                  {
                    label: "Technical documentation",
                    link: "/controlled-documents/technical-documentation/",
                  },
                ],
              },
              {
                label: "Authoring",
                items: [
                  {
                    label: "Editing and formatting",
                    link: "/controlled-documents/editing-formatting/",
                  },
                  {
                    label: "Additional document settings",
                    link: "/controlled-documents/document-settings/",
                  },
                  {
                    label: "Versions and obsolete documents",
                    link: "/controlled-documents/document-versions/",
                  },
                  {
                    label: "Ownership vs. authorship",
                    link: "/controlled-documents/ownership-authorship/",
                  },
                ],
              },
              {
                label: "Review and approval",
                link: "/controlled-documents/review-approval/",
              },
              {
                label: "Filtering documents",
                link: "/controlled-documents/document-filtering/",
              },
              {
                label: "Products",
                link: "/controlled-documents/products/",
              },
            ],
          },
          {
            label: "Communication",
            collapsed: true,
            items: [
              {
                label: "Activity tracking in chat",
                link: "/communication/chat-activity/",
              },
              {
                label: "Sending messages",
                link: "/communication/sending-messages/",
              },
              {
                label: "Inline comments",
                link: "/communication/inline-comments/",
              },
              {
                label: "Inbox",
                link: "/communication/inbox/",
              },
              {
                label: "Notifications",
                link: "/communication/notifications/",
              },
              {
                label: "Virtual office",
                link: "/communication/virtual-office/",
              },
              {
                label: "Live transcription",
                link: "/communication/live-transcription/",
              },
              {
                label: "Meeting scheduler",
                link: "/communication/meeting-scheduler/",
              },
              {
                label: "Screen recording",
                link: "/communication/screen-recording/",
              },
            ],
          },
          {
            label: "People and contacts",
            collapsed: true,
            items: [
              {
                label: "Managing contacts",
                link: "/people-contacts/managing-contacts/",
              },
              {
                label: "Employees",
                link: "/people-contacts/employees/",
              },
              {
                label: "Connecting tasks",
                link: "/people-contacts/connecting-tasks/",
              },
            ],
          },
          {
            label: "Integrations",
            collapsed: true,
            items: [
              {
                label: "GitHub",
                link: "/integrations/github/",
              },
              {
                label: "Google Calendar",
                link: "/integrations/google-calendar/",
              },
              {
                label: "Gmail",
                link: "/integrations/gmail/",
              },
              {
                label: "Telegram",
                link: "/integrations/telegram/",
              },
            ],
          },
          {
            label: "Additional modules",
            collapsed: true,
            items: [
              {
                label: "Test management",
                link: "/additional-modules/test-management/",
              },
              {
                label: "Recruiting",
                link: "/additional-modules/recruiting/",
              },
              {
                label: "Leads",
                link: "/additional-modules/leads/",
              },
              {
                label: "Surveys",
                link: "/additional-modules/surveys/",
              },
              {
                label: "Trainings",
                link: "/additional-modules/trainings/",
              },
            ],
          },
          {
            label: "Advanced settings",
            collapsed: true,
            items: [
              {
                label: "Space types",
                link: "/advanced-settings/space-types/",
              },
              {
                label: "Roles and permissions",
                link: "/advanced-settings/roles/",
              },
              {
                label: "Task types",
                link: "/advanced-settings/task-types/",
              },
              {
                label: "Classes and enums",
                link: "/advanced-settings/classes-enums/",
              },
              {
                label: "Text templates",
                link: "/advanced-settings/text-templates/",
              },
            ],
          },
        ],
      }),
    ],
    [icon()],
  ],
  image: {
    service: {
      config: {
        limitInputPixels: false,
      },
    },
  },
});
