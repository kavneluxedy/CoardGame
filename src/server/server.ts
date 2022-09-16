import { CardGame } from "../components/Game/Game";
import { Server, Origins } from "boardgame.io/server";

const server = Server({
    games: [CardGame],
    origins: [Origins.LOCALHOST, "http:localhost"],
});

server.run(8000);