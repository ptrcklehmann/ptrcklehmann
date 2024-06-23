"use client";
import styles from "./back-button.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";

export const BackButton = () => {
  const { isProfileOpen, toggleProfile } = useProfileAnchor();

  return (
    <button className={styles.back} onClick={toggleProfile}>
      <span>Back</span>
    </button>
  );
};
