import './page.style.css';

export default function Login() {
  return (
    <div className="wrapper-login">
      <form action={"#"}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Email" required/>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Senha" required/>
          </div>

          <div class="remember-forgot">
            <label><input type="checkbox"/>Lembrar-me</label>
            <a href={"#"}>Esqueci minha senha</a>
          </div>

        <button type="submit" className="btn">Entrar</button>

        <div className="register-link">
          <p>Não possui uma conta? <a href={"/cadastro"}>Cadastrar-se</a>
          </p>
        </div>
        
        <a href={"/"} className="back-home">Voltar para a página principal</a>
      </form>
    </div>
  );
}