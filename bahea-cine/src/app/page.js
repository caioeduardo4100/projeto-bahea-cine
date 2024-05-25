import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={"container"}>
      <header>
        <div className="container">
          <div className="logo"><img src="img/logo.png"></img></div>
            <div className="menu">
              <nav>
                <a href="/bomboniere">Bomboniere</a>
                <a href="/cartaz">Cartaz</a>
                <a href="/lancamentos">Lançamentos</a>
                <a href="/contato">Contato</a>
              </nav>
          </div>
          <div className="container-login">
              <nav>
                <span className="span">possui conta? | </span> <a href="/login">Iniciar Sessão</a>
              </nav>
            </div>
        </div>
      </header>
    </main>
  );
}