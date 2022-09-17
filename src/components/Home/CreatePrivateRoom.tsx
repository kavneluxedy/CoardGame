import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ModalPrivateRoom from '../Modals/ModalPrivateRoom'

const CreatePrivateRoom = (): JSX.Element => {
    const navigate = useNavigate()

    const [privateMatchID, setPrivateMatchID] = useState("custom01")

    useEffect(() => {
        console.log(privateMatchID)
    }, [privateMatchID])

    function open() {
        const modalPlay = document.getElementById("modalPrivateRoom")
        const openBtn = document.getElementById("openBtn")
        if (modalPlay !== null && openBtn !== null) {
            modalPlay.style.display = "block"
        }
    }

    function close() {
        const modalPlay = document.getElementById("modalPrivateRoom")
        const openBtn = document.getElementById("openBtn")
        if (modalPlay !== null && openBtn !== null) {
            modalPlay.style.display = "none"
        }
    }

    function Validate() {
        navigate("match" + "-" + privateMatchID)
    }

    return (
        <>
            <button id="openBtn" onClick={open}>CREATE PRIVATE ROOM</button>
            <div id="modalPrivateRoom" className="modal">
                <div className="modal-content">
                    <ModalPrivateRoom state={{ privateMatchID, setPrivateMatchID }} />
                    <button className="ValidateBtn" onClick={Validate}>Valider</button>
                    <button className="closeBtn" onClick={close}>Annuler</button>
                </div>
            </div>
        </>
    )
}

export default CreatePrivateRoom
