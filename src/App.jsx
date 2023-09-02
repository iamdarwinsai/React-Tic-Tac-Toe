import Square from "./components/Square";
import "./App.css";
import { useState } from "react";

function App() {
  const [array, setArray] = useState(Array(9).fill(null));
  const [isXturn, setIsXTurn] = useState(true);
  const [winner,setWinner]=useState(false);

  const checkWinning = (state) => {
    const winnings = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [6, 4, 2],
      [0, 4, 8],
    ];

    // Use a for loop instead of map to return early when a winning condition is found.
    for (const win of winnings) {
      const [a, b, c] = win;

      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        return true;
      }
    }
    // Make sure to return false when no winning condition is met.
    return false;
  };

  function clickHandler(index) {
    if(checkWinning(array)) return
    let newArray = [...array];
    if (isXturn) {
      newArray[index] = "X";
    } else {
      newArray[index] = "O";
    }
    setArray(newArray);
    
    // Call checkWinning and store the result.
    const hasWinner = checkWinning(newArray);

    // Check if there is a winner and display a message.
    if (hasWinner) {
      alert(isXturn? 'X Won this game': 'O Won this game');
      setWinner(true)
      // You can also reset the game here if needed.
      // setArray(Array (9).fill(null));
    }

    setIsXTurn(!isXturn);
  }

  return (
    <>
      <div className="board">
      {
        winner ?( <><button onClick={()=>{
          setArray(Array(9).fill(null))
          setWinner(!winner);
          setIsXTurn(true)
        }}>Play Again</button></>) : (
          <>
          <div className="row">
        <Square value={array[0]} clickHandler={() => clickHandler(0)}></Square>
        <Square value={array[1]} clickHandler={() => clickHandler(1)}></Square>
        <Square value={array[2]} clickHandler={() => clickHandler(2)}></Square>
      </div>
      <div className="row">
        <Square value={array[3]} clickHandler={() => clickHandler(3)}></Square>
        <Square value={array[4]} clickHandler={() => clickHandler(4)}></Square>
        <Square value={array[5]} clickHandler={() => clickHandler(5)}></Square>
      </div>
      <div className="row">
        <Square value={array[6]} clickHandler={() => clickHandler(6)}></Square>
        <Square value={array[7]} clickHandler={() => clickHandler(7)}></Square>
        <Square value={array[8]} clickHandler={() => clickHandler(8)}></Square>
      </div>
          </>
        )
      }
    </div>
    </>
  );
}

export default App;
