import Nav from "./Components/Nav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        Hello World
        <Nav/>
      </div>
    </div>
  );
}
