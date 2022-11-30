import React, { useEffect, useState } from 'react'
import useDb from '../../utils/hooks/useDb'
import Card from '../game/Card';
import Loading from "../Loading";
import UpdateCard from "./UpdateCard";
import DeleteCard from './DeleteCard';
import CreateCard from './CreateCard';

const Admin = () => {
    const [cards, setCards] = useState<Array<Object> | null>(null)
    const { loading, error, data, dbComm } = useDb("COARD", "cards", {}, "/init");

    const refresh = () => {
        dbComm("COARD", "cards", { query: {}, options: { sort: { "name": 1 } } }, "/api/cards/find");
        // setTimeout(refresh, 5000); // AUTOMATION
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
            setCards(null);
            return data.result;
        } else {
            setCards(data.result);
        }
    }

    // if (loading) { return <Loading /> }

    return (
        <>
            <CreateCard refresh={refresh} />

            <button className='button' onClick={refresh}>REFRESH</button>

            {cards && <div className="admin-panel-container">
                {cards.map((card: any, key) => {
                    return (
                        <Card name={card.name} cost={card.cost} atk={card.atk} def={card.def} hp={card.hp} mp={card.mp} range={card.range} effects={card.effects} handImg={card.handImg} boardImg={card.boardImg} _id={card._id} key={key} >
                            <DeleteCard _id={card._id} refresh={refresh} />
                            <UpdateCard card={card} refresh={refresh} />
                        </Card>
                    )
                })}
            </div>
            }
        </>
    )
}

export default Admin