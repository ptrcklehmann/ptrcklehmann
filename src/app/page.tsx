import { cookies } from "next/headers";
import { fetchPageMarkdown } from "./lib/notion";
import styles from "./page.module.css";
import Markdown from "react-markdown";
import React, { useMemo } from "react";

const pageId = process.env.NOTION_PAGE_ID as string;

export default async function Home() {
  const home = await useMemo(() => {
    return fetchPageMarkdown(pageId);
  }, []);

  return (
    <div className={styles.description}>
      <Markdown
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
        }}
      >
        {home.body}
      </Markdown>
    </div>
  );
}
