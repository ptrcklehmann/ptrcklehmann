"use client";
import { HoverPreviewLink } from "../preview-link";
import { Intro, MarkdownContainer } from "./styled";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";

export const IntroText = () => {
  const { isProfileOpen } = useProfileAnchor();
  return (
    <Intro
      animate={{
        width: isProfileOpen ? "50%" : "75%",
      }}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <p>
        Hello, I&apos;m <a href="/profile">Patrick Lehmann</a>,
      </p>
      <p>
        a{" "}
        <HoverPreviewLink
          href="https://github.com/ptrcklehmann"
          target="_blank"
          title="patrick lehmann's github"
          label="Front-end Developer"
        />{" "}
        and your designer&apos;s favourite programmer.
      </p>
      <p>Born and raised in Brazil, but now calling Berlin, Germany my home.</p>
      <p>
        I am passionate about the ever-evolving tech landscape, with particular
        interests in UX design, AI, and developing impactful products.
        Currently, I&apos;m working on innovative features at{" "}
        <HoverPreviewLink
          href="https://code-b.com/"
          target="_blank"
          title="code-b agile websolutions"
          label="code-b"
        />
        .
      </p>
    </Intro>
  );
};
