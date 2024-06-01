"use client";
import { useTheme } from "next-themes";
import styles from "./back-button.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";

export const BackButton = () => {
  const { isProfileOpen, toggleProfile } = useProfileAnchor();

  return (
    <AnimatePresence>
      {isProfileOpen && (
        <motion.button
          className={styles.back}
          initial={{ transform: "translateX(-9rem)" }}
          animate={{ transform: "translateX(0)" }}
          onClick={toggleProfile}
        >
          <span>Back</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
