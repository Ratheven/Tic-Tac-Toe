import styled, { keyframes } from "styled-components";

const Header = ({ winner, xIsNext, tie }) => {
  return (
    <>
      <ContainerGame>Tic-Tac-Toe</ContainerGame>
      <ContainerPlayer>
        <X xIsNext={xIsNext} tie={tie}>
          Player X
        </X>
        <Rotate>XO</Rotate>
        <O xIsNext={xIsNext} tie={tie}>
          Player O
        </O>
      </ContainerPlayer>
    </>
  );
};
const Div = styled.div`
  font-size: 40px;
`;
const ContainerPlayer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
`;
const X = styled.p`
  font-size: 40px;
  border-bottom: ${({ xIsNext, tie }) =>
    tie ? "1px solid blue" : xIsNext ? "5px solid blue" : "1px solid blue"};
  transition: ease-in-out 300ms;
  max-height: 50px;
`;
const O = styled.p`
  font-size: 40px;
  border-bottom: ${({ xIsNext, tie }) =>
    tie ? "1px solid red" : !xIsNext ? "5px solid red" : "1px solid red"};
  transition: ease-in-out 300ms;
  max-height: 50px;
`;
const ContainerGame = styled.p`
  display: flex;
  justify-content: center;
  font-size: 40px;
`;
const rotate = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
export default Header;
