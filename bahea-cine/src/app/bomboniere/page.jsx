import React from 'react';
import './page.style.css';

const Page = () => {
  return (
    <div className="bomboniere-container">
      <a href="/">
        <img src="img/logo.png" alt="Bahea Cine Logo" className="logo" />
      </a>
      <h2 className="bomboniere-title">Bomboniere</h2>
      <div className="shelf"> {/* Adicionado para criar a prateleira */}
        <h3 className="snack-category">Produtos</h3>
        <div className="snack-items">
          <div className="snack-item">
            <img src="img/chocolate.png" alt="Chocolate" className="snack-image" />
            <p className="snack-name">Chocolate</p>
            <button className="add-to-cart-button">Adicionar</button>
          </div>
          <div className="snack-item">
            <img src="img/pipoca.png" alt="Pipoca" className="snack-image" />
            <p className="snack-name">Pipoca</p>
            <button className="add-to-cart-button">Adicionar</button>
          </div>
          <div className="snack-item">
            <img src="img/agua.png" alt="Água" className="snack-image" />
            <p className="snack-name">Água</p>
            <button className="add-to-cart-button">Adicionar</button>
          </div>
          <div className="snack-item">
            <img src="img/refri.png" alt="Refrigerante" className="snack-image" />
            <p className="snack-name">Refrigerante</p>
            <button className="add-to-cart-button">Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
