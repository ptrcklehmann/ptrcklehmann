import { BackButton } from "../back-button";
import { Logo } from "../logo";
import { ThemeSwitch } from "../switch";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <BackButton />
        <Logo />
      </div>
      <ThemeSwitch />
    </header>
  );
};
