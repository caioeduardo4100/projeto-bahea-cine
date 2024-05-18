import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
            <div className="container">
                <div className="logo"><img src="img/logo.png"></img></div>
                <div className="menu">
                    <nav>
                        <a href="#">Bomboniere</a>
                        <a href="#">Cartaz</a>
                        <a href="#">Lançamentos</a>
                        <a href="#">Contato</a>
                        <a href="#">Sobre</a>
                    </nav>
                </div>
            </div>
        </header>
    </main>
  );
}