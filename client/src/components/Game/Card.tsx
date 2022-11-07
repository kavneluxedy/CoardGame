import React, { ReactNode } from 'react'
import useDb from '../../utils/Hooks/useDb';
import ICard from '../../utils/Interfaces/ICard';

interface Props extends ICard {
    children: ReactNode
}

const Card = (props: Props) => {

    const { name, cost, atk, def, hp, mp, effects, _id, children } = { ...props };

    return (
        <>
            <div id="card">
                <div id='card-title'><h2 id='cards-panel'>{name}</h2></div>
                <div id='card-content'>
                    {children}
                    <span>COST: {cost} &nbsp;<strong>|</strong>&nbsp;</span>
                    <span>ATK: {atk} &nbsp;<strong>|</strong>&nbsp;</span>
                    <span>DEF: {def} &nbsp;<strong>|</strong>&nbsp;</span>
                    <span>HP: {hp} &nbsp;<strong>|</strong>&nbsp;</span>
                    <span>MP: {mp} &nbsp;<strong>|</strong>&nbsp;</span>
                    <span>EFFECTS: {effects}</span>
                </div>
            </div>
        </>
    )
}

export default Card