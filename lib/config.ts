import type { ChatKitOptions } from "@openai/chatkit";

const options: ChatKitOptions = {
  api: {
    // TODO: configure your ChatKit API integration (URL, auth, uploads).
  },
  theme: {
    colorScheme: 'light',
    radius: 'pill',
    density: 'normal',
    color: {
      accent: {
        primary: '#4f0e77',
        level: 1
      },
      surface: {
        background: '#ffffff',
        foreground: '#ffffff'
      }
    },
    typography: {
      baseSize: 16,
      fontFamily: 'Lora, serif',
      fontSources: [
        {
          family: 'Lora',
          src: 'https://fonts.gstatic.com/s/lora/v37/0QIvMX1D_JOuMwr7I_FMl_E.woff2',
          weight: 400,
          style: 'normal',
          display: 'swap'
        }
      // ...and 7 more font sources
      ]
    }
  },
  composer: {
    placeholder: 'Ask Butch a question...',
    attachments: {
      enabled: false
    },
  },
  startScreen: {
    greeting: '🐝 Hello! I\'m Butch , your AI-powered assistant. How can I help you today?',
    prompts: [],
  },
  // Optional fields not shown: locale, initialThread, threadItemActions, header, onClientTool, entities, widgets
};
