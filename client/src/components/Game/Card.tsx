import React, { ReactNode } from 'react'
import useDb from '../../utils/Hooks/useDb';
import ICard from '../../utils/Interfaces/ICard';

interface Props extends ICard {
    children: ReactNode
    _id: string
}

const Card = (props: Props) => {

    const { name, cost, atk, def, hp, mp, effects, _id, children } = { ...props };

    return (
        <>
            <div id="card">
                <div id='card-title'><h2 id='cards-panel'>{name}</h2></div>
                <div id='card-content'>
                    {children}
                    COST: {cost} &nbsp;<strong>|</strong>&nbsp;
                    ATK: {atk} &nbsp;<strong>|</strong>&nbsp;
                    DEF: {def} &nbsp;<strong>|</strong>&nbsp;
                    HP: {hp} &nbsp;<strong>|</strong>&nbsp;
                    MP: {mp} &nbsp;<strong>|</strong>&nbsp;
                    EFFECTS: {effects}
                </div>
            </div>
        </>
    )
}

export default Card