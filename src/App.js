import './App.css';
import Stage from './components/stage';
import Player from "./components/Player"

function App() {
  return (
    <div className="App">
      <Player name='Player 1' />
      <Stage />
      <Player name='Player 2'/>
    </div>
  );
}

export default App;
