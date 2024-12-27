"use client";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./profile.module.css";

export const Profile = () => {
  const { isProfileOpen } = useProfileAnchor();

  return (
    <AnimatePresence>
      {isProfileOpen && (
        <motion.div
          className={styles.container}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
        >
          <h1>Profile</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
