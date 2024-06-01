"use client";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";
import { useCallback, useMemo } from "react";

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  node?: Element;
}

export const A = ({ node, ...props }: AnchorProps) => {
  const { toggleProfile } = useProfileAnchor();

  const letters = useMemo(
    () => props.children?.toString().split(""),
    [props.children]
  );

  const handleProfileClick = useCallback<
    React.MouseEventHandler<HTMLAnchorElement>
  >(
    (event) => {
      event.preventDefault();
      toggleProfile();
    },
    [toggleProfile]
  );

  const renderLetters = (letters: string[]) =>
    letters.map((letter, index) => <span key={index}>{letter}</span>);

  if (props.href === "/profile") {
    return (
      <a {...props} onClick={handleProfileClick}>
        {letters && renderLetters(letters)}
      </a>
    );
  }

  const target = props.target || "_blank";
  const rel = props.rel || "noopener noreferrer";

  return <a {...props} target={target} rel={rel} />;
};
