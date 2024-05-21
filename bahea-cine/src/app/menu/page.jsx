import styles from "./page.style.css";

export default function Menu() {
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
                          <a href="#">Sobre</a>
                      </nav>
                  </div>
            </div>
        </header>
      </main>
    );
  }