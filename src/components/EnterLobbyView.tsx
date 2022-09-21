import React, { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from "react"
import { LobbyRendererProps } from "./Lobby"
import GameOptionModal from "./GameOptionModal"
import { AllPictures } from "../assets/images/AllPictures";

const EnterLobbyView: FC<{ L: LobbyRendererProps }> = ({ L }) => {
    const [img, setImg] = useState(localStorage.getItem("player_avatar") || AllPictures[0])
    const [playerName, setPlayerName] = useState<string>(L.playerName);

    const handleAvatar = (): void => {
        let i: number = AllPictures.indexOf(img)
        if (i === AllPictures?.length - 1) {
            i = 0
        }
        else {
            i++
        }
        setImg(AllPictures[i])
        localStorage.setItem("player_avatar", AllPictures[i])
    }

    return (
        <>
            <h1>{L.gameComponents[0].game.name?.toUpperCase()}</h1>
            <label id="go-playerName" htmlFor="go-playerName">Choose a name:&nbsp;
                <input
                    className="border-2 border-blue-300 rounded-md p-1"
                    type="text"
                    placeholder="Visitor"
                    // value={playerName}   
                    onChange={(e) => {
                        setPlayerName(e.target.value)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === "Enter" && playerName !== "") {
                            L.handleEnterLobby(playerName)
                        }
                    }}
                />
            </label>
            <img id="go-playerImage" src={img} onClick={handleAvatar} alt="Avatar de votre Roi" />
            <div id="go-deck">
                <div id="go-deckChoice">Deck Choice</div>
                <div id="go-deckChoice">Deck Choice</div>
                <div id="go-deckChoice">Deck Choice</div>
                <div id="go-deckDetails">Deck Details</div>
            </div>

            <button id="go-play">JOUER !</button>
        </>
    )
}

export { EnterLobbyView }