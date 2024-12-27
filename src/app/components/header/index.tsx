"use client";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";
import { BackButton } from "../back-button";
import { Logo } from "../logo";
import { ThemeSwitch } from "../switch";
import styles from "./header.module.css";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const { isProfileOpen, toggleProfile } = useProfileAnchor();
  return (
    <header className={styles.header}>
      <AnimatePresence>
        <motion.div
          key={isProfileOpen ? "profile" : "logo"}
          className={styles.logoContainer}
          animate={{
            transform: isProfileOpen ? "translateX(0)" : "translateX(-9rem)",
            columnGap: isProfileOpen ? "0.5rem" : "3.5rem",
          }}
        >
          <BackButton />
          <Logo />
        </motion.div>
        <ThemeSwitch />
      </AnimatePresence>
    </header>
  );
};
