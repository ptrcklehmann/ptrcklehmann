"use client";

import { AnimatePresence, motion } from "framer-motion";
import styles from "./transitions.module.css";
import { useEffect, useState } from "react";

export const InitialTransition = () => {
  const [isFinishedLoading, setIsFinishedLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinishedLoading(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isFinishedLoading && (
        <>
          <motion.div
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
            className={styles.initial}
          >
            <motion.h1
              className={styles.pageTitle}
              initial={{ opacity: 0, transform: "translateY(-35px)" }}
              exit={{ opacity: 0, transform: "translateY(35px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ ease: "linear", duration: 0.2, delay: 0.3 }}
            >
              Patrick Lehmann
            </motion.h1>
          </motion.div>
          <motion.div
            initial={{ height: "100%" }}
            exit={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className={styles.backdrop}
          />
        </>
      )}
    </AnimatePresence>
  );
};
