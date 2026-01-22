import { useState } from "react";
import "./CardProduto.css";

export function CardProduto() {
  const [adicionado, setAdicionado] = useState(false);

  return (
    <div className="card-container">
      <div className="card">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='180'%3E%3Crect fill='%23e0e0e0' width='280' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23999' text-anchor='middle' dy='.3em'%3EFone Bluetooth%3C/text%3E%3C/svg%3E"
          alt="Fone Bluetooth Premium"
          className="card-image"
        />
        <div className="card-content">
          <h2 className="product-name">Fone Bluetooth Premium</h2>
          <p className="product-price">R$ 39,90</p>
          <button
            className={`product-button ${adicionado ? 'added' : ''}`}
            onClick={() => setAdicionado(!adicionado)}
          >
            {adicionado ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
          </button>
        </div>
      </div>
    </div>
  );
}
