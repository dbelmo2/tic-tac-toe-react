import Stage from './components/stage';
import Player from "./components/Player"
import { useEffect, useState } from 'react';
import socket from './socket';

import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [showOverlay, setShowOverlay] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleNameSubmit = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setUserName(inputValue.trim());
      setShowOverlay(false);
    }
  };

 useEffect(() => {
    if (socket.connected === false) {
      socket.on("connect", () => {
        console.log("Connected to server");
        socket.emit("registerPlayer", userName)
        socket.on("playersConnected", (data) => {
          console.log("Players connected:", JSON.stringify(data));
        })
      })
    }

    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    }

 }, [])


  return (
    <div className="App">
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>Welcome!</h2>
            <p>Please enter your name:</p>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleNameSubmit}
              placeholder="Your name"
              autoFocus
            />
            <p className="hint">Press Enter to continue</p>
          </div>
        </div>
      )}
      <Player name={userName || 'Player 1'} />
      <Stage />
      <Player name='Player 2'/>
    </div>
  );
}

export default App;
