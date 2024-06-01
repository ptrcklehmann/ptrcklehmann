"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";

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
