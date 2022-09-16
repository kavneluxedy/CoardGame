import React, { useEffect, useState } from 'react'

const ModalPrivateRoom = ({ state }: any) => {

    const { privateMatchID, setPrivateMatchID } = state;
    
    return (
        <>
            <h3>Create your private room</h3>
            <label>Nom de la salle rejoignable par vos amis : <input type="text" id="MatchID" placeholder={privateMatchID} onChange={(e) => setPrivateMatchID(e.target.value)} /></label>
        </>
    )
}

export default ModalPrivateRoom