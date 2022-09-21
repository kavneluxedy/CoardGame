import React, { useState } from "react";
import Button from "./Button";
import { LobbyRendererProps } from "./Lobby";

const EnterLobbyView: React.FC<{ L: LobbyRendererProps }> = ({ L }) => {
    const [playerName, setPlayerName] = useState(L.playerName);

    return (
        <div className="go-wrapper">
            <h1>CardGame</h1>
            <div>Choose a name: </div>

            <div>
                <input
                    className="border-2 border-blue-300 rounded-md p-1"
                    type="text"
                    placeholder="Visitor"
                    value={playerName}
                    onFocus={() => {
                        setPlayerName("");
                    }}
                    onChange={(e) => {
                        setPlayerName(e.target.value);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === "Enter" && playerName !== "") {
                            L.handleEnterLobby(playerName);
                        }
                    }}
                />
                <Button
                    onClick={() => {
                        if (playerName !== "") {
                            L.handleEnterLobby(playerName);
                        }
                    }}
                >
                    Enter
                </Button>
            </div>
        </div>
    );
};

export default EnterLobbyView