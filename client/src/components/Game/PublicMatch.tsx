import React from 'react'
import RunningMatchView from './phases/RunningMatchView'
import { Lobby } from "boardgame.io/react";
import { CoardsGame } from './logic/Game';
import CoardsGameBoard from './Board';
import { EnterLobbyView } from './phases/EnterLobbyView';
import ListGamesView from './phases/ListGamesView';

const PublicMatch = ({ handleVisibility }: { handleVisibility: any }) => {

    let serverAddr = `${window.location.protocol}//${window.location.hostname + ":8000"}`;
    let ApiAddr = `${window.location.protocol}//${window.location.hostname + ":8080"}`;

    return (
        <Lobby
            gameServer={serverAddr}
            lobbyServer={ApiAddr}
            gameComponents={[{ game: CoardsGame, board: CoardsGameBoard }]}
            refreshInterval={10000}
            debug={true}
            renderer={(L) => {
                return (
                    <div className="lobby-phases-wrapper">
                        {L.phase === "enter" && (
                            <EnterLobbyView L={L} />
                        )}
                        {L.phase === "list" && (
                            <ListGamesView L={L} handleVisibility={handleVisibility} />
                        )}
                        {L.phase === "play" && (
                            <RunningMatchView L={L} />
                        )}
                    </div>
                );
            }}
        />
    );
}

export default PublicMatch