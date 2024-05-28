"use client";
import styles from "./initial.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Backdrop } from "./backdrop";
import { Row } from "./row";

const rows = [1, 2, 3, 4, 5];
export const reviewDuration = 1;

export const InitialTransition = () => {
  const [hasFinishedAnimating, setHasFinishedAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasFinishedAnimating(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!hasFinishedAnimating && (
        <>
          <motion.div
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{
              ease: "easeInOut",
              duration: reviewDuration,
            }}
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
                    transition={{ ease: "linear", duration: 0.2 }}
                  >
                    Patrick Lehmann
                  </motion.h1>
                ) : null}
              </Row>
            ))}
          </motion.div>
          <Backdrop />
        </>
      )}
    </AnimatePresence>
  );
};
