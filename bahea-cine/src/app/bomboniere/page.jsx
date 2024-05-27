import './page.style.css';
import Link from "next/link";

export default function Bomboniere() {
  return (
    <div className="bomboniere-container">
      <Link href="/">
        <img src="img/logo.png" alt="Bahea Cine Logo" className="logo" />
      </Link>
      <h2 className="bomboniere-title">Bomboniere</h2>
      <div className="shelf"> 
        <h3 className="snack-category">Produtos</h3>
        <div className="snack-items">
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
            <img src="img/img-bomboniere/agua.png" alt="Água" className="snack-image" />
            <p className="snack-name">Água</p>
            <button className="add-to-cart-button">Adicionar</button>
          </div>
          <div className="snack-item">
            <img src="img/img-bomboniere/refri.png" alt="Refrigerante" className="snack-image" />
            <p className="snack-name">Refrigerante</p>
            <button className="add-to-cart-button">Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
