'use client';
import './page.style.css';
import React from 'react';

export default function Contato() {
  return (
    <div className="page-container">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-header">
            <h1>Contato</h1>
          </div>
          <div className="contact-info">
            <p>Para entrar em contato conosco mande um email para: baheacine@gmail.com ou ligue para (14)99999-9999</p>
          </div>
        </div>
        <button className="back-button" onClick={() => window.history.back()}>Voltar</button>
      </div>
    </div>
  );
}
