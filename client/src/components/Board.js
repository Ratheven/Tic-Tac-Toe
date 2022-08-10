import styled from "styled-components";
import Square from "./Square";

const Board = ({squares, onClick}) => {
  return (
    <Container>
  {squares.map((square, i)=>(
    <Square key={i} value={square} onClick={()=>onClick(i)}/>
  ))}
    </Container>
  );
};

const Container = styled.div`
  border: 4px solid purple;
 border-radius: 10px;
  width: 550px;
  height: 250px;

  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

export default Board;
