import React, { ReactNode, useEffect } from 'react'
import ICard from '../../utils/interfaces/ICard';

interface Props extends ICard {
    children: ReactNode
}

const Card = (props: Props) => {

    const { name, cost, atk, def, hp, mp, effects, range, handImg, boardImg, _id, children } = { ...props };


    useEffect(() => {
        if (handImg && boardImg) {
            console.log(handImg,  boardImg);
        }
    }, [])

    return (
        <>
            <div id="card">
                <div id='card-title'><h2 id='cards-panel'>{name}</h2></div>
                <div id='card-content'>
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
                    <img src={""} alt="Hand Image" />
                    <br />
                    <img src={""} alt="Board Image" />
                </div>
            </div>
        </>
    )
}

export default Card