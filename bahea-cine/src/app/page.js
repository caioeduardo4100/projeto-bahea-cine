import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="Menu">
        <a>Cartaz de Lançamentos</a>
        <a>Lançamentos</a>
      </div>
      
    </main>
  );
}