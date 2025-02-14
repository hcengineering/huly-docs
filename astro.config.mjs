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
                label: "Support",
                link: "/getting-started/support/",
              },
            ],
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
          {
            label: "TraceX eQMS modules",
            collapsed: true,
            items: [
              {
                label: "Roles and permissions",
                link: "/eqms/roles/",
              },
              {
                label: "Products",
                link: "/eqms/products/",
              },
              {
                label: "Trainings",
                link: "/eqms/trainings/",
              },
              {
                label: "Controlled doc: types",
                items: [
                  {
                    label: "Templates",
                    link: "/eqms/templates/",
                  },
                  {
                    label: "Quality documents",
                    link: "/eqms/quality-documents/",
                  },
                  {
                    label: "Technical documentation",
                    link: "/eqms/technical-documentation/",
                  },
                ],
              },
              {
                label: "Controlled doc: authoring",
                items: [
                  {
                    label: "Editing and formatting",
                    link: "/eqms/editing-formatting/",
                  },
                  {
                    label: "Additional document settings",
                    link: "/eqms/document-settings/",
                  },
                  {
                    label: "Versions & obsolete documents",
                    link: "/eqms/document-versions/",
                  },
                  {
                    label: "Ownership vs. authorship",
                    link: "/eqms/ownership-authorship/",
                  },
                ],
              },
              {
                label: "Controlled doc: review & approval",
                link: "/eqms/review-approval/",
              },
              {
                label: "Filtering documents",
                link: "/eqms/document-filtering/",
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
