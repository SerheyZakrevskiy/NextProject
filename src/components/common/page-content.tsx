"use client";

import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";

const PageContent = () => {
  const pathname = usePathname();
  const PageContent =
    siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];

  if (!PageContent) {
    return <div>PAGE NOT FOUND</div>;
  }

  return <p>{PageContent.content}</p>;
};

export default PageContent;
