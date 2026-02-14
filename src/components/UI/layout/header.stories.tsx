import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SessionProvider } from "next-auth/react";
import Header from "./header";

type HeaderStoryProps = {
  pathname: string;
  theme: "light" | "dark";
  authenticated: boolean;
};

function HeaderStory(props: HeaderStoryProps) {
  const session = props.authenticated
    ? ({
        user: { name: "Demo User", email: "demo@example.com" },
        expires: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      } as any)
    : null;

  return (
    <div className={props.theme === "dark" ? "dark" : ""}>
      <SessionProvider session={session}>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
          <Header />
        </div>
      </SessionProvider>
    </div>
  );
}

const meta = {
  title: "UI/Layout/Header",
  component: HeaderStory,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: { pathname: "/" },
    },
  },
  argTypes: {
    pathname: { control: "text" },
    theme: { control: "radio", options: ["light", "dark"] },
    authenticated: { control: "boolean" },
  },
  args: {
    pathname: "/",
    theme: "light",
    authenticated: false,
  },
} satisfies Meta<typeof HeaderStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Guest: Story = {
  args: { pathname: "/", authenticated: false, theme: "light" },
  parameters: { nextjs: { navigation: { pathname: "/" } } },
};

export const Authenticated: Story = {
  args: { pathname: "/recipes", authenticated: true, theme: "light" },
  parameters: { nextjs: { navigation: { pathname: "/recipes" } } },
};

export const DarkMode: Story = {
  args: { pathname: "/ingredients", authenticated: true, theme: "dark" },
  parameters: { nextjs: { navigation: { pathname: "/ingredients" } } },
};
