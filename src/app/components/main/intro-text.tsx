"use client";
import { A } from "../markdown/a";
import { Description, MarkdownContainer } from "./styled";
import Markdown from "react-markdown";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";

export const IntroText = ({ body }: { body: string }) => {
  const { isProfileOpen } = useProfileAnchor();
  return (
    <Description
      animate={{
        width: isProfileOpen ? "50%" : "75%",
      }}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <MarkdownContainer
        animate={{
          transform: isProfileOpen ? "scale(0.4, 0.4)" : "scale(1, 1)",
        }}
        transition={{ type: "spring", bounce: 0.25 }}
      >
        <Markdown
          components={{
            a: ({ node, ...props }) => <A {...props} />,
          }}
        >
          {body}
        </Markdown>
      </MarkdownContainer>
    </Description>
  );
};
