import './page.style.css';

export default function Assinaturas() {
    return (
        <div className="container">
            <a href={"/"} className="back-link">Voltar para a Página Inicial</a>
            <h1 className="subscription-title">Planos de Assinatura</h1>
            <div className="plans-container">
                <div className="plan-card">
                    <h2 className="plan-title">Basic</h2>
                    <ul className="plan-description">
                        <li>25% de desconto no site</li>
                        <li>Fila preferencial</li>
                    </ul>
                    <p className="plan-price">R$ 15 mensais</p>
                    <button className="subscribe-button">Assinar</button>
                </div>
                <div className="plan-card">
                    <h2 className="plan-title">Alpha</h2>
                    <ul className="plan-description">
                        <li>50% de desconto no site</li>
                        <li>Fila preferencial</li>
                        <li>Acesso antecipado a ingressos</li>
                    </ul>
                    <p className="plan-price">R$ 30 mensais</p>
                    <button className="subscribe-button">Assinar</button>
                </div>
            </div>
        </div>
    );
}
