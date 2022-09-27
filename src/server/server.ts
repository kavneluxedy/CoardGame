import { CardGame } from "../components/Game/Game";
import { Server, Origins } from "boardgame.io/server";

const server = Server({
  games: [CardGame],
  origins: ["http://coard.ddns.net"]
});

const lobbyConfig = {
  apiPort: 8080,
  apiCallback: () => console.log("LobbyAPI Listens port 8080"),
}

server.run({ port: 8000, lobbyConfig })