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
  };

  const handleRestart = () => {
    //Restart the board by initializing its original state
    setBoard(Array(9).fill(null));
    //Restart player turn to always let X start
    setXIsNext(true);
  };

  //check fi there is a tie Game//
  const TieGame = (element) => {
    if (!element === null) {
      return true;
    }
  };
  const Tie = board.every(TieGame);

  return (
    <Container>
      <Div>
        <Header winner={winner} xIsNext={xIsNext} />
      </Div>
      {/* pass the array and the handleClick as props */}
      <Board squares={board} onClick={handleClick} />
      <div>
        {winner || Tie ? (
          <button onClick={() => handleRestart()}>Restart</button>
        ) : null}
        {/* calls the function to restart the game if theres a winner */}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 700px;
`;
const Div = styled.div`
margin-bottom: 10px;
`
export default Game;
