import type { ChatKitOptions } from "@openai/chatkit";

/**
 * This is the correct, advanced configuration that combines your Playground
 * styles with the necessary API logic from your Vercel project.
 */
const options: ChatKitOptions = {
  api: {
    /**
     * This 'createSession' function is the most critical part.
     * It tells the chatbot how to get permission to talk to your Assistant.
     * It reads the WORKFLOW_ID (your Assistant ID) from your Vercel
     * Environment Variables.
     */
    createSession: async () => {
      const response = await fetch('/api/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workflow_id: process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID ?? '',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create session');
      }

      return response.json();
    },
  },
  theme: {
    // All of your beautiful styling from playground.txt:
    colorScheme: 'light',
    radius: 'pill',
    density: 'normal',
    color: {
      accent: {
        primary: '#4f0e77', // DSHS Purple
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
        // ... (and any other font sources you had)
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
    prompts: [], // You can add starter prompts here
  },
};

// This final line makes the config available to the rest of your app.
export default options;
