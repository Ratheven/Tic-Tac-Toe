import styled from "styled-components";
const Square = ({ value, onClick }) => {
  return (
    <>
      <Button
        style={{ color: (value = "x" ? "blue" : "red") }}
        onClick={onClick}
      >
        {value}{" "}
      </Button>
    </>
  );
};
const Button = styled.button`
  border: 2px solid orange;
  font-size: 40px;
  font-weight: 800;
  cursor: pointer;
  outline: no;
`;
export default Square;
