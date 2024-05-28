"use client";
import { ReactNode } from "react";
import { Variants, motion } from "framer-motion";
import styles from "./initial.module.css";

const variants = {
  open: (index: number) => ({
    opacity: 1,
    transform: "translateY(0)",
    transition: { ease: "linear", duration: 0.3, delay: index * 0.2 },
  }),
  closed: {
    opacity: 0,
    transform: "translateY(-calc(100vh / 5))",
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
    <motion.div
      variants={variants}
      custom={index}
      initial="closed"
      animate="open"
      className={styles.row}
    >
      {children}
    </motion.div>
  );
};
