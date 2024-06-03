import './page.style.css';

export default function Bomboniere() {
  return (
    <div className="bomboniere-container">
      <a href={"/"}>
        <img src="img/logo.png" alt="Bahea Cine Logo" className="logo" />
      </a>
      <h2 className="bomboniere-title">Bomboniere</h2>
      <div className="shelf"> 
        <div className="snack-columns">
          <div className="snack-column">
            <h4 className="snack-subcategory">Alimentos</h4>
            <div className="snack-item">
              <img src="img/img-bomboniere/chocolate.png" alt="Chocolate" className="snack-image" />
              <p className="snack-name">Chocolate</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
            <div className="snack-item">
              <img src="img/img-bomboniere/pipoca.png" alt="Pipoca" className="snack-image" />
              <p className="snack-name">Pipoca</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
            <div className="snack-item">
              <img src="img/img-bomboniere/lanche.png" alt="Lanche Natural" className="snack-image" />
              <p className="snack-name">Lanche Natural</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
            <div className="snack-item">
              <img src="img/img-bomboniere/batata.png" alt="Batata Frita" className="snack-image" />
              <p className="snack-name">Batata Frita</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
            <div className="snack-item">
              <img src="img/img-bomboniere/salgadinho.png" alt="Salgadinho" className="snack-image" />
              <p className="snack-name">Salgadinho</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
            <div className="snack-item">
              <img src="img/img-bomboniere/sanduiche.png" alt="Sanduíche" className="snack-image" />
              <p className="snack-name">Sanduíche</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
          </div>
          <div className="snack-column">
            <h4 className="snack-subcategory">Bebidas</h4>
            <div className="snack-item">
              <img src="img/img-bomboniere/agua.png" alt="Água" className="snack-image" />
              <p className="snack-name">Água</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
            <div className="snack-item">
              <img src="img/img-bomboniere/refri.png" alt="Refrigerante" className="snack-image" />
              <p className="snack-name">Refrigerante</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
            <div className="snack-item">
              <img src="img/img-bomboniere/energetico.png" alt="Energético" className="snack-image" />
              <p className="snack-name">Energético</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
            <div className="snack-item">
              <img src="img/img-bomboniere/suco.png" alt="Suco" className="snack-image" />
              <p className="snack-name">Suco</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
            <div className="snack-item">
              <img src="img/img-bomboniere/cafe.png" alt="Café" className="snack-image" />
              <p className="snack-name">Café</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
            <div className="snack-item">
              <img src="img/img-bomboniere/cha.png" alt="Chá" className="snack-image" />
              <p className="snack-name">Chá</p>
              <button className="add-to-cart-button">Adicionar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
