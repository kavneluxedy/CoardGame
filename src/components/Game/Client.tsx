import { Client } from 'boardgame.io/react';
import { CardGame } from './Game';
import { Board } from './Board';
import { SocketIO } from "boardgame.io/multiplayer";

export default Client(
    {
        game: CardGame,
        board: Board,
        multiplayer: SocketIO({ server: "localhost:8000" }),
        numPlayers: 2,
        debug: true,
    });