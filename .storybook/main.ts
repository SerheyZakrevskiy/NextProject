import type { StorybookConfig } from "@storybook/nextjs-vite";
import { mergeConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],

  viteFinal: async (cfg) =>
    mergeConfig(cfg, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),

          "@/utils/prisma": path.resolve(__dirname, "./mocks/prisma.ts"),
          "@prisma/client": path.resolve(__dirname, "./mocks/prisma-client.ts"),
        },
      },
    }),
};

export default config;
