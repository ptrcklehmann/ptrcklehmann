import { getMarkdownData } from "@/app/lib/markdown";
import { IntroText } from "./intro-text";
import { useEffect, useState } from "react";

export default function Intro() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await getMarkdownData("intro");
        setMarkdown(response.contentHtml);
      } catch (error) {
        console.error("Failed to fetch markdown:", error);
      }
    };

    fetchMarkdown();
  }, []);

  return <IntroText body={markdown} />;
}
