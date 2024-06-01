import styles from "./main.module.css";
import Intro from "./intro";
import { Profile } from "../profile";

export const MainContainer = () => {
  return (
    <div className={styles.container}>
      <Intro />
      <Profile />
    </div>
  );
};
