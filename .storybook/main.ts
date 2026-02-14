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
      optimizeDeps: {
        exclude: [
          "@prisma/client",
          "@prisma/client/runtime/client",
          "@prisma/client/runtime/library",
          ".prisma/client",
        ],
      },
      resolve: {
        alias: [
          {
            find: /^next-auth\/react$/,
            replacement: path.resolve(__dirname, "./mocks/next-auth-react.tsx"),
          },

          {
            find: /^@prisma\/client$/,
            replacement: path.resolve(__dirname, "./mocks/prisma-client.ts"),
          },
          {
            find: /^@prisma\/client\/runtime\/.*$/,
            replacement: path.resolve(__dirname, "./mocks/prisma-runtime.ts"),
          },
          {
            find: /^\.prisma\/client(\/.*)?$/,
            replacement: path.resolve(__dirname, "./mocks/prisma-runtime.ts"),
          },

          {
            find: /^@\/utils\/prisma$/,
            replacement: path.resolve(__dirname, "./mocks/prisma.ts"),
          },

          {
            find: /^@\/generated\/prisma(\/.*)?$/,
            replacement: path.resolve(__dirname, "./mocks/prisma-client.ts"),
          },
          {
            find: /^\/src\/generated\/prisma(\/.*)?$/,
            replacement: path.resolve(__dirname, "./mocks/prisma-client.ts"),
          },

          {
            find: /^@\//,
            replacement: path.resolve(__dirname, "../src/") + "/",
          },
        ],
      },
    }),
};

export default config;
