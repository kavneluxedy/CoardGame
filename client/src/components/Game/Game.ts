import React from "react"
import { INVALID_MOVE } from "boardgame.io/core"
import { Ctx, Game, Move } from "boardgame.io"
import { cells, ICell } from "../../utils/CellsInit"

interface CoardGameState {
	cells: ICell[][];
}

const move: Move<CoardGameState> = (G, ctx) => { };

const CoardsGame: Game<CoardGameState> = {
	name: "coardsgame",
	setup: () => ({ cells: cells }),
	moves: {},
	turn: { minMoves: 1, maxMoves: 1, },
	endIf: (G: CoardGameState, ctx: Ctx) => { },
	minPlayers: 2,
	maxPlayers: 2,
};

export { CoardsGame, CoardGameState }