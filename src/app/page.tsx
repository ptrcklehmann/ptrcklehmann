import { fetchPageMarkdown } from "./lib/notion";
import styles from "./page.module.css";
import Markdown from "react-markdown";
import React, { useMemo } from "react";
import { A } from "./components/markdown/a";
import { Profile } from "./components/profile";

const pageId = process.env.NOTION_PAGE_ID as string;

export default async function Home() {
  const home = await useMemo(() => {
    return fetchPageMarkdown(pageId);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <Markdown
          components={{
            a: ({ node, ...props }) => <A {...props} />,
          }}
        >
          {home.body}
        </Markdown>
      </div>
      <Profile />
    </div>
  );
}
