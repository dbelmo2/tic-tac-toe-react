import Stage from './components/stage';
import Player from "./components/Player"
import { useEffect, useState } from 'react';
import socket from './socket';
import CircleIcon from '@mui/icons-material/Circle';

import './App.css';

function App() {

  const [isConnected, setIsConnected] = useState(false);

 useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
      setIsConnected(true);
    });

    return () => {
      socket.off("connect")
      socket.off("playersConnected")
      if (socket.connected) {
        socket.disconnect();
      }
    }

 }, [])

 

  return (
    <div className="App">
      <CircleIcon style={{
        color: isConnected ? "green" : "red",
        position: 'absolute',
        top: 50,
        right: 50
      }} />
      <Player name={'Player 1'} />
      <Stage />
      <Player name='Player 2'/>
    </div>
  );
}

export default App;
