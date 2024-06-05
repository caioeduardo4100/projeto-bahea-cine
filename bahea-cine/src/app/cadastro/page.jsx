import './page.style.css';

export default function Cadastro() {
  return (
    <div className="wrapper-cadastro">
    <form action={"#"}>
        <h1>Cadastro</h1>

        <div className="input-box">
          <input type="text" placeholder="Usuário" required/>
        </div>

        <div className="input-box">
          <input type="email" placeholder="Email" required/>
        </div>

        <div className="input-box">
          <input type="password" placeholder="Senha" required/>
        </div>

        <div className="input-box">
          <input type="password" placeholder="Confirmar Senha" required/>
        </div>

      <button type="submit" className="btn">Cadastrar-se</button>

      <div className="login-link">
        <p>Já possui uma conta? <a href={"/login"}>Login</a>
        </p>
      </div>
      <a href={"/"} className="back-home">Voltar para a página principal</a>
    </form>
  </div>
  );
}
