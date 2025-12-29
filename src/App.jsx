import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const [activePlayer, SetActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    SetActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPLayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPLayer = "O";
      }
      const updatedTurnes = [
        { square: { row: rowIndex, col: colIndex }, player: currentPLayer },
        ...prevTurns,
      ];

      return updatedTurnes;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns = {gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
