import Board from "./Board";
import caculateWinner from "./CalculateWinner";
import { useState } from "react";
import Header from "./Header";
import styled from "styled-components";

const Game = () => {
  //Create an array that has 9 index which have the value of null
  const [board, setBoard] = useState(Array(9).fill(null));
  //This state is used to deteremine who is the next player
  const [xIsNext, setXIsNext] = useState(true);
  //call caculateWinner and pass the board as a parameter and save it in winner, if there is a winner it will return
  const winner = caculateWinner(board);

  const [tie, setTie] = useState(false);

  const handleClick = (i) => {
    //If the index in the array already has a value and not null the function will return or if there is a winner the function will return
    if (winner === "winner" || board[i]) {
      return;
    }
    //Put an X or an O based on the xIsNext boolean and save it in board
    board[i] = xIsNext ? "X" : "0";
    //Update the board//
    setBoard(board);
    //Update whos next by converting it to the opposite boolean
    setXIsNext(!xIsNext);
    TieGame();
  };

  const handleRestart = () => {
    //Restart the board by initializing its original state
    setBoard(Array(9).fill(null));
    //Restart player turn to always let X start
    setXIsNext(true);
  };

  //check if there is a tie Game//
  const TieGame = () => {
    board.forEach((element) => {
      if (element !== null) {
        setTie(true);
      }
    });
  };

  return (
    <Container>
      <Div>
        <Header winner={winner} xIsNext={xIsNext} />
      </Div>
      {/* pass the array and the handleClick as props */}
      <Board squares={board} onClick={handleClick} />
      <WinnerWrapper>{winner && <Winner>Winner Player {xIsNext ? "O" : "X"}</Winner>}
        </WinnerWrapper>
      <ButtonWrapper>
        {winner || tie ? (
          <Restart onClick={() => handleRestart()}>Restart</Restart>
          ) : null}
        {/* calls the function to restart the game if theres a winner */}
      </ButtonWrapper>
    </Container>
  );
};
const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
`
const Restart = styled.button`
  border: none;
  border-radius: 5px;
  background: #92b5bf;
  color: #161b21;
  text-decoration: none;
  font-size: 1rem;
  height: 2.3rem;
  margin-right: 20px;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  padding: 0 20px;
  &:hover {
    background-color: red;
    color: #00515c;
  }
`
const WinnerWrapper = styled.div`
display: flex;
justify-content: center;
`
const Winner = styled.p`
font-size: 40px;
`
const Container = styled.div`
  width: 700px;
`;
const Div = styled.div`
  margin-bottom: 10px;
`;
export default Game;
