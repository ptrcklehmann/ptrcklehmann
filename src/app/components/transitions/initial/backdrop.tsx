"use client";
import { motion } from "framer-motion";

import { reviewDuration } from ".";
import styles from "./initial.module.css";

export const Backdrop = () => {
  return (
    <motion.div
      initial={{ height: "100%" }}
      exit={{ height: 0 }}
      animate={{ height: "100%" }}
      transition={{ ease: "easeInOut", duration: reviewDuration }}
      className={styles.backdrop}
    />
  );
};
