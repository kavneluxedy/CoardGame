import React from 'react'
import { useParams } from 'react-router-dom'
import Client from './Game/Client'

const PrivateClient = (): JSX.Element => {
    const { matchID } = useParams();

    return (
        <>
            <Client matchID={matchID} />
        </>
    )
}

export default PrivateClient