import styled from "styled-components";
import { useState } from "react"
//recieve
const Square = ({ square, onClick }) => {
  const [toggled,setToggled]=useState(false)
  return (
    <>
      <Button
        // call the function when the button is clicked
        onClick={onClick}
        square={square}
        setToggled={(!toggled)}
      >
        {/* print the value */}
        {square }
      </Button>
    </>
  );
};
const Button = styled.button`
  color: ${({square})=>(square==="X"? "blue": "red")};
  
  transition: width 2s, height 2s, background-color 2s, transform 2s;
  border: 1px solid orange;
  font-size: 40px;
  font-weight: 800;
  cursor: pointer;
  &:hover{
    transform: rotate(25deg);
    background-color: pink;
  }
`;
export default Square;
