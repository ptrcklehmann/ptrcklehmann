"use client";
import { Description, MarkdownContainer } from "./styled";
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
        dangerouslySetInnerHTML={{ __html: body }}
      ></MarkdownContainer>
    </Description>
  );
};
