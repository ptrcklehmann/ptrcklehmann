"use client";
import { useProfileAnchor } from "@/app/hooks/useProfileAnchor";
import styles from "./back-button.module.css";

export const BackButton = () => {
  const { isProfileOpen, toggleProfile } = useProfileAnchor();

  return (
    <button className={styles.back} onClick={toggleProfile}>
      <span>Back</span>
    </button>
  );
};
