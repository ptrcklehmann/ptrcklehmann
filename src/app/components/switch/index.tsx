"use client";
import { useTheme } from "next-themes";
import styles from "./switch.module.css";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleOnClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className={styles.switch} onClick={handleOnClick}>
      <span>Switch</span>
    </button>
  );
};
