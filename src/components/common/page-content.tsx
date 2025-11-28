"use client";

import { siteConfig } from "@/config/site.config";
import DOMPurify from "isomorphic-dompurify";
import { usePathname } from "next/navigation";
import parse from "html-react-parser";

const PageContent = () => {
  const pathname = usePathname();
  const PageContent =
    siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];

  if (!PageContent) {
    return <div>PAGE NOT FOUND</div>;
  }

  const cleanHTML = DOMPurify.sanitize(PageContent.content);

  return <div>{parse(cleanHTML)}</div>;
};

export default PageContent;
