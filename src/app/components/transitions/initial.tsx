"use client";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import styles from "./transitions.module.css";
import { ReactNode, useEffect, useRef, useState } from "react";

const variants = {
  open: (index: number) => ({
    opacity: 1,
    transform: "translateY(0)",
    transition: { ease: "linear", duration: 0.3, delay: index * 0.15 },
  }),
  closed: {
    opacity: 0,
    transform: "translateY(-35px)",
  },
};

const Row = ({ children, index }: { children?: ReactNode; index: number }) => {
  return (
    <motion.div
      custom={index}
      initial="closed"
      animate="open"
      variants={variants}
      className={styles.row}
    >
      {children}
    </motion.div>
  );
};

const rows = [1, 2, 3, 4, 5];

export const InitialTransition = () => {
  const [isFinishedLoading, setIsFinishedLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinishedLoading(true);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isFinishedLoading && (
        <>
          <motion.div
            variants={variants}
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
            className={styles.initial}
          >
            {rows.map((row, index) => (
              <Row key={row} index={index}>
                {row === 3 ? (
                  <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, transform: "translateY(-35px)" }}
                    exit={{ opacity: 0, transform: "translateY(-35px)" }}
                    animate={{ opacity: 1, transform: "translateY(0)" }}
                    transition={{ ease: "linear", duration: 0.2, delay: 0.3 }}
                  >
                    Patrick Lehmann
                  </motion.h1>
                ) : null}
              </Row>
            ))}
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
