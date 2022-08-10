import Board from "./Board";
import caculateWinner from "./CalculateWinner"
import { useState } from "react";


const Game = () => {
    //Create an array that has 9 index which have the value of null
    const [board, setBoard] = useState(Array(9).fill(null))
    //This state is used to deteremine who is the next player
    const[xIsNext, setXIsNext] = useState(true)
    //call caculateWinner and pass the board as a parameter and save it in winner
    const winner = caculateWinner(board)

    const handleClick = (i)=> {
        //Makes a copy of the board, 
        const boardCopy = [...board];
        //If the index in the array already has a value the function will return or if there is a winner the function will return
        if (winner || boardCopy[i]) return;
        //Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? "X" : "0";
        //Update the board//
        setBoard(boardCopy);
        //Update whos next by converting it to the opposite boolean
        setXIsNext(!xIsNext);
    }

    const handleRestart = ()=> {
        //Restart the board by initializing its original state
        setBoard(Array(9).fill(null))
        //Restart player turn to always let X start
        setXIsNext(true)
    }

  return (
    <>
    {/* pass the array and the handleClick as props */}
  <Board squares={board} onClick={handleClick} />
  <div >
    <p>
        {/* if the winner is declared show the winner or show the next player */}
      {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
    </p>
    {/* calls the function to restart the game */}
    {winner&&(
    <button onClick={() => handleRestart()}>Restart</button>
    )}
  </div>
</>
  )
};
export default Game;
