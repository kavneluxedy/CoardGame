import React from 'react'
import RunningMatchView from '../RunningMatchView'
import { Client, Lobby } from "boardgame.io/react";
import { CoardsGame } from './Game';
import CoardsGameBoard from './Board';
import { EnterLobbyView } from '../EnterLobbyView';
import ListGamesView from '../ListGamesView';

const PublicMatch = ({ Modal, handleVisibility }: { Modal: any, handleVisibility: any }) => {

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
                    <div className="lobby-buttons-wrapper">
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