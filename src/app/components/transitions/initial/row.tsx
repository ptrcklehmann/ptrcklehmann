"use client";
import { ReactNode } from "react";

import { RowContainer } from "./styled";

const variants = {
  open: (index: number) => ({
    opacity: 1,
    transform: "translateY(0)",
    transition: { ease: "easeInOut", duration: 0.35, delay: index * 0.2 },
  }),
  closed: {
    opacity: 0,
    transform: "translateY(calc(-100vh / 5))",
  },
};

export const Row = ({
  children,
  index,
}: {
  children?: ReactNode;
  index: number;
}) => {
  return (
    <RowContainer
      variants={variants}
      custom={index}
      initial="closed"
      animate="open"
    >
      {children}
    </RowContainer>
  );
};
