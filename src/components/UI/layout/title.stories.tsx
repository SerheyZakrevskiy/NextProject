import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Title from "./title";

type TitleStoryProps = {
  pathname: string;
  theme: "light" | "dark";
  container: "narrow" | "wide";
};

function TitleStory(props: TitleStoryProps) {
  return (
    <div className={props.theme === "dark" ? "dark" : ""}>
      <div
        className={[
          "rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950",
          props.container === "wide" ? "max-w-[1024px]" : "max-w-[520px]",
        ].join(" ")}
      >
        <Title />
      </div>
    </div>
  );
}

const meta = {
  title: "UI/Layout/Title",
  component: TitleStory,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: { pathname: "/" },
    },
  },
  argTypes: {
    pathname: { control: "text" },
    theme: { control: "radio", options: ["light", "dark"] },
    container: { control: "radio", options: ["narrow", "wide"] },
  },
  args: {
    pathname: "/",
    theme: "light",
    container: "narrow",
  },
} satisfies Meta<typeof TitleStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: { pathname: "/", theme: "light", container: "narrow" },
  parameters: { nextjs: { navigation: { pathname: "/" } } },
};

export const Recipes: Story = {
  args: { pathname: "/recipes", theme: "light", container: "wide" },
  parameters: { nextjs: { navigation: { pathname: "/recipes" } } },
};

export const Dark: Story = {
  args: { pathname: "/ingredients", theme: "dark", container: "wide" },
  parameters: { nextjs: { navigation: { pathname: "/ingredients" } } },
};
