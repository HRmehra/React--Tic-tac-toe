import { useState } from 'react';
import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx';
function App() {
  const[activePlayer, SetActivePlayer] = useState('X');
  function  handleSelectSquare(){
    SetActivePlayer((curActivePlayer)=>curActivePlayer==='X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="player1" symbol = "X" isActive={activePlayer==='X'}/>
          <Player initialName="player2" symbol = "O" isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePLayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
