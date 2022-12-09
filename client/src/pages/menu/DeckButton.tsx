import React, { createRef, useContext } from "react";
import DeckLogo from "../../../assets/images/svg/card.min.svg";
import { AppContext } from "../../utils/ContextProvider";

const DeckButton = ({ nav }) => {

    const wrapper = createRef<HTMLDivElement>();
    const card1 = createRef<HTMLImageElement>();
    const card2 = createRef<HTMLImageElement>();
    const card3 = createRef<HTMLImageElement>();
    const WIDTH = 80;


    const startAnimation = () => {
        let translateOffsetX = (WIDTH / 6) + 'px';
        let rotateOffsetZ = '14deg';
        card1.current!.style.rotate = `${rotateOffsetZ}`;
        card1.current!.style.translate = `${translateOffsetX} 0 0`;
        card3.current!.style.rotate = `-${rotateOffsetZ}`;
        card3.current!.style.translate = `-${translateOffsetX} 0 0`;
    }

    const stopAnimation = () => {
        card1.current!.style.translate = "0 0 0";
        card3.current!.style.translate = "0 0 0";
        card1.current!.style.rotate = '0deg';
        card3.current!.style.rotate = '0deg';
    }

    const AppCtx = useContext(AppContext);
    if (AppCtx === null) {
        return <></>;
    }
    const { user } = { ...AppCtx };

    return (
        <>
            <div onClick={() => (user.isConnected) ? nav("decks") : nav("collection")} className="deck-logo-wrapper" ref={wrapper} onMouseEnter={startAnimation} onMouseLeave={stopAnimation}>
                <img src={DeckLogo} className="logo card-logo3" ref={card3} />
                <img src={DeckLogo} className="logo card-logo2" ref={card2} />
                <img src={DeckLogo} className="logo card-logo1" ref={card1} />
                <img src={DeckLogo} className="logo hidden-card" />
            </div>
        </>
    )
}

export default DeckButton