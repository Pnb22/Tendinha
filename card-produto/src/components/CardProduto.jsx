import { useState } from "react";

import styled from "styled-components";

/*
  Card principal do produto
*/
const Card = styled.div`
  width: 280px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

/*
  Imagem do produto
*/
const Imagem = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

/*
  Conteúdo do card
*/
const Conteudo = styled.div`
  padding: 16px;
`;

/*
  Nome do produto
*/
const NomeProduto = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

/*
  Preço
*/
const Preco = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #198754;
  margin-bottom: 16px;
`;

/*
  Botão com estilização dinâmica
*/
const Botao = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  color: #fff;

  background-color: ${(props) =>
    props.adicionado ? "#198754" : "#6c757d"};

  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export function CardProduto() {
  const [adicionado, setAdicionado] = useState(false);

  return (
    <Card>
      <Imagem
        src="h="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='180'%3E%3Crect fill='%23e0e0e0' width='280' height='180'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23999' text-anchor='middle' dy='.3em'%3EFone Bluetooth%3C/text%3E%3C/svg%3E      
        alt="Produto"
      />

      <Conteudo>
        <NomeProduto>Fone Bluetooth Premium</NomeProduto>
        <Preco>R$ 199,90</Preco>

        <Botao
          adicionado={adicionado}
          onClick={() => setAdicionado(!adicionado)}
        >
          {adicionado ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
        </Botao>
      </Conteudo>
    </Card>
  );
}
