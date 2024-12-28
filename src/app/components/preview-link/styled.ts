// src/app/components/preview-link/styled.ts
import { motion } from "framer-motion";
import styled from "styled-components";

type PreviewContainerProps = {
  x: number;
  y: number;
};
export const LinkPreviewCard = styled(motion.span)`
  position: fixed;
  z-index: 9999;
  background-color: var(--bg-body);
  padding: 0.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  max-width: 300px;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const PreviewTitle = styled.h3`
  margin: 8px 0;
  font-size: 1.2rem;
`;

export const PreviewDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

export const PreviewLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
