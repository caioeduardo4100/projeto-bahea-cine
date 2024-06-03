import "./page.style.css";

export default function Compras() {
    return (
        <div className="container">
            <h1 className="title">Compras</h1>
            <div className="content">
                <div className="left-content">
                    <h2 className="subtitle">Produtos Selecionados</h2>
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Preço Unitário</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Produto 1</td>
                                <td>1</td>
                                <td>R$ 10,00</td>
                                <td>R$ 10,00</td>
                            </tr>
                            <tr>
                                <td>Produto 2</td>
                                <td>2</td>
                                <td>R$ 15,00</td>
                                <td>R$ 30,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="right-content">
                    <div className="total">
                        <h2 className="subtitle">Total a Pagar</h2>
                        <p className="amount">R$ 40,00</p>
                        <p className="payment-message">O pagamento é presencial</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
