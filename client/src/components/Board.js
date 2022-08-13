import styled from "styled-components";
import Square from "./Square";
//recieve board as prop save in squares and recieve handleClick as onClick
const Board = ({squares, onClick,}) => {
  return (
    <Container>
      {/* //map the array */}
  {squares.map((square, i)=>(

    //pass each index to a square, and pass the function call handleClick with the index as a parameter
    <Square key={i} square={square} onClick={()=>onClick(i)} />
  ))}
    </Container>
  );
};

const Container = styled.div`
  border-radius: 10px;
  width: 700px;
  height: 550px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

export default Board;
