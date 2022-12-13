import { CoardsGame } from "../src/components/game/logic/Game";
import { Server, Origins } from "boardgame.io/server";

const server = Server({
  games: [CoardsGame],
  origins: [Origins.LOCALHOST_IN_DEVELOPMENT, "http://176.176.113.3", "http://coard.ddns.net"]
});

const lobbyConfig = {
  apiPort: 8080,
  apiCallback: () => console.log("LobbyAPI Listens at port 8080"),
}

server.run({ port: 8000, lobbyConfig })