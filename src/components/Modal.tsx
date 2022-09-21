import React, { useState } from "react"

import { AllPictures } from "../assets/images/AllPictures"
import { IState } from "./Home/Home"

const Modal = ({ showGameOptionsModal: showGameOptionsModal }: IState): JSX.Element => {

    const [img, setImg] = useState(localStorage.getItem("player_avatar") || AllPictures[0])

    const handleAvatar = (): void => {
        let i: number = AllPictures.indexOf(img)

        if (i === AllPictures?.length - 1) {
            i = 0;
        }
        else {
            i++;
        }

        setImg(AllPictures[i]);
        localStorage.setItem("player_avatar", AllPictures[i])
    }

    const goToMatch = (): void => {
        console.log("GoToMatch") //TODO
    }

    return (
        <>
            <div id="modalPlay" className="modal">
                <div className="modal-content">
                    <button className="close" onClick={() => showGameOptionsModal(false)}>&times;</button>
                    <div id="go-wrapper">
                        <img id="go-playerImage" src={img} onClick={handleAvatar} alt="Avatar de votre Roi" />
                        <div id="go-deck">
                            <div id="go-deckChoice">Deck Choice</div>
                            <div id="go-deckChoice">Deck Choice</div>
                            <div id="go-deckChoice">Deck Choice</div>
                            <div id="go-deckDetails">Deck Details</div>
                        </div>
                    </div>

                    <button className="go-play" onClick={() => goToMatch()} >JOUER !</button>

                </div>
            </div>
        </>
    )
}

export default Modal