'use client';
import React from 'react';
import './page.style.css';
import logo from '../../../public/img/logo.png';

const ContactPage = () => {
  return (
    <div className="page-container">
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Bahea Cine" />
        </div>
        <nav>
          <a href="/bomboniere">BOMBONIERE</a>
          <a href="/cartaz">CARTAZ</a>
          <a href="/lancamentos">LANÇAMENTOS</a>
          <a href="/contato">CONTATO</a>
        </nav>
        <div className="login">
          <a href="/login">INICIAR SESSÃO</a>
        </div>
      </header>
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-header">
            <h1>Contato</h1>
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" placeholder="Nome" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" placeholder="Mensagem" required></textarea>
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
        <button className="back-button" onClick={() => window.history.back()}>Voltar</button>
      </div>
    </div>
  );
};

export default ContactPage;