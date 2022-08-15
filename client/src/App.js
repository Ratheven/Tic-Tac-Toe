import styled from "styled-components";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <Div className="App">
      <Game />
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: center;
  background-color: grey;
  height: 100vh;
`;

export default App;
