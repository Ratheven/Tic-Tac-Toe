import styled from "styled-components";
//recieve
const Square = ({ square, onClick }) => {
  return (
    <>
      <Button
        // call the function when the button is clicked
        onClick={onClick}
        square={square}
      >
        {/* print the value */}
        {square}
      </Button>
    </>
  );
};
const Button = styled.button`
  color: ${({square})=>(square==="X"? "blue": "red")};
  border: 1px solid orange;
  font-size: 40px;
  font-weight: 800;
  cursor: pointer;
`;
export default Square;
