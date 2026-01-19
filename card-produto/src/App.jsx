import { CardProduto } from "./components/CardProduto";
import styled from "styled-components";

/*
  Layout principal da loja
*/
const Loja = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Loja>
      <CardProduto />
    </Loja>
  );
}

export default App;
