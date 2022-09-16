import React from 'react'
import { INVALID_MOVE } from "boardgame.io/core"
import { Game, Move } from "boardgame.io"

interface GameState {
  cells: (null | string)[];
}

const move: Move<GameState> = (G, ctx) => { };

const CardGame: Game<GameState> = {
  name: "CardGame",

  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell: (G, ctx, id) => {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      G.cells[id] = ctx.currentPlayer;
    },
  },

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  endIf: (G, ctx) => {
    if (IsVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
      return { draw: true };
    }
  },

  ai: {
    enumerate: (G, ctx) => {
      let moves: any[] = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: 'clickCell', args: [i] });
        }
      }
      return moves;
    },
  },

  minPlayers: 2,
  maxPlayers: 2,
};

/** Return true if `cells` is in a winning configuration. */
function IsVictory(cells: (string | null)[]): boolean {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isRowComplete = (row: number[]): boolean => {
    const symbols = row.map((i) => cells[i]);
    return symbols.every((i) => i !== null && i === symbols[0]);
  };

  return positions.map(isRowComplete).some((i) => i === true);
};

/** Return true if all `cells` are occupied. */
function IsDraw(cells: (null | string)[]): boolean {
  return cells.filter((c) => c === null).length === 0;
}

export { CardGame, GameState }