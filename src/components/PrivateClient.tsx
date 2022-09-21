import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../App'
import Client from './Game/Client'

const PrivateClient = (): JSX.Element => {
    const { matchID } = useParams()
    const { nickname }: any = useContext(AppContext)

    return (
        <>
            <Client matchID={matchID} playerID={nickname} />
        </>
    )
}

export default PrivateClient