import Stage from './components/stage';
import Player from "./components/Player"
import { useEffect } from 'react';
import socket from './socket';

import './App.css';

function App() {

 useEffect(() => {
    if (socket.connected === false) {
      socket.on("connect", () => {
        console.log("Connected to server");
        socket.emit("registerPlayer", "Bob")
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
      <Player name='Player 1' />
      <Stage />
      <Player name='Player 2'/>
    </div>
  );
}

export default App;
