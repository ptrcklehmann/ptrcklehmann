import { remark } from "remark";
import html from "remark-html";
import markdownIntro from "@/app/db/intro.md";

export async function getMarkdownData(id: string) {
  const markdownContent = markdownIntro;
  // Convert Markdown to HTML
  const processedContent = await remark().use(html).process(markdownContent);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
  };
}
