import React, { FC } from "react";
import { BoardProps } from "boardgame.io/react";
import { CoardsGameState } from "./Game.js";
import { PlayerID } from "boardgame.io";
import Data from "../../utils/BoardInit";
import Canvas from "../Canvas";

interface CoardGameProps extends BoardProps<CoardsGameState> {
  playerID: PlayerID;
}

const CoardGameBoard: FC<CoardGameProps> = ({ G, ctx, moves }) => {
  return (
    <main>
      <div id="board-wrapper">
        <Canvas
          id={"board"}
          width={Data.WIDTH}
          height={Data.HEIGHT}
          cells={G.cells}
        />
      </div>
    </main>
  );
};

export default CoardGameBoard;
