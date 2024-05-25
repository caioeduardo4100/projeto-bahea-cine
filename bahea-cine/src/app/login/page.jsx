import styles from "./page.style.css";

export default function Login() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Tela de login</h1>
            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className={styles.loginButton}>Login</button>
            </form>
            <span className={styles.registerPrompt}>Não tem uma conta? <a href="/cadastro" className={styles.registerLink}>Cadastrar-se</a></span>
        </main>
    );
}
