import styles from "./page.module.css";
import { MainContainer } from "./components/main/container";

export default function Home() {
  return (
    <div className={styles.container}>
      <MainContainer />
    </div>
  );
}
