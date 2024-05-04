import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchPageMarkdown = async (pageId: string) => {
  const notion2markdown = new NotionToMarkdown({ notionClient: notion });
  const markdownBlocks = await notion2markdown.pageToMarkdown(pageId);
  const { parent: markdownBody } =
    notion2markdown.toMarkdownString(markdownBlocks);

  return {
    statusCode: 200,
    body: markdownBody,
  };
};
