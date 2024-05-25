import styles from "./page.style.css";

// pages/cadastro.js

export default function Cadastro() {
    return (
        <main>
            <h1>Cadastro</h1>
            <form>
                <div>
                    <label htmlFor="username">Nome de usuário</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </main>
    );
}
