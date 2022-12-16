import React, { FC } from "react";
import { BoardProps } from "boardgame.io/react";
import { CoardsGameState } from "./logic/Game";
import { PlayerID } from "boardgame.io";
import DATA from "../../utils/data/data";
import Canvas from "../game/Canvas";

interface CoardGameProps extends BoardProps<CoardsGameState> {
	playerID: PlayerID;
}

const CoardGameBoard: FC<CoardGameProps> = ({ G, ctx, moves }) => {
	return (
		<main>
			<div id="board-wrapper">
				<Canvas
					id={"board"}
					width={DATA.BOARD.WIDTH}
					height={DATA.BOARD.HEIGHT}
					cells={G.cells}
				/>
			</div>
		</main>
	);
};

export default CoardGameBoard;
