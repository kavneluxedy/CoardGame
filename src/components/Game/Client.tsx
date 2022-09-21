import { Client } from 'boardgame.io/react'
import { CardGame } from './Game'
import { Board } from './Board'
import { SocketIO, Local } from "boardgame.io/multiplayer"

export default Client({
    game: CardGame,
    board: Board,
    multiplayer: SocketIO({ server: "http://localhost:8000" })
    // multiplayer: Local(),
});