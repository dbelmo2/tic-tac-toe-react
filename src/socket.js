import { io } from "socket.io-client";

const serverUrl = process.env.REACT_APP_SERVER_URL || "https://tic-tac-toe-server-production-30dd.up.railway.app";

const socket = io(serverUrl);
socket.connect();

export default socket;