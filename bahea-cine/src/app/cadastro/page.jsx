import './page.style.css';
import Link from "next/link";

export default function Cadastro() {
  return (
    <div className="cadastro-container">
      <Link href="/">
        <img src="img/logo.png" alt="Bahea Cine Logo" className="logo" />
      </Link>
      <div className="cadastro-title-container">
        <img src="img/img-cadastro-login/cadastro.png" alt="Logo" className="title-logo" />
        <h2 className="cadastro-title">Cadastro</h2>
        <img src="img/img-cadastro-login/cadastro.png" alt="Logo" className="title-logo" />
      </div>
      <form className="cadastro-form">
        <input type="text" placeholder="Nome" className="cadastro-input" />
        <input type="text" placeholder="Usuário" className="cadastro-input" />
        <input type="email" placeholder="Email" className="cadastro-input" />
        <input type="password" placeholder="Senha" className="cadastro-input" />
        <button type="submit" className="cadastro-button">Cadastrar-se</button>
      </form>
    </div>
  )
}
