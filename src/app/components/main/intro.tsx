import styles from "./main.module.css";
import { useMemo } from "react";
import Markdown from "react-markdown";
import { fetchPageMarkdown } from "@/app/lib/notion";
import { A } from "../markdown/a";
import { IntroText } from "./intro-text";

const pageId = process.env.NOTION_PAGE_ID as string;

export default async function Intro() {
  const home = await useMemo(() => {
    return fetchPageMarkdown(pageId);
  }, []);

  return <IntroText body={home.body} />;
}
