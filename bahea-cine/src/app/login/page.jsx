import './page.style.css';
import Link from "next/link";

export default function Login() {
  return (
    <div className="login-container">
      <a href={"/"}>
        <img src={"img/logo.png"} alt="Bahea Cine Logo" className="logo" />
      </a>
      <div className="login-title-container">
        <img src="img/img-cadastro-login/login.png" alt="Logo" className="title-logo" />
        <h2 className="login-title">Login</h2>
        <img src="img/img-cadastro-login/login.png" alt="Logo" className="title-logo" />
      </div>
      <form className="login-form">
        <input type="text" placeholder="Usuário" className="login-input" />
        <input type="password" placeholder="Senha" className="login-input" />
        <button type="submit" className="login-button">Entrar</button>
      </form>
      <div className="options">
        <p className="no-account">Não possui uma conta?</p>
        <Link href={"/cadastro"} className="option-link">Fazer Cadastro</Link>
        <span className="option-divider">|</span>
        <Link href={"/"} className="option-link">Página Inicial</Link>
      </div>
    </div>
  )
}