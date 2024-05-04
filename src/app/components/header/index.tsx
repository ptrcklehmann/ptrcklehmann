import { Logo } from "../logo";
import { ThemeSwitch } from "../switch";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo width="90px" />
      <ThemeSwitch />
    </header>
  );
};
