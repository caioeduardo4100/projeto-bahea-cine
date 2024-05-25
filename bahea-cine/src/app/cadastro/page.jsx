import React from 'react';
import './page.style.css';

const Page = () => {
  return (
    <div className="cadastro-container">
      <a href="/">
        <img src="img/logo.png" alt="Bahea Cine Logo" className="logo" />
      </a>
      <div className="cadastro-title-container">
        <img src="img/cadastro.png" alt="Logo" className="title-logo" />
        <h2 className="cadastro-title">Cadastro</h2>
        <img src="img/cadastro.png" alt="Logo" className="title-logo" />
      </div>
      <form className="cadastro-form">
        <input type="text" placeholder="Nome" className="cadastro-input" />
        <input type="text" placeholder="Usuário" className="cadastro-input" />
        <input type="email" placeholder="Email" className="cadastro-input" />
        <input type="password" placeholder="Senha" className="cadastro-input" />
        <button type="submit" className="cadastro-button">Cadastrar</button>
      </form>
      <div className="options">
        <a href="/login" className="option-link">Já tem uma conta? Faça login</a>
        <span className="option-divider">|</span>
        <a href="/" className="option-link">Página Inicial</a>
      </div>
    </div>
  );
};

export default Page;
