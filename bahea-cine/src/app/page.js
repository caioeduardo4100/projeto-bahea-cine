import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={"container"}>
      <header>
        <div className="container">
          <div className="logo"><img src="img/logo.png" alt="logo-bahea-cine"></img></div>
            <div className="menu">
              <nav>
                <a href={"/bomboniere"}>Bomboniere</a>
                <a href={"/pre-vendas"}>Pré-Vendas</a>
                <a href={"/lancamentos"}>Lançamentos</a>
                <a href={"/contato"}>Contato</a>
                <a href={"/assinaturas"}>Assinaturas</a>
                <a href={"/compras"}>Compras</a>
              </nav>
          </div>
          <div className="container-login">
              <nav>
                <a href={"/login"}><img src={"img/img-home-login/icon-login.png"} 
                alt="icone-login"className="login-img"></img>Iniciar Sessão</a>
              </nav>
            </div>
        </div>
      </header>
    </main>
  )
}