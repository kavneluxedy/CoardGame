import React from 'react';
import { BoardProps } from 'boardgame.io/react';
import { GameState } from './Game.js';
import { Ctx, PlayerID } from 'boardgame.io';

const getWinner = (ctx: Ctx): string | null => {
    if (!ctx.gameover) return null;
    if (ctx.gameover.draw) return 'Draw';
    return `Player ${ctx.gameover.winner} wins!`;
};

interface MyGameProps extends BoardProps<GameState> {
    playerID: PlayerID,
}

export const Board = ({ G, ctx, moves }: MyGameProps) => {
    const winner = getWinner(ctx);

    return (
        <main>
            <h1>Card Game</h1>

            <div
                style={{
                    display: 'grid',
                    gridTemplate: 'repeat(3, 3rem) / repeat(3, 3rem)',
                    gridGap: '0.3em',
                }}
            >
                {G.cells.map((cell: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined, index: React.Key | null | undefined) => (
                    <button
                        key={index}
                        onClick={() => moves.clickCell(index)}
                        disabled={cell !== null}
                    >
                        {cell}
                    </button>
                ))}
            </div>

            {winner && <p>{winner}</p>}
        </main>
    );
};
