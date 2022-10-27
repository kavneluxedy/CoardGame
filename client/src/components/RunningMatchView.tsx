import React from "react";
import Button from "./Button";
import { LobbyRendererProps } from "./Lobby";

const RunningMatchView: React.FC<{ L: LobbyRendererProps }> = ({ L }) => {
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
                    onClick={() => {
                        L.handleExitMatch();
                    }}
                >
                    Exit
                </Button>
            </div>
        </div>
    );
};

export default RunningMatchView