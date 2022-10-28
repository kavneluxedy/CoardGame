import React, { FormEvent, FormEventHandler, MouseEvent, useEffect, useState } from 'react'
import NeedAuth from '../Auth/NeedAdmin'
import CreateCard from './CreateCard'
import { Comm } from "../Comm/comm";

const Admin = () => {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let card = {
            name: e.target[0].value,
            cost: e.target[1].value,
            atk: e.target[2].value,
            def: e.target[3].value,
            hp: e.target[4].value,
            mp: e.target[5].value,
            effects: e.target[6].value,
        };
        const result = await Comm("COARD", "cards", { card: card }, "/api/createCard");
        console.table([result]);
    }

    return (
        <NeedAuth>
            <h1>Bienvenue Administrateur</h1>
            <h1>INSERT CARD</h1>
            <form onSubmit={(e) => { handleSubmit(e) }} method="post" className='login-form'>
                <CreateCard />
                <input type="submit" value='Créer' />
            </form>
        </NeedAuth>
    )
}

export default Admin