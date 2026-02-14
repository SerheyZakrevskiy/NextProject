import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

import React from "react";
import { SessionProvider } from "next-auth/react";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: { pathname: "/" },
    },
  },
  decorators: [
    (Story) => (
      <SessionProvider session={null}>
        <div className="p-6">
          <Story />
        </div>
      </SessionProvider>
    ),
  ],
};

export default preview;
