import { io } from "socket.io-client";

const serverUrl = process.env.SERVER_URL || "http://localhost:3001";

const socket = io(serverUrl);
socket.connect();

export default socket;