import React from "react"
import { INVALID_MOVE } from "boardgame.io/core"
import { Ctx, Game, Move } from "boardgame.io"
import { cells, ICell } from "./CellsInit"

interface CoardsGameState {
	cells: ICell[][];
}

const move: Move<CoardsGameState> = (G, ctx) => { };

const CoardsGame: Game<CoardsGameState> = {
	name: "coardsgame",
	setup: () => ({ cells: cells }),
	moves: {},
	turn: { minMoves: 1, maxMoves: 1, },
	endIf: (G: CoardsGameState, ctx: Ctx) => { },
	minPlayers: 2,
	maxPlayers: 2,
};

export { CoardsGame, CoardsGameState }