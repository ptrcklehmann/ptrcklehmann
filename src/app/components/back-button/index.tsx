"use client";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";
import { StyledButton, StyledSpan } from "./styled";

export const BackButton = () => {
  const { toggleProfile } = useProfileAnchor();

  return (
    <StyledButton onClick={toggleProfile}>
      <StyledSpan>Back</StyledSpan>
    </StyledButton>
  );
};