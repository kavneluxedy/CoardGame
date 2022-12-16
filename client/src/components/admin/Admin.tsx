import React, { useEffect, useState } from 'react'
import useDb from '../../utils/hooks/useDb'
import Card from '../game/Card';
import Loading from "../layout/Loading";
import UpdateCard from "./UpdateCard";
import DeleteCard from './DeleteCard';
import Create from './Create';
import useModal from "../../utils/hooks/useModal";
import Button from "../layout/misc/Button";

const Admin = () => {
    const [filter, setFilter] = useState<Object>({});

    const { Modal, handleVisibility } = useModal();

    const [cards, setCards] = useState<Array<Object> | null>(null)
    const { loading, data, dbComm } = useDb("COARD", "cards", {}, "/init");

    const refresh = () => {
        dbComm("COARD", "cards", { query: filter, options: { sort: { "name": 1 } } }, "/api/cards/find");
        // setTimeout(refresh, 5000); // AUTOMATION
    }

    useEffect(() => {
        refresh();
    }, [])

    useEffect(() => {
        refresh();
    }, [filter])

    useEffect(() => {
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

    return (
        <>
            <Button
                onClick={handleVisibility}>
                CREATE CARD
            </Button>

            <Modal title="CREATE CARD">
                <Create refresh={refresh} />
            </Modal>

            <button className="button" onClick={() => { setFilter({}); refresh(); }}>REFRESH</button>

            <select onChange={e => setFilter({ type: e.target.value })}>
                <option value="" selected>NO FILTER</option>
                <option value="unit">Unit</option>
                <option value="land">Land</option>
                <option value="spell">Spell</option>
                <option value="building">Building</option>
                <option value="consumable">Consumable</option>
            </select>

            {loading && <Loading />}

            {cards && <div className="admin-panel-container">
                {cards.map((card: any, key) => {
                    return (
                        <Card name={card.name} cost={card.cost} atk={card.atk} def={card.def} hp={card.hp} mp={card.mp} range={card.range} effects={card.effects} handImgData={card.handImg} boardImgData={card.boardImg} type={card.type} _id={card._id} key={key} >
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