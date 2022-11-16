
import React from 'react'
import CreateCard from './CreateCard'
import ReadCard from './ReadCard'

const Admin = () => {

    // ! AFFICHAGE CONDITIONNEL

    return (
        <>
            <h1>Bienvenue Administrateur</h1>
            <ReadCard />
            <CreateCard />
        </>
    )
}

export default Admin