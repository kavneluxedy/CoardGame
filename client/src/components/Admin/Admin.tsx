import React from 'react'
import NeedAuth from '../Auth/NeedAdmin'

const Admin = () => {

    return (
        <NeedAuth>
            <h1>Bienvenue Administrateur</h1>
        </NeedAuth>
    )
}

export default Admin