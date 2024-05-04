import { fetchPageMarkdown } from "./lib/notion";
import styles from "./page.module.css";
import Markdown from "react-markdown";

const pageId = process.env.NOTION_PAGE_ID as string;

export default async function Home() {
  const home = await fetchPageMarkdown(pageId);

  return (
    <main className={styles.main}>
      <p className={styles.description}>
        <Markdown
          components={{
            p: ({ node, ...props }) => <span {...props} />,
          }}
        >
          {home.body}
        </Markdown>
      </p>
    </main>
  );
}
