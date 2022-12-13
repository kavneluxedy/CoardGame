import React, { FC, useContext } from "react";
import Button from "../../Button";
import { LobbyRendererProps } from "../../CoardsGameLobby";
import AppContext from "../../../utils/ContextProvider";

const RunningMatchView: FC<{ L: LobbyRendererProps }> = ({ L }) => {

    const AppCtx = useContext(AppContext);
    const { setIsLobbyVisible } = { ...AppCtx! };

    return (
        <div>
            {L.runningMatch && (
                <L.runningMatch.app
                    matchID={L.runningMatch.matchID}
                    playerID={L.runningMatch.playerID}
                    credentials={L.runningMatch.credentials}
                />
            )}
            <div className="">
                <Button
                    className="close"
                    onClick={() => {
                        L.handleExitMatch();
                        setIsLobbyVisible(false);
                    }}
                >
                    &times;
                </Button>
            </div>
        </div>
    );
};

export default RunningMatchView