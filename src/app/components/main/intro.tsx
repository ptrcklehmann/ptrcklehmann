import { fetchPageMarkdown } from "@/app/lib/notion";
import { useMemo } from "react";
import { IntroText } from "./intro-text";

const pageId = process.env.NOTION_PAGE_ID as string;

export default async function Intro() {
  const home = await useMemo(() => {
    return fetchPageMarkdown(pageId);
  }, []);

  console.log("home", home);

  return <IntroText body={home.body} />;
}
