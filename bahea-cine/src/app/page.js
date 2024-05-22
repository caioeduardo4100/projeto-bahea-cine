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
                <a href="#">Bomboniere</a>
                <a href="#">Cartaz</a>
                <a href="#">Lançamentos</a>
                <a href="#">Contato</a>
              </nav>
          </div>
          <div className="container-login">
            <span> Entre ou cadastre-se</span>
              <nav>
                <a href="#">Login</a>
                <a href="#">Cadastrar-se</a>
              </nav>
            </div>
        </div>
      </header>
    </main>
  );
}