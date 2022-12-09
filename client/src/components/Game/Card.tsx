import React, { ReactNode } from 'react'
import ICard from '../../utils/interfaces/ICard';

interface Props extends ICard {
    children: ReactNode
}

const Card = (props: Props) => {
    const { name, cost, atk, def, hp, mp, effects, range, handImgData, boardImgData, _id, children } = { ...props };

    return (
        <>
            <div id="admin-card">
                <div id='admin-card-title'><h2>{name}</h2></div>
                <div id='admin-card-content'>
                    {children}
                    <br />
                    <span>COST: {cost} &nbsp;<strong>|</strong>&nbsp;</span>
                    <br />
                    <span>ATK: {atk} &nbsp;<strong>|</strong>&nbsp;</span>
                    <br />
                    <span>DEF: {def} &nbsp;<strong>|</strong>&nbsp;</span>
                    <br />
                    <span>HP: {hp} &nbsp;<strong>|</strong>&nbsp;</span>
                    <br />
                    <span>MP: {mp} &nbsp;<strong>|</strong>&nbsp;</span>
                    <br />
                    <span>RANGE: {range} &nbsp;<strong>|</strong>&nbsp;</span>
                    <br />
                    <span>EFFECTS: {effects}</span>
                    <br />
                    <img src={handImgData} alt="Hand Image" />
                    <br />
                    <img src={boardImgData} alt="Board Image" />
                </div>
            </div>
        </>
    )
}

export default Card