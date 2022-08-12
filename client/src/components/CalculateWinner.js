const calculateWinner = (squares) => {
  //all the combinations in winning tik-tac-toe
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //loop over lines to get each array
  for (let i = 0; i < lines.length; i++) {
    //deconstructing
    const [a, b, c] = lines[i];
    //if the first index value && the first index === second index && the first index === third index
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return "winner";
    }
  }
  //if there is no match return null
  return null;
};

export default calculateWinner;
