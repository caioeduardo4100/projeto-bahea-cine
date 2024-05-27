import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={"container"}>
      <header>
        <div className="container">
          <div className="logo"><img src="img/logo.png" alt="logo-bahea-cine"></img></div>
            <div className="menu">
              <nav>
                <Link href={"/bomboniere"}>Bomboniere</Link>
                <Link href={"/cartaz"}>Cartaz</Link>
                <Link href={"/lancamentos"}>Lançamentos</Link>
                <Link href={"/contato"}>Contato</Link>
              </nav>
          </div>
          <div className="container-login">
              <nav>
                <Link href={"/login"}><img src={"img/img-home-login/icon-login.png"} 
                alt="icone-login"className="login-img"></img>Iniciar Sessão</Link>
              </nav>
            </div>
        </div>
      </header>
    </main>
  )
}