import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Next</h1>
      <p><Link href={'/menu'}>Menu Principal</Link></p>
    </main>
  );
}