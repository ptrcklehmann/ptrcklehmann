"use client";
import { motion } from "framer-motion";
import { A } from "../markdown/a";
import styles from "./main.module.css";
import Markdown from "react-markdown";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";

export const IntroText = ({ body }: { body: string }) => {
  const { isProfileOpen } = useProfileAnchor();
  return (
    <motion.div
      className={styles.description}
      animate={{
        width: isProfileOpen ? "50%" : "75%",
      }}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <motion.div
        className={styles.markdown}
        animate={{
          transform: isProfileOpen ? "scale(0.4, 0.4)" : "scale(1, 1)",
        }}
        transition={{ type: "spring", bounce: 0.25 }}
      >
        <Markdown
          components={{
            a: ({ node, ...props }) => <A {...props} />,
          }}
        >
          {body}
        </Markdown>
      </motion.div>
    </motion.div>
  );
};
