import React, { useEffect, useState } from 'react'
import useDb from '../../utils/Hooks/useDb'
import Card from '../Game/Card';
import Loading from "../Loading";
import UpdateCard from "./UpdateCard";
import DeleteCard from './DeleteCard';

const ReadCard = () => {
    const [cards, setCards] = useState<Array<Object>>()
    const { loading, error, data, dbComm } = useDb("COARD", "cards", {}, "/init");

    const [editToggler, setEditToggler] = useState<boolean>(true);

    const refresh = () => {
        console.log("refresh");
        dbComm("COARD", "cards", {}, "/api/cards/find");
        // setTimeout(refresh, 10000); // AUTOMATION
    }

    useEffect(() => {
        refresh();
    }, [])

    useEffect(() => {
        // ? Si le chargement de la data est terminé
        if (!loading) {
            handleDisplayCards(data);
        }
    }, [loading, data])

    const handleDisplayCards = (data) => {
        if (data.error) {
            console.error(data.result);
            console.error(error);
            return data.result;
        } else {
            console.table(data.result);
            setCards(data.result);
        }
    }

    if (loading) { return <Loading /> }

    return (
        <>
            <button className='button' onClick={refresh}>REFRESH</button>
            {cards && <div className="admin-panel-container">
                {cards.map((card: any, key) => {
                    return (
                        <Card _id={card._id} name={card.name} cost={card.cost} atk={card.atk} def={card.def} hp={card.hp} mp={card.mp} effects={card.effects} key={key} >

                            <DeleteCard _id={card._id} />

                            <UpdateCard card={card} />

                        </Card>
                    )
                })}
            </div>
            }
        </>
    )
}

export default ReadCard