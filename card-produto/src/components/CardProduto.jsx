import { useState } from "react";
import styled from "styled-components";

/*
  Container principal do card
*/
const Card = styled.div`
  width: 250px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #ffffff;
`;

/*
  Nome do produto
*/
const NomeProduto = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

/*
  Preço do produto
*/
const Preco = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

/*
  Botão com estilização dinâmica
  A cor muda conforme a prop "adicionado"
*/
const Botao = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;

  background-color: ${(props) =>
    props.adicionado ? "#198754" : "#6c757d"};

  &:hover {
    opacity: 0.9;
  }
`;

export function CardProduto() {
  const [adicionado, setAdicionado] = useState(false);

  return (
    <Card>
      <NomeProduto>Fone de Ouvido Bluetooth</NomeProduto>
      <Preco>R$ 199,90</Preco>

      <Botao
        adicionado={adicionado}
        onClick={() => setAdicionado(!adicionado)}
      >
        {adicionado ? "Adicionado" : "Adicionar ao carrinho"}
      </Botao>
    </Card>
  );
}
