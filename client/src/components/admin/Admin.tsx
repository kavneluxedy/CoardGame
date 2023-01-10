import React, { useEffect, useState } from "react";
import useDb from '../../utils/hooks/useDb';
import Card from '../game/Card';
import Loading from "../layout/Loading";
import UpdateCard from "./UpdateCard";
import DeleteCard from './DeleteCard';
import Create from './Create';
import useModal from "../../utils/hooks/useModal";
import Button from "../layout/misc/Button";
import CardsFilter from '../CardsFilter';
import CreateDeck from "../CreateDeck";
import IDeck from "../../utils/interfaces/IDeck";

const Admin = () => {
    const [currentDeck, setCurrentDeck] = useState<IDeck>({
        name: "Default Deck", content: [], stats: {
            nbCards: 0, manaAvg: NaN
        }
    });
    const { loading, data, dbComm } = useDb("COARD", "cards", {}, "/init");
    const [filter, setFilter] = useState<Object>({});
    const { Modal, handleVisibility } = useModal();
    const [cards, setCards] = useState<Array<Object>>([]);

    const refresh = () => {
        dbComm("COARD", "cards", { query: filter, options: { sort: { "name": 1 } } }, "/api/cards/find");
        // setTimeout(refresh, 5000); // AUTOMATION
    }

    const handleDisplayCards = (data) => {
        if (data.error) {
            setCards([]);
            return data.result;
        } else {
            setCards(data.result);
        }
    }

    useEffect(() => {
        refresh();
    }, [])

    useEffect(() => {
        if (!loading) {
            handleDisplayCards(data);
        }
    }, [loading, data])

    useEffect(() => {
        if (currentDeck.content[0]?.name && currentDeck.content.length) {
            let costSum = 0;
            let nbCard = currentDeck.content.length;
            currentDeck.content.forEach(card => { costSum += (card.cost) ? card.cost : 0 });
            let stat = { nbCards: nbCard, manaAvg: costSum / nbCard }
            setCurrentDeck({ ...currentDeck, stats: stat });
        }
    }, [currentDeck.content])

    return (
        <div className="admin-panel-wrapper">

            <Modal title="CREATE CARD">
                <Create refresh={refresh} />
            </Modal>

            <nav className="topbar-filter">
                <div className="panel-management">
                    <CardsFilter setFilter={setFilter} />
                    <Button
                        onClick={handleVisibility}>
                        CREATE CARD
                    </Button>
                    <Button className="button" onClick={() => { setFilter({}); refresh(); }}>REFRESH</Button>
                </div>
            </nav>

            <CreateDeck currentDeck={currentDeck} setCurrentDeck={setCurrentDeck} />

            {loading && <Loading />}

            {cards && <div className="admin-panel-container">
                {cards.map((card: any, key) => {
                    return (
                        <Card name={card.name} cost={card.cost} atk={card.atk} def={card.def} hp={card.hp} mp={card.mp} range={card.range} effects={card.effects} handImgData={card.handImg} boardImgData={card.boardImg} type={card.type} _id={card._id} key={key} >
                            <DeleteCard _id={card._id} refresh={refresh} />
                            <UpdateCard card={card} refresh={refresh} />
                            <Button className="panel-btn" onClick={e => setCurrentDeck({ ...currentDeck, content: [...currentDeck.content, card] })}> + </Button>
                        </Card>
                    )
                })}
            </div>
            }
        </div >
    )
}

export default Admin